sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'can',
            componentId: 'LiabilityBasedOnAmount_1ObjectPage',
            contextPath: '/LiabilityBasedOnAmount_1'
        },
        CustomPageDefinitions
    );
});