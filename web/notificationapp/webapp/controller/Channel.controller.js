sap.ui.define([
  "notificationapp/controller/BaseController",
  "sap/m/MessageBox"
], function(BaseController, MessageBox) {
  "use strict";

  return BaseController.extend("notificationapp.controller.Channel", {
    onInit() {
      BaseController.prototype.onInit.apply(this, arguments);
      this.getRouter().attachRouteMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched(oEvent) {
      if (oEvent.getParameter("name") !== "channel") return;
      this.setSelectedPage("nChannels");
    },
    toggleForm() {
      this.state.setProperty("/channel/new", !this.state.getProperty("/channel/new"));
    },
    handleSubmitNewChannel() {
      const oTableBinding = this.byId("idChannelTable").getBinding("items");
      const oNewChannelData = this.state.getProperty("/channel/data");
      if (!oNewChannelData.ChannelId || !oNewChannelData.Description) {
        MessageBox.error("Fill all required fields!");
        return;
      }
      oTableBinding.create(oNewChannelData);
      this._restoreState();
    },
    _restoreState() {
      this.state.setProperty("/channel/data", {
        ChannelId: "",
        IsActive: false,
        Description: ""
      });
      this.state.setProperty("/channel/new", false);
    }
  });
});
