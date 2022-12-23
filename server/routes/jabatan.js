const express = require(`express`);
const ControllerJabatan = require("../controllers/jabatanController");
const router = express.Router();

// define endpoint disini

router.post(`/`, ControllerJabatan.create);
router.get(`/`, ControllerJabatan.findAll);
router.get("/:id", ControllerJabatan.findOne);
router.put("/:id", ControllerJabatan.update);
router.delete("/:id", ControllerJabatan.destroy);

module.exports = router;
