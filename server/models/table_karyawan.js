"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class table_karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      table_karyawan.belongsTo(models.table_jabatan, {
        foreignKey: "id_jabatan",
      });
    }
  }
  table_karyawan.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Nama karyawan telah diinput",
        },
        validate: {
          notNull: {
            msg: "Nama karyawan wajib diisi",
          },
          notEmpty: {
            msg: "Nama karyawan wajib diisi",
          },
        },
      },
      id_jabatan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Jabatan wajib diisi",
          },
          notEmpty: {
            msg: "Jabatan wajib diisi",
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Usia wajib diisi",
          },
          notEmpty: {
            msg: "Usia wajib diisi",
          },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Gender wajib diisi",
          },
          notEmpty: {
            msg: "Gender wajib diisi",
          },
        },
      },
      tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Tanggal lahir wajib diisi",
          },
          notEmpty: {
            msg: "Tanggal lahir wajib diisi",
          },
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Alamat wajib diisi",
          },
          notEmpty: {
            msg: "Alamat wajib diisi",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "table_karyawan",
      tableName: "table_karyawan",
    }
  );
  return table_karyawan;
};
