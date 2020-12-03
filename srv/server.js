const cds = require("@sap/cds");
const express = require("express");

const { folders } = cds.env;

module.exports = async (srv) => {
  const app = cds.app = srv.app || express();
  cds.emit("bootstrap", app);
  app.use(express.static(folders.app));

  cds.model = await cds.load(srv.from);
  if (cds.requires.messaging) await cds.connect.to("messaging");
  if (cds.requires.db) cds.db = await cds.connect.to("db");
  if (srv.in_memory) await cds.deploy(cds.model).to(cds.db, srv);
  cds.services = await cds.serve(srv).from(cds.model).in(app);

  cds.emit("served", cds.services);

  return app.listen(srv.port || process.env.PORT || 4004);
};
