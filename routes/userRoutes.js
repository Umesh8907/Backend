import express from 'express';
import {createUser, getAllUsers, getUserById} from "../controllers/user.contoller.js"

const userRoute = express.Router();
userRoute.post('/register',createUser)
userRoute.get('/getallusers',getAllUsers)
userRoute.get('/getuserbyid/:id',getUserById)

export default userRoute;