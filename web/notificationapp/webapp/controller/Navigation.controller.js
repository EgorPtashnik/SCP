sap.ui.define([
  "notificationapp/controller/BaseController",
  "sap/m/MessageBox"
], function(BaseController, MessageBox) {
  "use strict";

  return BaseController.extend("notificationapp.controller.Navigation", {
    onInit() {
      BaseController.prototype.onInit.apply(this, arguments);
      this.getRouter().attachRouteMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched(oEvent) {
      if (oEvent.getParameter("name") !== "navigation") return;
      this.setSelectedPage("nNavigation");
    },
    toggleForm() {
      this.state.setProperty("/navigation/new", !this.state.getProperty("/navigation/new"));
    },
    handleSubmitNewChannel() {
      const oTableBinding = this.byId("idNavigationTable").getBinding("items");
      const oNewNavigationData = this.state.getProperty("/navigation/data");
      if (!oNewNavigationData.NotificationId || !oNewNavigationData.Key || !oNewNavigationData.Value) {
        MessageBox.error("Fill all required fields!");
        return;
      }
      oTableBinding.create(oNewNavigationData);
      this._restoreState();
    },
    _restoreState() {
      this.state.setProperty("/navigation/data", {
        NotificationId: "",
        Key: "",
        Value: ""
      });
      this.state.setProperty("/navigation/new", false);
    }
  });
});
