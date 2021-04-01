import { Document, Schema } from 'mongoose'

export interface IClient extends Document {
  email: string
  name: string
  document: string
  account_id?: string[]
  createdAt: Date
  updatedAt: Date
}
