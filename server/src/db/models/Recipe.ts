import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config';
import { Product as ProductModel } from './Product';
import { Product } from '../../api/interfaces/product.interface';

// Models

export interface RecipeAttributes {
  id: string;
  product_id: string;
  name: string;
  slug: string;
  headline: string;
  image: string;
  selected: number;
  selectionLimit?: number;
  extraCharge: number;
  yields: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
// Used for`Recipe.create`
export interface RecipeInput extends Optional<RecipeAttributes, 'selectionLimit'> {}

// Defines the return type of `Recipe.create`, `Recipe.update` and `Recipe.findOne`
export interface RecipeOutput extends Required<RecipeAttributes> {
  product?: Product;
}

export class Recipe extends Model<RecipeAttributes, RecipeInput> implements RecipeAttributes {
  public id!: string;
  public product_id!: string;
  public name!: string;
  public slug!: string;
  public headline!: string;
  public image!: string;
  public selected!: number;
  public selectionLimit!: number;
  public extraCharge!: number;
  public yields!: number;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
}

Recipe.init({
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    references: {
      model: ProductModel,
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  headline: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  selected: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  selectionLimit: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  extraCharge: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  yields: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
  sequelize,
  paranoid: true,
  tableName: 'recipes',
});

Recipe.belongsTo(ProductModel, { foreignKey: 'product_id', as: 'product' });
ProductModel.hasMany(Recipe, { sourceKey: 'id', foreignKey: 'product_id', as: 'recipes' });
