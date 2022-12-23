const express = require(`express`);
const ControllerKaryawan = require("../controllers/karyawanController");
const router = express.Router();

// define endpoint disini

router.post(`/`, ControllerKaryawan.create);
router.get(`/`, ControllerKaryawan.findAll);
router.get("/:id", ControllerKaryawan.findOne);
router.put("/:id", ControllerKaryawan.update);
router.delete("/:id", ControllerKaryawan.destroy);

module.exports = router;
