import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import { Emotion } from '../../api/interfaces/emotion.interface';

// Models

export interface GenderAttributes {
  id: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
// Used for`Gender.create`
export interface GenderInput extends Omit<GenderAttributes, 'id'> {}

// Defines the return type of `Gender.create`, `Gender.update` and `Gender.findOne`
export interface GenderOutput extends Required<GenderAttributes> {
  emotions?: Emotion[];
}

export class Gender extends Model<GenderAttributes, GenderInput> implements GenderAttributes {
  public id!: string;
  public name!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
  public readonly emotions?: Emotion[];
}

Gender.init({
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true,
  sequelize,
  paranoid: true,
  tableName: 'gender',
});
