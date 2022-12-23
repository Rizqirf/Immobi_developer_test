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
      "table_department",
      [
        {
          nama_department: "Business Development",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_department: "Finance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_department: "General Affairs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_department: "IT Development",
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
    await queryInterface.bulkDelete("table_department", null, {});
  },
};
