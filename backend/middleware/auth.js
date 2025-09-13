function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    const userRole = req.user.role; // assuming req.user is set after auth
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
}

module.exports = { authorizeRoles };
