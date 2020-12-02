sap.ui.define([
  "todoapp/controller/BaseController",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function(BaseController, JSONModel, Filter, FO) {
  "use strict";
  return BaseController.extend("todoapp.controller.Home", {
    onInit() {
      this.oTodoList = this.byId("idTodoList");
      this.state = new JSONModel({
        deleteMode: false,
        enableClearButton: true,
        itemsCount: 0
      });
      this.setModel(this.state, "state");
    },
    onAfterRendering() {
      this.oTodoList.getBinding("items").attachChange(() => {
        this.state.setProperty("/itemsCount", this.oTodoList.getItems().length);
      });
    },
    handleTodoUpdate() {
      this.oTodoList.getBinding("items").fireEvent("change");
    },
    handleSubmitTodo(oEvent) {
      const oInput = oEvent.getSource();
      const sNewTodoItem = oInput.getValue();
      if (!sNewTodoItem) return;
      oInput.setValue("");
      this.oTodoList.getBinding("items").create({
        text: sNewTodoItem
      }, false, true);
    },
    handleClearCompleted() {
      const aSelectedItems = this.oTodoList.getSelectedItems();
      aSelectedItems.forEach(oItem => {
        oItem.getBindingContext().delete();
      });
    },
    handleFilterChange(oEvent) {
      const sSelectedKey = oEvent.getParameter("item").getKey();
      this._updateFiltersByKey(sSelectedKey);
    },
    _updateFiltersByKey(sKey) {
      const oListBinding = this.oTodoList.getBinding("items");
      switch(sKey) {
        case "0": oListBinding.filter();
        this.state.setProperty("/enableClearButton", true); return;
        case "1": oListBinding.filter(
          new Filter({
            path: "isDone",
            operator: FO.EQ,
            value1: false
          })
        );
        this.state.setProperty("/enableClearButton", false); return;
        case "2":
          oListBinding.filter(
            new Filter({
              path: "isDone",
              operator: FO.EQ,
              value1: true
            })
          );
          this.state.setProperty("/enableClearButton", false); return;
        default: return;
      }
    },

    handleDropItem(oEvent) {
      const { draggedControl: drag, droppedControl: drop, dropPosition: pos } = oEvent.getParameters();
      console.log(drag, drop, pos);
      const iDropIndex = this.oTodoList.indexOfItem(drop);
      const iDragIndex = this.oTodoList.indexOfItem(drag);
    }
  });
});
