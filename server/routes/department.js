const express = require(`express`);
const ControllerDepartment = require("../controllers/departmentController");
const router = express.Router();

// define endpoint disini

router.post(`/`, ControllerDepartment.create);
router.get(`/`, ControllerDepartment.findAll);
router.get("/:id", ControllerDepartment.findOne);
router.put("/:id", ControllerDepartment.update);
router.delete("/:id", ControllerDepartment.destroy);

module.exports = router;
