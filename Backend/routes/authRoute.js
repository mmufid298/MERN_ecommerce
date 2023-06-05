import express from "express";
import {
  registerController,
  loginController,
  testController,
  updateProfileController,
  getOrdersController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
//register || method POST
router.post("/register", registerController);

//login || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

export default router;
