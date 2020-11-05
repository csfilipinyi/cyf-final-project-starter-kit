const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id, user_role, first_name) {
  const payload = {
    user: {
      id: user_id,
      role: user_role,
      name: first_name,
    },
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "3h" });
}

module.exports = jwtGenerator;
