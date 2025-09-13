const User = require("../models/User");
const Store = require("../models/Store");
const Rating = require("../models/Rating");

exports.getDashboardStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalStores = await Store.countDocuments();
  const totalRatings = await Rating.countDocuments();
  res.json({ totalUsers, totalStores, totalRatings });
};
