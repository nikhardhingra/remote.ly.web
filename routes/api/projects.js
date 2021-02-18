const router = require("express").Router();

const Project = require("../../models/Project");

const Response = require("../../utils/Response");

const auth = require("../../middleware/auth");

router.post("/", auth, (req, res) => {
  let response = new Response("", []);
  const { name, category, description } = req.body;
  const user_id = req.user.id;

  if (!name || !category || !description) {
    response.message = "Name, Category and Description are required";
    return res.status(400).json(response);
  }

  const project = new Project({
    name,
    category,
    user_id,
    description,
  });

  project
    .save()
    .then((project) => {
      response.rows = project;
      return res.json(response);
    })
    .catch((err) => {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    });
});

module.exports = router;
