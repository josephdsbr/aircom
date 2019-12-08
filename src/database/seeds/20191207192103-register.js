module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('calls', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      message_send: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      message_received: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      success: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('call');
  },
};
