// eslint-disable-next-line no-unsed-vars
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flights', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
        uppercase: true,
      },
      company_url: {
        type: Sequelize.STRING,
        allowNull: false,
        lowercase: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destiny: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departure_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      arrival_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      state_id: {
        type: Sequelize.INTEGER,
        references: { model: 'states', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flights');
  },
};
