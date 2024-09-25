import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import wishlistRouter from "./routes/wishlistRoute.js";
import passport from "passport";
import session from "express-session";
import "./config/passport.js";
import jwt from "jsonwebtoken";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/wishlist", wishlistRouter);

app.get(
  "/api/v1/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/api/v1/auth/google/home",
  passport.authenticate("google", {
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
    session: false,
  }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, name: req.user.name },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.redirect(`${process.env.FRONTEND_URL}/home?token=${token}`);
  }
);

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.listen(port, () => console.log("Server started on PORT : " + port));
