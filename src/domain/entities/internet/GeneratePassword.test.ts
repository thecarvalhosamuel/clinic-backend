import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import { GeneratePassword } from './GeneratePassword'
import { randomString } from 'shared/utils/randomGenerations'

describe('Generate test suit.', () => {
  it('Should generate a true hashed password by the password given.', async () => {
    const password = faker.internet.password()

    const generatePassword = new GeneratePassword()
    const passwordHashed = await generatePassword.generatePassword(password)
    const passwordVerified = await generatePassword.verifyPassword(
      password,
      passwordHashed,
    )

    expect(passwordHashed).toBeDefined()
    expect(passwordVerified).toBe(true)
  })

  it('Should not create a password case password is empty.', async () => {
    const password = ''

    const generatePassword = new GeneratePassword()
    await expect(generatePassword.generatePassword(password)).rejects.toThrow(
      new Error('Password must not be empty.'),
    )
  })

  it('Should not create a password case password has less than 8 and more than 20 character.', async () => {
    const password = randomString(21)

    const generatePassword = new GeneratePassword()
    await expect(generatePassword.generatePassword(password)).rejects.toThrow(
      new Error('Password must have been between 8 and 20 characters.'),
    )
  })

  it('Should return an error case the hased password given is mismatched.', async () => {
    const password = faker.internet.password()
    const passwordHashed = faker.internet.password()

    const generatePassword = new GeneratePassword()
    const passwordVerified = await generatePassword.verifyPassword(
      password,
      passwordHashed,
    )

    expect(passwordVerified).toBe(false)
  })
})
