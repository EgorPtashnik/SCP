sap.ui.define([
  "notificationapp/controller/BaseController",
  "notificationapp/utils/utils"
], function(BaseController, Utils) {
  "use strict";

  return BaseController.extend("notificationapp.controller.Notification", {
    toggleForm() {
      if (!this.state.getProperty("/notification/data/Id")) this._generateUUID();
      this.state.setProperty("/notification/new", !this.state.getProperty("/notification/new"));
      if (this.state.getProperty("/notification/new")) this.state.setProperty("/notification/data/CreatedAt", new Date());
    },
    handleSubmitNewNotification() {
      const oTableBinding = this.byId("idNotificationTable").getBinding("items");
      const oNewNotificationData = this.state.getProperty("/notification/data");
      console.log(oNewNotificationData);
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
