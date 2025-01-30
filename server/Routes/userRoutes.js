import express from "express"

import { CreateUsers , deleteUsers ,getUsers,getOneUsers,UpdateUsers } from "../controller/userController.js"

const router = express.Router();

router.post("/", CreateUsers);
router.get("/all",getUsers)
router.get('/:id', getOneUsers);
router.put('/:id', UpdateUsers);
router.delete("/:id",deleteUsers)


export default router;
