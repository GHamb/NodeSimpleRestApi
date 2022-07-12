import express from "express";

import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";


const router = express.Router()



// all routes in here are starting with /users
router.get('/', getUsers)

router.post('/', createUser )

//user/N => req.params {id:N}
router.get('/:id', getUser )

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)


export default router;