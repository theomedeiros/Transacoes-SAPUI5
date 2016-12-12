sap.ui.define([
	"com/projetos/transacoes/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"

], function(BaseController, JSONModel, MessageBox) {
	"use strict";

	return BaseController.extend("com.projetos.transacoes.controller.CreateEntity", {
		
		onInit: function(oEvent) {
			
			this._oViewModel = new JSONModel({
				delay: 0,
				busy: false,
				extension: true,
				viewTitle: ""
			});
			this.setModel(this._oViewModel, "viewModel");
			
		},
		
		onNavBack: function(oEvent) {
			
			window.history.go(-1);
		}

	});

});