import * as bcrypt from 'bcrypt'

export class GeneratePassword {
  public async generatePassword(password: string): Promise<string> {
    if (password.trim().length === 0) {
      throw new Error('Password must not be empty.')
    }

    if (password.trim().length < 8 || password.trim().length > 20) {
      throw new Error('Password must have been between 8 and 20 characters.')
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
  }

  public async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const match = await bcrypt.compare(password, hashedPassword)
    return match
  }
}
