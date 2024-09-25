import passport from "passport";
import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel.js";
import { v4 as uuidv4 } from "uuid";

const uuid = uuidv4();

dotenv.config();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/home",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }

        user = await new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          password: uuid.replace(/-/g, "").slice(0, 12),
        }).save();

        return done(null, user);
      } catch (error) {
        console.log(error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
