sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent"
], function(Controller, History, UIComponent) {
  "use strict";

  return Controller.extend("notifications_toolkit.controller.BaseController", {
    getModel(sName) {
      return this.getView().getModel(sName)
    },
    setModel(oModel, sName) {
      return this.getView().setModel(oModel, sName);
    },
    getResourceBundle() {
      return this.getOwnerComponent().getModel("i18n").getResourceBundle();
    },
    navTo() {
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
    }
  });
})
