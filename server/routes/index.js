const express = require(`express`);
const router = express.Router();

const karyawanRoutes = require("./karyawan");
const jabatanRoutes = require("./jabatan");
const departmentRoutes = require("./department");

router.get("/", (req, res) => {
  res.send("masuk");
});

router.use("/karyawan", karyawanRoutes);
router.use("/jabatan", jabatanRoutes);
router.use("/department", departmentRoutes);

module.exports = router;
