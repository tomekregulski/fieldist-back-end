const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class CampaignProduct extends Model {}

CampaignProduct.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'campaign',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "campaignProduct",
  }
);

module.exports = CampaignProduct;