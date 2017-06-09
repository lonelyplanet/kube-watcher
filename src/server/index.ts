import * as K8s from "k8s";
import * as express from "express";
import * as socket from "socket.io";
import * as http from "http";
import * as expressReactViews from "express-react-views";
import * as path from "path";
import * as serveStatic from "serve-static";

const isProd = process.env.NODE_ENV === "production";

const app = express();

app.use(serveStatic(path.join(__dirname, "../app/assets/")));

app.set("views", path.join(__dirname, "../app"));

app.set("view engine", "js");
app.engine("js", expressReactViews.createEngine({
  transformViews: false,
}));

const kubeapi = K8s.api({
  kubeconfig: "/Users/jonathanc/.kube/config.prod",
  version: "/api/v1",
  strictSSL: false,
});

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

app.use(router);

const server = http.createServer(app);

const io = socket(server);
io.on("connection", () => {
  try {
    const source = kubeapi.watch("watch/namespaces/default/services");

    source.subscribe(data => {
      io.emit("pod.add", data);
    }, err => {
      console.log(err);
    });
  } catch(e) {
    console.error(e);
  }

   // emit an event to the socket
});

server.listen(3000);

server.on("listening", onListening);
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;

  console.info("Listening on " + bind);
}

// const kubectl = K8s.kubectl({
//     kubeconfig: "/Users/jonathanc/.kube/config",
// });

