import { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  email: string
  name: string
  // surName: string
  cpf: string
  account_id: string[]
  createdAt: Date
  updatedAt: Date
}
