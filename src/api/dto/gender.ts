// Data Transfer Objects
export type CreateGenderDTO = {
  name: string;
}

export type UpdateGenderDTO = CreateGenderDTO

export type FilterGendersDTO = {
  isDeleted?: boolean
  includeDeleted?: boolean
}
