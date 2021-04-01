import { Document } from 'mongoose'

export interface IFavored extends Document {
  clientData: string
  accountData: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface IFavoredData {
  clientData: string
  accountData: string
  status: string
}
