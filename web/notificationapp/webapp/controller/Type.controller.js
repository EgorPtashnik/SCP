sap.ui.define([
  "notificationapp/controller/BaseController",
  "notificationapp/utils/utils",
  "sap/m/MessageBox"
], function(BaseController, Utils, MessageBox) {
  "use strict";

  return BaseController.extend("notificationapp.controller.Type", {
    onInit() {
      BaseController.prototype.onInit.apply(this, arguments);
      this.getRouter().attachRouteMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched(oEvent) {
      if (oEvent.getParameter("name") !== "type") return;
      this.setSelectedPage("nType");
    },
    toggleForm() {
      if (!this.state.getProperty("/type/data/NotificationTypeId")) this._generateUUID();
      this.state.setProperty("/type/new", !this.state.getProperty("/type/new"));
    },
    handleSubmitNewNotification() {
      const oTableBinding = this.byId("idTypeTable").getBinding("items");
      const oNewTypeData = this.state.getProperty("/type/data");
      if (!oNewTypeData.NotificationTypeDesc) {
        MessageBox.error("Fill all required fields!");
        return;
      }
      oTableBinding.create(oNewTypeData);
      this._restoreState();
    },
    _restoreState() {
      this.state.setProperty("/type/data", {
        NotificationTypeId: "",
        NotificationTypeDesc: "",
        PriorityDefault: "",
        DoNotDeliver: false,
        DoNotDeliverMob: false,
      });
      this.state.setProperty("/type/new", false);
    },
    _generateUUID() {
      this.state.setProperty("/type/data/Id", Utils.generateUUID());
    }
  });
});
