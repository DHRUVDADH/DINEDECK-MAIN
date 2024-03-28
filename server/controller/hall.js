const restaurent = require("../models/halls")

const halls = async (req, res) => {

    // const { totalhall, totaltables } = req.body;
    try {
        // const restauren = await restaurent.create({ totalhall, totaltables });
        // const id = "6602cac18e59de4176778bda";
        // const table = await restaurent.findByIdAndUpdate({ _id:"6602cac18e59de4176778bda" },
        //     {
        //         $push: {
        //             "halls.tables": {
        //                 id: 465,
        //                 currentorder: "sd"
        //             }
        //         }
        //     },
        //     { new: true })

        const hallsData = [
            {
                halls: new Map([
                    ['1', [
                        { id: 1, currentOrder: 'Order1' },
                        { id: 2, currentOrder: 'Order2' }
                    ]],
                    ['2', [
                        { id: 3, currentOrder: 'Order3' },
                        { id: 4, currentOrder: 'Order4' }
                    ]]
                ])
            }
        ];
        const da = await restaurent.create(hallsData);

        res.json({
            success: true,
            message: "table and halls are created"
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
}

module.exports = { halls }