import crypto from 'crypto';

export function encriptarMD5(value: string): string {
  return crypto.createHash('md5').update(value).digest("hex")
}