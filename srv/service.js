const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  let { Criticality } = this.entities;
  this.before('READ', Criticality, async (req) => {
    // Get the new value for property '3' from the request data
    // const new3Value = req.data;
    const new3Value = 3;
    // Read the data from the database
    const data = await cds.tx(req).run(SELECT.from(Criticality).where({ id: 1 }));

    // Check if data was found for id = 1
    if (data.length === 0) {
      throw new Error('No data found for id = 1');
    }

    // Update the property '3' in the database where 'id' is equal to 1
    await cds.tx(req).run(
      UPDATE(Criticality)
        .set({ cVal: new3Value })
        .where({ id: 1 }) 
    );



    // Return success response  
    // return { success: true };
  });
  // const data1 = await cds.tx(req).run(SELECT.from(Criticality).where({ id: 1 }));
  // const data1 =  await cds.tx(req).run(SELECT.from(Criticality));
});
