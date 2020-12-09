sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device"
], function(JSONModel, Device) {
  "use strict";

  return {
    createDeviceModel() {
      const oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },
    createStateModel() {
      const oModel = new JSONModel({
        navMenuExpanded: false,
        navMenuItems: [],
        selectedPage: "nHome",
        notification: {
          priorities: [
            "None",
            "Low",
            "Medium",
            "High"
          ],
          new: false,
          data: {
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
          }
        },
        action: {
          new: false,
          data: {
            Id: 0,
            ActionId: "",
            ActionText: "",
            GroupActionText: "",
            Nature: ""
          }
        },
        channel: {
          new: false,
          data: {
            ChannelId: "",
            IsActive: false,
            Description: ""
          }
        },
        navigation: {
          new: false,
          data: {
            NotificationId: "",
            Key: "",
            Value: ""
          }
        }
      });
      return oModel;
    }
  };
});
