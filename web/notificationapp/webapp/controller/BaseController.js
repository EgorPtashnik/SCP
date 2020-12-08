sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent"
], function(Controller, History, UIComponent) {
  "use strict";

  return Controller.extend("notificationapp.controller.BaseController", {
    onInit() {
      this.state = this.getOwnerComponent().getModel("state");
    },
    getModel(sName) {
      return this.getView().getModel(sName)
    },
    setModel(oModel, sName) {
      return this.getView().setModel(oModel, sName);
    },
    getResourceBundle() {
      return this.getOwnerComponent().getModel("i18n").getResourceBundle();
    },
    navTo(sTarget, mParameters, bReplace) {
      this.getRouter().navTo(sTarget, mParameters, bReplace);
    },
    getRouter() {
      return UIComponent.getRouterFor(this);
    },
    onNavBack() {
      const sPreviousHistory = History.getInstance().getPreviousHash();
      if (sPreviousHistory !== undefined) {
        window.history.back();
      } else {
        this.getRouter().navTo("home", {}, true);
      }
    },
    setSelectedPage(sKey) {
      this.state.setProperty("/selectedPage", sKey);
    }
  });
})
