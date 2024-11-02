import { describe, expect, it } from 'vitest'
import {
  AccessPermissions,
  getAccessPermissionsDescription,
} from './AccessPermissions'

describe('AccessPermission enum test suit.', () => {
  it('Should return the right description.', () => {
    const accessPermission = AccessPermissions.READ_USER
    const description = getAccessPermissionsDescription(accessPermission)

    expect(description).toBe('Read User')
  })
})
