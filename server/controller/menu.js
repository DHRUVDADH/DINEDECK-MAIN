const restaurent = require("../models/restaurent");
const tables = require("../models/tables");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();

const menu = async (req, res) => {
    try {
        const { totaltable, totalhall } = req.body;
        if ((totaltable && totalhall) < 1) {
            return res.json({
                success: false,
                message: "please fill atleast 1 table or hall"
            })
        }
        const restauren = await restaurent.create({
            totaltable,
            totalhall,
        })
        return res.json({
            success: true,
            message: "Table and hall inserted"
        })
    } catch (err) {
        return res.json({
            success: false,
            message: message.err
        })
    }
}

const table = async (req, res) => {
    try {
        const { Orderno, Tableno, CustomerName, CustomerPhoneno, PaymentType, MyAmount, Tax, Discount, GrantTotal, Crt_at } = req.body;

        if (!Orderno || !Tableno || !CustomerName || !CustomerPhoneno || !PaymentType || !MyAmount || !Tax || !Discount || !GrantTotal) {
            return res.json({
                success: false,
                message: "All fields are not arrive"
            })
        }

        try {
            const table = await tables.create({
                Orderno, Tableno, CustomerName, CustomerPhoneno, PaymentType, MyAmount, Tax, Discount, GrantTotal, Crt_at
            })
        } catch (err) {
            return res.json({
                    success:false,
                    message:"table not create"
            })
        }


    } catch (err) {
        return res.json({
            success:false,
            message:message.err,
        })
    }
}

module.exports = { menu,table }