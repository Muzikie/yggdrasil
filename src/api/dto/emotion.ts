// Data Transfer Objects
export type CreateEmotionDTO = {
  name: string;
}

export type UpdateEmotionDTO = CreateEmotionDTO

export type FilterEmotionsDTO = {
  isDeleted?: boolean
  includeDeleted?: boolean
}