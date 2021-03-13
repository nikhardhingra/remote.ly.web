const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Project = require("../../models/Project");
const { User } = require("../../models/User");

const Response = require("../../utils/Response");

const auth = require("../../middleware/auth");

router.get("/user-item", (req, res) => {
  let response = new Response("", []);
  const { user_id } = req.query;

  User.findById(user_id, function (err, user) {
    if (err) {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    }
    response.rows = user;
    return res.json(response);
  });
});

router.get("/search", (req, res) => {
  let response = new Response("", []);
  let { name, experience, skill } = req.query;
  console.log(skill);

  if (name) {
    User.find({ name: new RegExp(name, "i") }, function (err, users) {
      if (err) {
        response.message = `Internal Server Error: ${err.toString()}`;
        return res.status(500).json(response);
      }
      response.rows = users;
      return res.json(response);
    });
  } else if (experience) {
    User.find({ experience }, function (err, users) {
      if (err) {
        response.message = `Internal Server Error: ${err.toString()}`;
        return res.status(500).json(response);
      }
      response.rows = users;
      return res.json(response);
    });
  } else if (skill) {
    console.log({ skill });
    User.find({ skills: skill }, function (err, users) {
      if (err) {
        response.message = `Internal Server Error: ${err.toString()}`;
        return res.status(500).json(response);
      }
      response.rows = users;
      return res.json(response);
    });
  }
});

router.post("/register", (req, res) => {
  let response = new Response("", []);
  const { name, email, password, experience } = req.body;

  // Simple validation
  if (!name || !email || !password || !experience) {
    response.message = "Name, Email, Password and Experience are required";
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
        experience,
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
                    experience: user.experience,
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
                id: user._id,
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

router.post("/about", auth, (req, res) => {
  let response = new Response("", []);
  User.updateOne({ _id: req.user.id }, { $set: { about: req.body.about } })
    .then(() => {
      User.findById(req.user.id)
        .then((user) => {
          response.rows = user;
          return res.json(response);
        })
        .catch((err) => {
          response.message = `Internal Server Error: ${error}`;
          return res.status(500).json(response);
        });
    })
    .catch((err) => {});
});

router.post("/contact", auth, (req, res) => {
  let response = new Response("", []);
  User.updateOne(
    { _id: req.user.id },
    { $set: { github: req.body.github, linkedin: req.body.linkedin } }
  )
    .then(() => {
      User.findById(req.user.id)
        .then((user) => {
          response.rows = user;
          return res.json(response);
        })
        .catch((err) => {
          response.message = `Internal Server Error: ${error}`;
          return res.status(500).json(response);
        });
    })
    .catch((err) => {});
});

router.post("/skills", auth, (req, res) => {
  console.log(req.body.skills);
  let response = new Response("", []);
  User.updateOne({ _id: req.user.id }, { $set: { skills: req.body.skills } })
    .then(() => {
      User.findById(req.user.id)
        .then((user) => {
          response.rows = user;
          return res.json(response);
        })
        .catch((err) => {
          response.message = `Internal Server Error: ${error}`;
          return res.status(500).json(response);
        });
    })
    .catch((err) => {});
});

router.post("/change-avatar", auth, (req, res) => {
  let response = new Response("", []);
  User.updateOne(
    { _id: req.user.id },
    { $set: { avatar_url: req.body.avatarUrl } }
  )
    .then(() => {
      User.findById(req.user.id)
        .then((user) => {
          response.rows = user;
          console.log(response.rows);
          return res.json(response);
        })
        .catch((err) => {
          response.message = `Internal Server Error: ${error}`;
          return res.status(500).json(response);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/reset-password", auth, (req, res) => {
  let response = new Response("", []);
  const { oldPassword, newPassword } = req.body;
  const user_id = req.user.id;

  User.findById(user_id)
    .then((user) => {
      if (!user) {
        response.message = "User does not exist";
        return res.status(400).json(response);
      }

      console.log(newPassword);
      bcrypt
        .compare(oldPassword, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            response.message = "Invalid credentials";
            return res.status(400).json(response);
          }
          bcrypt.genSalt(10, (hash, salt) => {
            bcrypt.hash(newPassword, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;
              user
                .save()
                .then((user) => {
                  return res.json(response);
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

router.delete("/", auth, (req, res) => {
  let response = new Response("", []);
  const user_id = req.user.id;

  User.deleteOne({ _id: user_id }, function (err) {
    if (err) {
      response.message = `Internal Server Error: ${error}`;
      return res.status(500).json(response);
    }

    Project.deleteMany({ user_id: user_id }, function (err) {
      if (err) {
        response.message = `Internal Server Error: ${error}`;
        return res.status(500).json(response);
      }
      return res.json(response);
    });
  });
});

module.exports = router;
