import express from "express";
import { Registrar } from "./controllers/Session.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserRoutes = express.Router();
const secret = "secret123";

// UserRoutes.get('/profile', ((req, res) => {
//     const token = req.cookies.token;
//     jwt.verify(token, secret, (err, data)=> {
//         if(err){
//             res.status(403).send();
//         }else{
//             res.json(data).send();
//         }
//     });
// }));

// UserRoutes.post('/login', ((req, res) => {
//     const {email, password} = req.body;
//     const isLoginOk = email === 'test@example.com' && password === 'test';
//     isLoginOk && jwt.sign(email, secret, (err, token) => {
//         if(err){
//             res.status(403).send();
//         } else {
//             res.cookie('token', token).send();
//         }
//     });

//     if(!isLoginOk){
//         res.status(403).send();
//     };

// }));

UserRoutes.post("/register", async (req, res) => {
  try {
    const response = await Registrar(req.body);
    return res.status(200).json({ data: {}, isSucces: true, message: response });
  } catch (e) {
    return res.status(500).json({ data: {}, isSucces: false, error: e ? e.toString() : "Error de servidor" });
  }
});

export default UserRoutes;
