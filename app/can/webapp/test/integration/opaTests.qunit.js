sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'can/test/integration/FirstJourney',
		'can/test/integration/pages/LiabilityBasedOnAmount_1List',
		'can/test/integration/pages/LiabilityBasedOnAmount_1ObjectPage'
    ],
    function(JourneyRunner, opaJourney, LiabilityBasedOnAmount_1List, LiabilityBasedOnAmount_1ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('can') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheLiabilityBasedOnAmount_1List: LiabilityBasedOnAmount_1List,
					onTheLiabilityBasedOnAmount_1ObjectPage: LiabilityBasedOnAmount_1ObjectPage
                }
            },
            opaJourney.run
        );
    }
);