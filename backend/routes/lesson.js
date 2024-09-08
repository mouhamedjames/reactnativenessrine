import express from  "express"
import{createlesson,lessonget,lessonupdate,lessondelete}from "../controlles/lesson.js"
const  router = express.Router()
router.post("/create",createlesson)

router.put("/update/:id",lessonupdate)
router.get("/get",lessonget)
router.delete("/delete/:id",lessondelete)
export default  router