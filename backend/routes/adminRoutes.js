router.get(
  "/users",
  authenticate,
  authorizeRoles("admin"),
  async (req, res) => {
    const { name, email, address, role } = req.query;
    const filters = {};
    if (name) filters.name = new RegExp(name, "i");
    if (email) filters.email = new RegExp(email, "i");
    if (address) filters.address = new RegExp(address, "i");
    if (role) filters.role = role;

    const users = await User.find(filters);
    res.json(users);
  }
);
