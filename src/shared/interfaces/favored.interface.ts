import { Document } from 'mongoose'

export interface IFavored extends Document {
  clientId: string
  accountId: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface IFavoredData {
  clientId: string
  accountId: string
  status: string
}
