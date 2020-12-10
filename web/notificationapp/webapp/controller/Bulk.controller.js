sap.ui.define([
  "notificationapp/controller/BaseController",
  "notificationapp/utils/utils",
  "sap/m/MessageBox"
], function(BaseController, Utils, MessageBox) {
  "use strict";

  return BaseController.extend("notificationapp.controller.Bulk", {
    onInit() {
      BaseController.prototype.onInit.apply(this, arguments);
      this.getRouter().attachRouteMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched(oEvent) {
      if (oEvent.getParameter("name") !== "bulk") return;
      this.setSelectedPage("nBulk");
    },
    toggleForm() {
      if (!this.state.getProperty("/bulk/data/NotificationId")) this._generateUUID();
      this.state.setProperty("/bulk/new", !this.state.getProperty("/bulk/new"));
    },
    handleSubmitNewNotification() {
      const oTableBinding = this.byId("idBulkTable").getBinding("items");
      const oNewBulkData = this.state.getProperty("/bulk/data");
      if (!oNewBulkData.NotificationId) {
        MessageBox.error("Fill all required fields!");
        return;
      }
      oTableBinding.create(oNewBulkData);
      this._restoreState();
    },
    _restoreState() {
      this.state.setProperty("/bulk/data", {
        NotificationId: "",
        Success: false,
        DeleteOnReturn: false,
      });
      this.state.setProperty("/bulk/new", false);
    },
    _generateUUID() {
      this.state.setProperty("/bulk/data/Id", Utils.generateUUID());
    }
  });
});
