sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cri/test/integration/FirstJourney',
		'cri/test/integration/pages/CriticalityList',
		'cri/test/integration/pages/CriticalityObjectPage'
    ],
    function(JourneyRunner, opaJourney, CriticalityList, CriticalityObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cri') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCriticalityList: CriticalityList,
					onTheCriticalityObjectPage: CriticalityObjectPage
                }
            },
            opaJourney.run
        );
    }
);