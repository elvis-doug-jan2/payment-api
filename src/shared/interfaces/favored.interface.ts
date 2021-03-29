import { Document } from 'mongoose'

export interface IFavored extends Document {
  userId: string
  accountId: string
  createdAt: Date
  updatedAt: Date
}
