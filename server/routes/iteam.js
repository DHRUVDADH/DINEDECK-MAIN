const express = require("express")
const router = express.Router()



const { addIteam , getIteam} = require("../controller/iteam")
const {addOrder , create ,create2,paid,find} = require("../controller/order");



router.post("/additeam",addIteam);
router.get("/getiteam",getIteam)                           
router.post("/addOrder",addOrder);
router.post("/paid",paid)
router.post("/test",create)
router.get("/findorder",find)


module.exports = router;

 