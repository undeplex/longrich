const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

const Product = sequelize.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    priceDiscount: { type: DataTypes.FLOAT, allowNull: true },
    detail: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    keywordSearch: { type: DataTypes.STRING, allowNull: true },
    category: { type: DataTypes.STRING, allowNull: false },
    subCategory: { type: DataTypes.STRING, allowNull: true },
    isPopular: { type: DataTypes.STRING, allowNull: true },
    image: { type: DataTypes.STRING, allowNull: false }
});

sequelize.sync();

module.exports = { sequelize, Product };
