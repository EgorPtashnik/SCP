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
            CreateAt: "",
            IsActionable: false,
            IsRead: false,
            IsGroupable: false,
            IsGroupHeader: false,
            NavigationTargetAction: "",
            NavigationTargetObject: "",
            NavigationIntent: "",
            NotificationTypeId: "",
            NotificationTypeKey: "",
            ParentId: "",
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
        }
      });
      return oModel;
    }
  };
});
