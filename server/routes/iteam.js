const express = require("express")
const router = express.Router()



const { addIteam , getIteam} = require("../controller/iteam")
const {addOrder , create ,create2,paid,find} = require("../controller/order");
const { addTable , findTable} = require("../controller/table");
const {isLoggedin} = require("../middlewers/AuthMiddlewers");


router.post("/additeam",addIteam);
router.get("/getiteam",getIteam)                           
router.post("/addOrder",addOrder);
router.post("/paid",paid)
router.post("/test",create)
router.get("/findorder",find)
router.post("/createtable",isLoggedin,addTable);
router.get("/findtable",isLoggedin,findTable)

module.exports = router;

 