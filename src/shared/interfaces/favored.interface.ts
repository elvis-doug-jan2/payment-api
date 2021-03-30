import { Document } from 'mongoose'

export interface IFavored extends Document {
  userId: string
  accountId: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface IFavoredData {
  userId: string
  accountId: string
  status: string
}
