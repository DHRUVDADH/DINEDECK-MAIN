const express = require("express")
const router = express.Router()



const { addIteam , getIteam} = require("../controller/iteam")




router.post("/additeam",addIteam);
router.get("/getiteam",getIteam)                           



module.exports = router;

 