const router = require("express").Router();

const Workspace = require("../../models/Workspace");
const { User } = require("../../models/User");

const Response = require("../../utils/Response");

const auth = require("../../middleware/auth");

// Create new workspace
router.post("/create", auth, async (req, res) => {
  let response = new Response("", []);
  const { name, unique_name } = req.body;
  if (!name || !unique_name) {
    response.message = "Please enter Name and Unique Name";
    return res.status(400).json(response);
  }

  const created_by_user_id = req.user.id;
  console.log(created_by_user_id);

  const created_by_user = await User.findById(created_by_user_id).exec();
  console.log(created_by_user);

  Workspace.findOne({ unique_name })
    .then((workspace) => {
      if (workspace) {
        console.log(workspace);
        response.message = `Unique name is already taken. Choose a different unique name`;
        return res.status(400).json(response);
      }
    })
    .catch((err) => {
      console.log(`qwertyui`);
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    });

  Workspace.findOne({ users: created_by_user })
    .then((workspace) => {
      if (workspace) {
        response.message = "You are already in a workspace.";
        return res.status(400).json(response);
      }
      console.log(`Alreadyy in`);
      const newWorkspace = new Workspace({
        name,
        unique_name,
        created_by_user,
      });

      newWorkspace.users.push(created_by_user);
      newWorkspace.admin_users.push(created_by_user);
      console.log(newWorkspace);
      newWorkspace
        .save()
        .then((workspace) => {
          created_by_user.workspace_id = workspace._id;
          created_by_user
            .save()
            .then((user) => {
              response.rows = {
                name: workspace.name,
                unique_name: workspace.unique_name,
                created_by_user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              };
              return res.json(response);
            })
            .catch((err) => {
              response.message = `Internal Server Error: ${err.toString()}`;
              return res.status(500).json(response);
            });
        })
        .catch((err) => {
          console.log(`123456789`);
          response.message = `Internal Server Error: ${err.toString()}`;
          return res.status(500).json(response);
        });
    })
    .catch((err) => {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    });
});

// Join a workspace
router.post("/join", auth, async (req, res) => {
  let response = new Response("", []);
  const { workspace_id } = req.body;

  if (!workspace_id) {
    response.message = `Internal Server Error: workspace_id is required`;
    return res.status(500).json(response);
  }

  Workspace.findById(workspace_id)
    .then(async (workspace) => {
      console.log(workspace);
      if (!workspace) {
        response.message = `Internal Server Error: workspace does not exist`;
        return res.status(500).json(response);
      }
      const user = await User.findById(req.user.id).exec();
      user.workspace_id = workspace._id;
      user
        .save()
        .then((user) => {
          workspace.users.push(user);
          workspace
            .save()
            .then((workspace) => {
              console.log(workspace);

              response.rows = workspace;
              return res.json(response);
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
    })
    .catch((err) => {
      response.message = `Internal Server Error: ${err.toString()}`;
      return res.status(500).json(response);
    });
});

router.get("/search", async (req, res) => {
  let response = new Response("", []);
  const { page = 1, limit = 10, searchQuery } = req.query;
  console.log(searchQuery);

  try {
    let workspaces, count;
    if (!searchQuery || searchQuery === "") {
      workspaces = await Workspace.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
      count = await Workspace.countDocuments();
    } else {
      workspaces = await Workspace.find({
        $or: [
          { unique_name: { $regex: searchQuery, $options: "i" } },
          { name: { $regex: `.*${searchQuery}.*`, $options: "i" } },
        ],
      })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
      count = await Workspace.countDocuments({
        $or: [
          { unique_name: { $regex: `.*${searchQuery}.*`, $options: "i" } },
          { name: { $regex: `.*${searchQuery}.*`, $options: "i" } },
        ],
      });
    }

    response.rows = {
      workspaces,
      totalPages: Math.ceil(count / limit),
      currentPage: page * 1,
    };
    return res.json(response);
  } catch (error) {
    response.message = `Internal Server Error: ${error.message}`;
    return res.status(400).json(response);
  }
});

module.exports = router;
