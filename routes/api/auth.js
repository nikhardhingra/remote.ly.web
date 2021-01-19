const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

const Response = require("../../utils/Response");

const auth = require("../../middleware/auth");

router.post("/register", (req, res) => {
  let response = new Response("", []);
  console.log(JSON.stringify(req.body));
  const { name, email, password } = req.body;

  // Simple validation
  if (!name | !email | !password) {
    response.message = "Name, Email and Password are required";
    return res.status(400).json(response);
  }

  // Check if user exists
  User.findOne({ email })
    .then((user) => {
      if (user) {
        response.message = "User with email already exists";
        return res.status(400).json(response);
      }

      const newUser = new User({
        name,
        email,
        password,
      });

      bcrypt.genSalt(10, (hash, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              jwt.sign({ id: user.id }, process.env.JWTSECRET, (err, token) => {
                if (err) throw err;
                response.rows = {
                  token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                  },
                };
                return res.json(response);
              });
            })
            .catch((err) => {
              response.message = `Internal Server Error: ${err.toString()}`;
              return res.status(500).json(response);
            });
        });
      });
    })
    .catch((err) => {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    });
});

router.post("/login", (req, res) => {
  let response = new Response("", []);
  const { email, password } = req.body;

  // Simple validation
  if (!email | !password) {
    response.message = "Name, Email and Password are required";
    return res.status(400).json(response);
  }

  // Check if user exists
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        response.message = "User does not exist";
        return res.status(400).json(response);
      }

      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            response.message = "Invalid credentials";
            return res.status(400).json(response);
          }
          jwt.sign({ id: user.id }, process.env.JWTSECRET, (err, token) => {
            if (err) throw err;
            response.rows = {
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
              },
            };
            return res.json(response);
          });
        })
        .catch((err) => {
          response.message = `Internal Server Error: ${err.toString()}`;
          return res.status(500).json(response);
        });
    })
    .catch((err) => {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    });
});

router.get("/user", auth, (req, res) => {
  let response = new Response("", []);
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      response.rows = user;
      return res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
