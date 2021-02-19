const router = require("express").Router();

const Project = require("../../models/Project");

const Response = require("../../utils/Response");

const auth = require("../../middleware/auth");

router.get("/", auth, (req, res) => {
  let response = new Response("", []);
  const user_id = req.user.id;

  Project.find({ user_id }, function (err, docs) {
    if (err !== null) {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    }
    response.rows = docs;
    return res.json(response);
  });
});

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

router.put("/", auth, (req, res) => {
  let response = new Response("", []);
  const { name, category, description, project_id } = req.body;
  const user_id = req.user.id;

  if (!name || !category || !description) {
    response.message = "Name, Category and Description are required";
    return res.status(400).json(response);
  }

  if (!project_id) {
    response.message =
      "Project Id was not passed. Internal Server Error. Contact Remote.ly team now!";
    return res.status(400).json(response);
  }

  Project.findById(project_id, function (err, project) {
    if (err !== null) {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    }
    if (project.user_id !== user_id) {
      response.message = "You can't edit this project";
      return res.status(400).json(response);
    }

    project.name = name;
    project.description = description;
    project.category = category;

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

  // const project = new Project({
  //   name,
  //   category,
  //   user_id,
  //   description,
  // });

  // project
  //   .save()
  //   .then((project) => {
  //     response.rows = project;
  //     return res.json(response);
  //   })
  //   .catch((err) => {
  //     response.message = `Internal Server Error: ${err.toString()}`;
  //     return res.status(500).json(response);
  //   });
});

module.exports = router;
