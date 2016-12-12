/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "com/projetos/transacoes/Component-preload",
	"modules": {
		"com/projetos/transacoes/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"com/projetos/transacoes/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"com.projetos.transacoes.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\",\n\t\t\tevents: {\n\t\t\t\tEventModelo: {}\n\t\t\t},\n\t\t\tpublicMethods: [\"setModelo\"]\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t\t\n\t\t},\n\t\t\n\t\tsetModelo: function(oModel) {\n\t\t\t\n\t\t\tthis.setModel(oModel);\n\t\t\t\n\t\t}\n\t});\n});",
		"com/projetos/transacoes/controller/CreateEntity.controller.js": "sap.ui.define([\r\n\t\"com/projetos/transacoes/controller/BaseController\",\r\n\t\"sap/ui/model/json/JSONModel\",\r\n\t\"sap/m/MessageBox\"\r\n\r\n], function(BaseController, JSONModel, MessageBox) {\r\n\t\"use strict\";\r\n\r\n\treturn BaseController.extend(\"com.projetos.transacoes.controller.CreateEntity\", {\r\n\t\t\r\n\t\tonInit: function(oEvent) {\r\n\t\t\t\r\n\t\t\tthis._oViewModel = new JSONModel({\r\n\t\t\t\tdelay: 0,\r\n\t\t\t\tbusy: false,\r\n\t\t\t\textension: true,\r\n\t\t\t\tviewTitle: \"\"\r\n\t\t\t});\r\n\t\t\tthis.setModel(this._oViewModel, \"viewModel\");\r\n\t\t\t\r\n\t\t},\r\n\t\t\r\n\t\tonNavBack: function(oEvent) {\r\n\t\t\t\r\n\t\t\twindow.history.go(-1);\r\n\t\t}\r\n\r\n\t});\r\n\r\n});",
		"com/projetos/transacoes/controller/BaseController.js": "/*global history */\nsap.ui.define([\n\t\"sap/ui/core/mvc/Controller\",\n\t\"sap/ui/core/routing/History\"\n], function(Controller, History) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"com.projetos.transacoes.controller.BaseController\", {\n\n\t\tgetRouter: function() {\n\t\t\treturn this.getOwnerComponent().getRouter();\n\t\t},\n\n\t\tgetModel: function(sName) {\n\t\t\treturn this.getView().getModel(sName);\n\t\t},\n\n\t\tsetModel: function(oModel, sName) {\n\t\t\treturn this.getView().setModel(oModel, sName);\n\t\t},\n\n\t\tgetResourceBundle: function() {\n\t\t\treturn this.getOwnerComponent().getModel(\"i18n\").getResourceBundle();\n\t\t},\n\n\t\tonNavBack: function() {\n\t\t\tvar sPreviousHash = History.getInstance().getPreviousHash();\n\n\t\t\tif (sPreviousHash !== undefined) {\n\t\t\t\t// The history contains a previous entry\n\t\t\t\thistory.go(-1);\n\t\t\t} else {\n\t\t\t\t// Otherwise we go backwards with a forward history\n\t\t\t\tvar bReplace = true;\n\t\t\t\tthis.getRouter().navTo(\"master\", {}, bReplace);\n\t\t\t}\n\t\t}\n\n\t});\n\n});",
		"com/projetos/transacoes/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});",
		"com/projetos/transacoes/view/CreateEntity.view.xml": "<mvc:View \n\txmlns:core=\"sap.ui.core\" \n\txmlns:mvc=\"sap.ui.core.mvc\" \n\txmlns=\"sap.m\"\n\txmlns:f=\"sap.ui.layout.form\"\n\txmlns:semantic=\"sap.m.semantic\"\n\tcontrollerName=\"com.projetos.transacoes.controller.CreateEntity\"\n\txmlns:html=\"http://www.w3.org/1999/xhtml\"\n\t>\n\t<App\n\t\tid=\"idAppControl\">\n\t\t<pages>\n\t\t\t<semantic:SemanticPage\n\t\t\t\tshowNavButton=\"{viewModel>/extension}\"\n\t\t\t\tnavButtonPress=\"onNavBack\"\n\t\t\t\t>\n\t\t\t\t<semantic:content>\n\t\t\t\t\t<f:SimpleForm \n\t\t\t\t\t\tclass=\"editableForm\" \n\t\t\t\t\t\tcolumnsL=\"1\" \n\t\t\t\t\t\tcolumnsM=\"1\" \n\t\t\t\t\t\teditable=\"true\" \n\t\t\t\t\t\temptySpanL=\"4\" \n\t\t\t\t\t\temptySpanM=\"4\"\n\t\t\t\t\t\tid=\"newEntitySimpleForm\"\n\t\t\t\t\t\tlabelSpanL=\"3\" \n\t\t\t\t\t\tlabelSpanM=\"3\"\n\t\t\t\t\t\tlayout=\"ResponsiveGridLayout\" \n\t\t\t\t\t\tmaxContainerCols=\"2\"\n\t\t\t\t\t\tminWidth=\"1024\"\n\t\t\t\t\t\ttitle=\"Realizar transferência de jogador\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t<Label \n\t\t\t\t\t\t\t\ttext=\"Time\"\n\t\t\t\t\t\t\t\trequired=\"true\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<Input \n\t\t\t\t\t\t\t\tname=\"Time\"\n\t\t\t\t\t\t\t\tid=\"Time\" \n\t\t\t\t\t\t\t\tvalueLiveUpdate=\"true\" \n\t\t\t\t\t\t\t\tliveChange=\"_validateSaveEnablement\"\n\t\t\t\t\t\t\t\tenabled=\"false\" \n\t\t\t\t\t\t\t\tvalue=\"{ path: 'IdTime', type: 'sap.ui.model.odata.type.String' , constraints:{ nullable:false } }\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<Label \n\t\t\t\t\t\t\t\ttext=\"Jogador\"\n\t\t\t\t\t\t\t\trequired=\"true\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<Input \n\t\t\t\t\t\t\t\tname=\"Jogador\"\n\t\t\t\t\t\t\t\tid=\"Jogador_id\" \n\t\t\t\t\t\t\t\tvalueLiveUpdate=\"true\"\n\t\t\t\t\t\t\t\tliveChange=\"_validateSaveEnablement\"\n\t\t\t\t\t\t\t\tenabled=\"true\" \n\t\t\t\t\t\t\t\tvisible=\"true\"\n\t\t\t\t\t\t\t\tvalue=\"{ path: 'Logo', type: 'sap.ui.model.odata.type.String' , constraints:{ nullable:false } }\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<Label \n\t\t\t\t\t\t\t\ttext=\"Time a ser transferido\" \n\t\t\t\t\t\t\t\trequired=\"true\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t<Input \n\t\t\t\t\t\t\t\tname=\"TimeNovo\" \n\t\t\t\t\t\t\t\tid=\"TimeNovo_id\" valueLiveUpdate=\"true\" \n\t\t\t\t\t\t\t\tliveChange=\"_validateSaveEnablement\" \n\t\t\t\t\t\t\t\tenabled=\"true\" \n\t\t\t\t\t\t\t\tvisible=\"true\"\n\t\t\t\t\t\t\t\tvalue=\"{ path: 'Nome', type: 'sap.ui.model.odata.type.String' , constraints:{ nullable:false } }\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</f:content>\n\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t</semantic:content><!-- sap.ui.core.Control -->\n\t\t\t</semantic:SemanticPage>\n\t\t</pages>\n\t</App>\t\n</mvc:View>"
	}
});