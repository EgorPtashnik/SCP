sap.ui.define([
  "notificationapp/controller/BaseController",
  "sap/m/MessageBox"
], function(BaseController, MessageBox) {
  "use strict";

  return BaseController.extend("notificationapp.controller.Action", {
    onInit() {
      BaseController.prototype.onInit.apply(this, arguments);
      this.getRouter().attachRouteMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched(oEvent) {
      if (oEvent.getParameter("name") !== "action") return;
      this.setSelectedPage("nActions");
    },
    toggleForm() {
      this.state.setProperty("/action/new", !this.state.getProperty("/action/new"));
    },
    handleSubmitNewAction() {
      const oTableBinding = this.byId("idActionTable").getBinding("items");
      const oNewActionData = this.state.getProperty("/action/data");
      if (!oNewActionData.Id || !oNewActionData.ActionId || !oNewActionData.ActionText ||
          !oNewActionData.GroupActionText || !oNewActionData.Nature) {
        MessageBox.error("Fill all required fields!");
        return;
      }
      oTableBinding.create(oNewActionData);
      this._restoreState();
    },
    _restoreState() {
      this.state.setProperty("/action/data", {
        Id: 0,
        ActionId: "",
        ActionText: "",
        GroupActionText: "",
        Nature: ""
      });
      this.state.setProperty("/action/new", false);
    }
  });
});
