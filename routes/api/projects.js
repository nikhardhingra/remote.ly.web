const router = require("express").Router();

const Project = require("../../models/Project");
const { User } = require("../../models/User");

const Response = require("../../utils/Response");

const auth = require("../../middleware/auth");

router.get("/search", (req, res) => {
  let response = new Response("", []);
  const { category } = req.query;

  Project.find({ category }, function (err, projects) {
    if (err) {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    }
    responseProjects = [];
    let projectsProcessed = 0;
    projects.forEach((project) => {
      User.findById(project.user_id, function (err, user) {
        if (err) {
          response.message = `Internal Server Error: ${err.toString()}`;
          return res.status(500).json(response);
        }
        responseProjects.push({
          ...project._doc,
          user,
        });
        projectsProcessed++;
        if (projectsProcessed === projects.length) {
          response.rows = responseProjects;
          return res.json(response);
        }
      });
    });
  });
});

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

router.get("/list", (req, res) => {
  let response = new Response("", []);
  const { user_id } = req.query;

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
  const { name, category, description,url } = req.body;
  const user_id = req.user.id;

  if (!name || !(category.length > 0) || !description) {
    response.message = "Name, Category and Description are required";
    return res.status(400).json(response);
  }

  const project = new Project({
    name,
    category,
    user_id,
    description,
    url,
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
  const { name, category, description, url, project_id } = req.body;
  const user_id = req.user.id;

  if (!name || !(category.length > 0) || !description) {
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
    project.url = url;

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
