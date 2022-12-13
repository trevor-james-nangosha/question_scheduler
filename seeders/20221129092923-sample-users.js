'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Users', [{
        firstName: 'Trevor',
        lastName: "Nangosha",
        email: "trevornangosha16@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Edgar',
        lastName: "Mugisha",
        email: "edgarmugisha@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
