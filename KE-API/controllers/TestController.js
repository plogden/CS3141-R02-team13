const db = require('../models')


const TestController = {
    // Logs the data in the TestTable
    async testDB(req, res) {
        const testData = await db.TestTable.findAll({raw: true})

        console.log(testData)

        return res.status(200).json({
            status: 'success',
            testData,
        })
    },

}

module.exports = TestController
