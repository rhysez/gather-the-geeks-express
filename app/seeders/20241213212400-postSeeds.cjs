'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert( "Posts", [
      { title: "Rhys' first post", content: "I see a ship in the harbor", userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: "Rhys' second post", content: "I can and shall obey", userId: 1, createdAt: new Date(), updatedAt: new Date() }
   ] );
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete( "Posts", null, {} );
  }
};
