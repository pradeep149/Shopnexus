import wishlistModel from "../models/wishlistModel.js";

// Get all wishlist items for a user
const getWishlistItems = async (req, res) => {
  try {
    const userId = req.user.id;
    const wishlist = await wishlistModel
      .findOne({ user: userId })
      .populate("items");
    if (wishlist) {
      return res.status(200).json({
        success: true,
        wishlistProducts: wishlist.items,
      });
    }
    res.status(200).json({ success: true, wishlistProducts: [] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add/remove item from wishlist
const addWishlistItem = async (req, res) => {
  const { itemId } = req.body;
  const userId = req.user.id;

  try {
    let wishlist = await wishlistModel.findOne({ user: userId });

    if (!wishlist) {
      wishlist = new wishlistModel({ user: userId, items: [] });
    }

    const isInWishlist = wishlist.items.some((item) => item.equals(itemId));

    if (isInWishlist) {
      // Remove item from wishlist if it already exists
      wishlist.items = wishlist.items.filter((item) => !item.equals(itemId));
      await wishlist.save();
      return res
        .status(200)
        .json({ success: true, message: "Item removed from wishlist" });
    }

    // Add item to wishlist
    wishlist.items.push(itemId);
    await wishlist.save();

    res.status(200).json({ success: true, message: "Item added to wishlist" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove item from wishlist
const removeWishlistItem = async (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  try {
    const wishlist = await wishlistModel.findOne({ user: userId });

    if (wishlist) {
      wishlist.items = wishlist.items.filter((item) => !item.equals(productId));
      await wishlist.save();
      return res
        .status(200)
        .json({ success: true, message: "Item removed from wishlist" });
    }

    res.status(400).json({ success: false, message: "Wishlist not found" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { getWishlistItems, addWishlistItem, removeWishlistItem };
