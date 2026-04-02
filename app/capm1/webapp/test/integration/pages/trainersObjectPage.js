sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.capm.capm1',
            componentId: 'trainersObjectPage',
            contextPath: '/trainers'
        },
        CustomPageDefinitions
    );
});