const { table_department } = require("../models");

class ControllerDepartment {
  static async findAll(req, res, next) {
    try {
      const data = await table_department.findAll({});

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async findOne(req, res, next) {
    const { id } = req.params;
    try {
      const data = await table_department.findByPk(id);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    const { nama_department } = req.body;
    try {
      const data = await table_department.create({
        nama_department,
      });

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      const { id } = req.params;
      const data = await table_department.destroy({
        where: {
          id,
        },
      });

      if (!data) {
        throw { name: `data_not_found`, id };
      } else {
        res.status(200).json({
          message: `Department berhasil dihapus`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  static async update(req, res, next) {
    const { id } = req.params;
    const { nama_department } = req.body;
    try {
      const data = await table_department.update(
        {
          nama_department,
        },
        { where: { id } }
      );

      if (!data) {
        throw { name: `data_not_found`, id };
      } else {
        res.status(201).json({
          message: `Department berhasil diupdate`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerDepartment;
