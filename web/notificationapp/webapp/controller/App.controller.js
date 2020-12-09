sap.ui.define([
  "notificationapp/controller/BaseController"
], function(BaseController) {
  "use strict";

  return BaseController.extend("notificationapp.controller.App", {
    onInit() {
      BaseController.prototype.onInit.apply(this, arguments);
      this.state.setProperty("/navMenuItems", [
        {
          name: this.getResourceBundle().getText("nHome"),
          icon: "sap-icon://home",
          key: "nHome",
          target: "home"
        },
        {
          name: this.getResourceBundle().getText("nNotifications"),
          icon: "sap-icon://ui-notifications",
          key: "nNotifications",
          target: "notification"
        },
        {
          name: this.getResourceBundle().getText("nActions"),
          icon: "sap-icon://action",
          key: "nActions",
          target: "action"
        },
        {
          name: this.getResourceBundle().getText("nChannels"),
          icon: "sap-icon://connected",
          key: "nChannels",
          target: "channel"
        },
        {
          name: this.getResourceBundle().getText("nNavigation"),
          icon: "sap-icon://attachment",
          key: "nNavigation",
          target: "navigation"
        },
        {
          name: this.getResourceBundle().getText("nType"),
          icon: "sap-icon://crm-sales",
          key: "nType",
          target: "type"
        },
        {
          name: this.getResourceBundle().getText("nBulk"),
          icon: "sap-icon://goalseek",
          key: "nBulk",
          target: "bulk"
        }
      ]);
    },
    handleChangePage(oEvent) {
      const oSelectedItem = oEvent.getParameter("item");
      this.navTo(oSelectedItem.getTarget());
    },
    toggleNavMenu() {
      this.state.setProperty("/navMenuExpanded", !this.state.getProperty("/navMenuExpanded"));
    }
  });
});
