sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.capm.capm1',
            componentId: 'trainersList',
            contextPath: '/trainers'
        },
        CustomPageDefinitions
    );
});