import { Document } from 'mongoose'

export interface IAccount extends Document {
  bankName: string
  agencyNumber: string
  agencyDigit: string
  accountType: string
  accountNumber: string
  accountDigit: string
  userId: string
  createdAt: Date
  updatedAt: Date
}
