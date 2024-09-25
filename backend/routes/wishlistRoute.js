import express from "express";
import {
  getWishlistItems,
  addWishlistItem,
  removeWishlistItem,
} from "../controllers/wishlistController.js";
import authUser from "../middleware/auth.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/", authUser, getWishlistItems);
wishlistRouter.post("/toggle", authUser, addWishlistItem);
wishlistRouter.post("/remove", authUser, removeWishlistItem);

export default wishlistRouter;
