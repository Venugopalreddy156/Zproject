sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/capm/capm1/test/integration/pages/trainersList",
	"com/capm/capm1/test/integration/pages/trainersObjectPage"
], function (JourneyRunner, trainersList, trainersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/capm/capm1') + '/test/flp.html#app-preview',
        pages: {
			onThetrainersList: trainersList,
			onThetrainersObjectPage: trainersObjectPage
        },
        async: true
    });

    return runner;
});

