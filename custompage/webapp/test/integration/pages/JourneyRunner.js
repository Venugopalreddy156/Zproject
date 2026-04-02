sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"custompage/test/integration/pages/CategoriesMain"
], function (JourneyRunner, CategoriesMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('custompage') + '/test/flp.html#app-preview',
        pages: {
			onTheCategoriesMain: CategoriesMain
        },
        async: true
    });

    return runner;
});

