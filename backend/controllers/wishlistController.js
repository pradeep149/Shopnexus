import userModel from "../models/userModel.js";

const addToWishlist = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    let wishlistData = userData.wishlistData;

    if (!wishlistData.includes(itemId)) {
      wishlistData.push(itemId);
      await userModel.findByIdAndUpdate(userId, { wishlistData });
      return res.json({ success: true, message: "Added to Wishlist" });
    } else {
      return res.json({
        success: false,
        message: "Item already exists in your wishlist",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

const removeFromWishlist = async (req, res) => {
  console.log(req.body);

  const { userId, id } = req.body;
  console.log(id);

  try {
    const user = await userModel.findById(userId);
    console.log(user.wishlistData);

    const newArray = user.wishlistData.filter((item) => item != id);
    console.log(newArray);
    user.wishlistData = newArray;
    await user.save();
    return res.json({ success: true, message: "removed from Wishlist" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const getUserWishlist = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let wishlistData = userData.wishlistData;

    return res.json({ success: true, wishlistData });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export { addToWishlist, getUserWishlist, removeFromWishlist };
