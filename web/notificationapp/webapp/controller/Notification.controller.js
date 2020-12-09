sap.ui.define([
  "notificationapp/controller/BaseController",
  "notificationapp/utils/utils",
  "sap/m/MessageBox"
], function(BaseController, Utils, MessageBox) {
  "use strict";

  return BaseController.extend("notificationapp.controller.Notification", {
    onInit() {
      BaseController.prototype.onInit.apply(this, arguments);
      this.getRouter().attachRouteMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched(oEvent) {
      if (oEvent.getParameter("name") !== "notification") return;
      this.setSelectedPage("nNotifications");
    },
    toggleForm() {
      if (!this.state.getProperty("/notification/data/Id")) this._generateUUID();
      this.state.setProperty("/notification/new", !this.state.getProperty("/notification/new"));
      if (this.state.getProperty("/notification/new")) this.state.setProperty("/notification/data/CreatedAt", new Date());
    },
    handleSubmitNewNotification() {
      const oTableBinding = this.byId("idNotificationTable").getBinding("items");
      const oNewNotificationData = this.state.getProperty("/notification/data");
      if (!oNewNotificationData.SensitiveText || !oNewNotificationData.Text || !oNewNotificationData.GroupHeaderText ||
          !oNewNotificationData.NavigationIntent || !oNewNotificationData.NotificationCount || !oNewNotificationData.OriginId ||
          !oNewNotificationData.NavigationTargetAction || !oNewNotificationData.NotificationTypeId || !oNewNotificationData.NotificationTypeKey ||
          !oNewNotificationData.NavigationTargetObject || !oNewNotificationData.Actor_Id || !oNewNotificationData.Actor_DisplayText ||
          !oNewNotificationData.Actor_ImageSource) {
        MessageBox.error("Fill all required fields!");
        return;
      }
      oTableBinding.create(oNewNotificationData);
      this._restoreState();
    },
    _restoreState() {
      this.state.setProperty("/notification/data", {
        Id: "",
        OriginId: "",
        CreatedAt: new Date(),
        IsActionable: false,
        IsRead: false,
        IsGroupable: false,
        IsGroupHeader: false,
        NavigationTargetAction: "",
        NavigationTargetObject: "",
        NavigationIntent: "",
        NotificationTypeId: "",
        NotificationTypeKey: "",
        ParentId: null,
        Priority: "None",
        SensitiveText: "",
        Text: "",
        GroupHeaderText: "",
        NotificationCount: 1,
        SubTitle: "",
        NotificationTypeDesc: "",
        Actor_Id: "",
        Actor_DisplayText: "",
        Actor_ImageSource: ""
      });
      this.state.setProperty("/notification/new", false);
    },
    _generateUUID() {
      this.state.setProperty("/notification/data/Id", Utils.generateUUID());
    }
  });
});
