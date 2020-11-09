sap.ui.define([
  "aboutapp/controller/BaseController",
  "sap/ui/model/json/JSONModel",
], function(BaseController, JSONModel, ) {
  "use strict";

  return BaseController.extend("aboutapp.controller.Home", {
    onInit() {
      const sRootPath = $.sap.getModulePath("aboutapp");
      const oState = {
        root: sRootPath,
        email: "egor.ptashnik.webdev@gmail.com",
        phone: "+375-29-978-46-60",
        time: new Date(),
        technologies: [
          {
            name: "SAPUI5",
            desc: this.getResourceBundle().getText("sapui5desc"),
            exp: "2+",
            img: sRootPath + "/img/UI5.jpg"
          },
          {
            name: "NodeJS",
            desc: this.getResourceBundle().getText("nodejsdesc"),
            exp: "2+",
            img: sRootPath + "/img/nodejs.png"
          },
          {
            name: "ExpressJS",
            desc: this.getResourceBundle().getText("expressdesc"),
            exp: "2+",
            img: sRootPath + "/img/express.png"
          },
          {
            name: "SAP Cloud Application Programming Model",
            desc: this.getResourceBundle().getText("capdesc"),
            exp: "2+",
            img: sRootPath + "/img/cap.png"
          },
          {
            name: "Cloud Foundry",
            desc: this.getResourceBundle().getText("cfdesc"),
            exp: "2+",
            img: sRootPath + "/img/cloud-foundry.png"
          },
          {
            name: "React",
            desc: this.getResourceBundle().getText("reactdesc"),
            exp: "1+",
            img: sRootPath + "/img/react.png"
          },
        ],
        dateOfBirth: "17.10.1997",
        jobs: [
          {
            company: "LeverX",
            jobTitle: this.getResourceBundle().getText("subtitle"),
            jobDesc: this.getResourceBundle().getText("leverxDesc"),
            link: "https://leverx.com/"
          },
          {
            company: "ВАРБ",
            jobTitle: this.getResourceBundle().getText("subtitle"),
            jobDesc: this.getResourceBundle().getText("varbDesc"),
            link: "https://varb.mil.by/"
          }
        ]
      };
      this.setModel(new JSONModel(oState), "state");
      setInterval(() => this.getModel("state").setProperty("/time", new Date()), 1000);
    },
    handleSocialNetworkPress(iValue) {
      switch(iValue) {
        case 0: window.open("https://www.linkedin.com/in/egor-ptashnik-1281631b9/", "_blank"); return;
        case 1: window.open("https://vk.com/gashikkkkkkk", "_blank"); return;
        case 2: window.open("https://www.instagram.com/ptu_shnik/", "_blank"); return;
        default: return;
      }
    },
    handleSendEmail() {
      sap.m.URLHelper.triggerEmail(
        this.getModel("state").getProperty("/email"),
        "Theme",
        "Hi!"
      );
    }
  });
});
