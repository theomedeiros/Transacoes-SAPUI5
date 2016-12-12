sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/projetos/transacoes/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.projetos.transacoes.Component", {

		metadata: {
			manifest: "json",
			events: {
				EventModelo: {}
			},
			publicMethods: ["setModelo"]
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
		},
		
		setModelo: function(oModel) {
			
			this.setModel(oModel);
			
		}
	});
});