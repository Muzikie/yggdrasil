import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config';
import { Gender } from '../../api/interfaces/gender.interface';

// Models

export interface EmotionAttributes {
  id: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
// Used for`Emotion.create`
export interface EmotionInput extends Omit<EmotionAttributes, 'id'> {}

// Defines the return type of `Emotion.create`, `Emotion.update` and `Emotion.findOne`
export interface EmotionOutput extends Required<EmotionAttributes> {
  gender?: Gender;
}

export class Emotion extends Model<EmotionAttributes, EmotionInput> implements EmotionAttributes {
  public id!: string;
  public name!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public readonly deleted_at!: Date;
}

Emotion.init({
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
}, {
  timestamps: true,
  sequelize,
  paranoid: true,
  tableName: 'emotion',
});

// Emotion.belongsTo(GenderModel, { foreignKey: 'gender_id', as: 'gender' });
// GenderModel.hasMany(Emotion, { sourceKey: 'id', foreignKey: 'gender_id', as: 'emotions' });
