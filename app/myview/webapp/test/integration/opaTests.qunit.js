sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myview/test/integration/FirstJourney',
		'myview/test/integration/pages/myviewList',
		'myview/test/integration/pages/myviewObjectPage'
    ],
    function(JourneyRunner, opaJourney, myviewList, myviewObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myview') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThemyviewList: myviewList,
					onThemyviewObjectPage: myviewObjectPage
                }
            },
            opaJourney.run
        );
    }
);