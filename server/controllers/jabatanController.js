const { table_jabatan, table_department } = require("../models");

class ControllerJabatan {
  static async findAll(req, res, next) {
    try {
      const data = await table_jabatan.findAll({
        include: [{ model: table_department }],
      });

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async findOne(req, res, next) {
    const { id } = req.params;
    try {
      const data = await table_jabatan.findByPk(id, {
        include: [{ model: table_department }],
      });

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async create(req, res, next) {
    const { nama_jabatan, id_department } = req.body;
    try {
      const data = await table_jabatan.create({
        nama_jabatan,
        id_department,
      });

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const data = await table_jabatan.destroy({
        where: {
          id,
        },
      });

      if (!data) {
        throw { name: `data_not_found`, id };
      } else {
        res.status(200).json({
          message: `Jabatan berhasil dihapus`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async update(req, res, next) {
    const { id } = req.params;
    const { nama_jabatan, id_department } = req.body;
    try {
      const data = await table_jabatan.update(
        {
          nama_jabatan,
          id_department,
        },
        { where: { id } }
      );

      if (!data) {
        throw { name: `data_not_found`, id };
      } else {
        res.status(201).json({
          message: `Jabatan berhasil diupdate`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerJabatan;
