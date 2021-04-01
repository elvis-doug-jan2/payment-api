import * as crypto from 'crypto'
import config from '../../config/envs.config'

export function encrypt(password: string): string {
  const iv = hexStringToByte(config.encryption.iv.toString())
  const cipher = crypto.createCipheriv('aes-256-cbc', config.encryption.key, iv)

  let encrypted = cipher.update(password, 'utf8')
  encrypted = Buffer.concat([encrypted, cipher.final()])

  return `${Buffer.from(config.encryption.iv).toString('hex')}:${encrypted.toString('hex')}`
}

export function decrypt(text: string): string {
  const textParts = text.split(':')
  const iv = Buffer.from(textParts.shift(), 'hex')
  const encryptedText = Buffer.from(textParts.join(':'), 'hex')
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(config.encryption.key), iv)

  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])

  return decrypted.toString()
}

function hexStringToByte(str: string) {
  return Buffer.from(str, 'utf8')
}
