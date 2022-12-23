"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "table_jabatan",
      [
        {
          nama_jabatan: "FullStack Developer",
          id_department: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "BackEnd Developer",
          id_department: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "FrontEnd Developer",
          id_department: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_jabatan: "HRD",
          id_department: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("table_jabatan", null, {});
  },
};
