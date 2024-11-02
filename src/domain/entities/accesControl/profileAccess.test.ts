import { describe, expect, it } from 'vitest'
import { randomString } from 'shared/utils/randomGenerations'
import { BadRequestError } from 'shared/errors/errorHandler'
import { AccessPermissions } from 'shared/enums/AccessPermissions'
import cuid2 from '@paralleldrive/cuid2'
import { ProfileAccess } from './profileAccess'

describe('ProfileAccess suit test.', () => {
  it('Should create a Profile Access with all parameters.', () => {
    const id = cuid2.createId()
    const name = randomString(20)
    const active = false

    const profileAccess = ProfileAccess.create({
      id,
      name,
      active,
    })

    expect(profileAccess.id.value).toBe(id)
    expect(profileAccess.name).toBe(name)
    expect(profileAccess.active).toBe(active)
    expect(profileAccess.toJSON).not.toBeNull()
  })

  it('Should create a Profile Access with necessary parameters.', () => {
    const name = randomString(20)
    const profileAccess = ProfileAccess.create({ name })

    expect(profileAccess.id.value).not.toBeNull()
    expect(profileAccess.name).toBe(name)
    expect(profileAccess.active).toBe(true)
  })

  it('Should not create a Profile Access case name is empty.', () => {
    const name = ''
    expect(() => {
      ProfileAccess.create({ name })
    }).toThrow(new BadRequestError('Name must not be empty.'))
  })

  it('Should not create a Profile Access case name has more than 60 characteres.', () => {
    const name = randomString(70)
    expect(() => {
      ProfileAccess.create({ name })
    }).toThrow(
      new BadRequestError('Name must not have more than 60 characters.'),
    )
  })

  it('Should active a Profile Access.', () => {
    const profileAccess = ProfileAccess.create({
      name: randomString(40),
      active: false,
    })
    expect(profileAccess.active).toBe(false)

    profileAccess.activate()
    expect(profileAccess.active).toBe(true)
  })

  it('Should not active a Profile Access case active is TRUE.', () => {
    const profileAccess = ProfileAccess.create({
      name: randomString(40),
    })

    expect(() => profileAccess.activate()).toThrow(
      new BadRequestError('Profile Access already activate.'),
    )
  })

  it('Should deactive a Profile Access.', () => {
    const profileAccess = ProfileAccess.create({
      name: randomString(40),
    })
    expect(profileAccess.active).toBe(true)

    profileAccess.deactivate()
    expect(profileAccess.active).toBe(false)
  })

  it('Should not deactive a Profile Access case active is FALSE.', () => {
    const profileAccess = ProfileAccess.create({
      name: randomString(40),
      active: false,
    })

    expect(() => profileAccess.deactivate()).toThrow(
      new BadRequestError('Profile Access already deactivate.'),
    )
  })

  it('Should add permission to profile access.', () => {
    const profileAccess = ProfileAccess.create({
      name: randomString(40),
    })

    const permission = AccessPermissions.READ_USER
    profileAccess.addPermission(permission)

    expect(profileAccess.accessPermission.length).toBe(1)
    expect(profileAccess.accessPermission[0]).toBe(permission)
  })
})
