import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config';
import { Recipe } from '../../api/interfaces/recipe.interface';

// Models

export interface ProductAttributes {
  id: string;
  productName: string;
  headline: string;
  min: number;
  max: number;
  baseRecipePrice: number;
  shippingPrice: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
// Used for`Product.create`
export interface ProductInput extends Optional<ProductAttributes, 'id'> {}

// Defines the return type of `Product.create`, `Product.update` and `Product.findOne`
export interface ProductOutput extends Required<ProductAttributes> {
  recipes?: Recipe[];
}

export class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  public id!: string;
  public productName!: string;
  public headline!: string;
  public min!: number;
  public max!: number;
  public baseRecipePrice!: number;
  public shippingPrice!: number;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
  public readonly recipes?: Recipe[];
}

Product.init({
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true,
  },
  headline: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  min: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  max: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  baseRecipePrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shippingPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
  sequelize,
  paranoid: true,
  tableName: 'product',
});
