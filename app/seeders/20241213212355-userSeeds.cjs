'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert( "Users", [
      { username: "Rhys", email: "rhys@gtg.com", createdAt: new Date(), updatedAt: new Date() }
   ] );
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete( "Users", null, {} );
  }
};
