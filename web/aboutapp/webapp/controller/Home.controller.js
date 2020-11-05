sap.ui.define([
  "aboutapp/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("aboutapp.controller.Home", {
    onInit() {
      this.setModel(new JSONModel({
        email: "egor.ptashnik.webdev@gmail.com",
        phone: "+375-29-978-46-60",
        time: new Date(),
        dateOfBirth: "17.10.1997"
      }), "state");
      setInterval(() => this.getModel("state").setProperty("/time", new Date()), 1000);
    }
  });
});
