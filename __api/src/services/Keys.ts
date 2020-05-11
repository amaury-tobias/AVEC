import { promises as fs } from 'fs'

export async function setupKeys() {
  try {
    const JWT_SECRET = await fs.readFile(`/keys/key.pem`)
    const JWT_CERT = await fs.readFile(`/keys/public.pem`)
    return Promise.resolve({
      JWT_SECRET,
      JWT_CERT,
    })
  } catch (err) {
    return Promise.reject(err)
  }
}
