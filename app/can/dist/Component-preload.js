//@ui5-bundle can/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"can/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("can.Component",{metadata:{manifest:"json"}})});
},
	"can/i18n/i18n.properties":'# This is the resource bundle for can\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\nflpTitle=ttle\n',
	"can/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"can","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.3","toolsId":"b26babc4-c396-47b1-9c95-b0bcb7db832a"},"dataSources":{"mainService":{"uri":"odata/v4/ms/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"object-display":{"semanticObject":"object","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.6","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"can.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"LiabilityBasedOnAmount_1List","target":"LiabilityBasedOnAmount_1List"},{"pattern":"LiabilityBasedOnAmount_1({key}):?query:","name":"LiabilityBasedOnAmount_1ObjectPage","target":"LiabilityBasedOnAmount_1ObjectPage"}],"targets":{"LiabilityBasedOnAmount_1List":{"type":"Component","id":"LiabilityBasedOnAmount_1List","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/LiabilityBasedOnAmount_1","variantManagement":"Page","navigation":{"LiabilityBasedOnAmount_1":{"detail":{"route":"LiabilityBasedOnAmount_1ObjectPage"}}}}}},"LiabilityBasedOnAmount_1ObjectPage":{"type":"Component","id":"LiabilityBasedOnAmount_1ObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/LiabilityBasedOnAmount_1"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"btp"}}'
}});
