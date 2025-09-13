const Rating = require("../models/Rating");

exports.getStoreRatings = async (req, res) => {
  const storeId = req.user.storeId;
  const ratings = await Rating.find({ store: storeId }).populate(
    "user",
    "name email"
  );
  const avgRating =
    ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length || 0;
  res.json({ ratings, avgRating });
};
