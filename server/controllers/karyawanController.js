const {
  table_karyawan,
  table_jabatan,
  table_department,
} = require("../models");

class ControllerKaryawan {
  static async create(req, res, next) {
    try {
      const { name, age, tanggal_lahir, id_jabatan, gender, alamat } = req.body;
      const data = await table_karyawan.create({
        name,
        age,
        tanggal_lahir,
        id_jabatan,
        gender,
        alamat,
      });

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async findAll(req, res, next) {
    try {
      const data = await table_karyawan.findAll({
        include: [
          {
            model: table_jabatan,
            include: [{ model: table_department }],
          },
        ],
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async findOne(req, res, next) {
    const { id } = req.params;
    try {
      const data = await table_karyawan.findByPk(id, {
        include: [
          {
            model: table_jabatan,
            include: [{ model: table_department }],
          },
        ],
      });
      if (!data) {
        throw { name: `data_not_found` };
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const data = await table_karyawan.destroy({
        where: {
          id,
        },
      });

      if (!data) {
        throw { name: `data_not_found`, id };
      }

      res.status(200).json({
        message: `Karyawan berhasil dihapus`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const { id } = req.params;
    const { name, age, tanggal_lahir, id_jabatan, gender, alamat } = req.body;
    try {
      const data = await table_karyawan.update(
        { name, age, tanggal_lahir, id_jabatan, gender, alamat },
        { where: { id } }
      );

      if (!data) {
        throw { name: `data_not_found`, id };
      } else {
        res.status(201).json({
          message: `Karyawan berhasil diupdate`,
        });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = ControllerKaryawan;
