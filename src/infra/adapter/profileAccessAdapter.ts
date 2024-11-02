import { ProfileAccess } from "domain/entities/accesControl/profileAccess"
import { AccessPermissions, getAccessPermissionsDescription } from "shared/enums/accessPermissions"
import { ProfileAccessData } from "shared/interfaces/profileAccessInterfaces"

export class ProfileAccessAdapter {
  domainToData(profileAccessDomain: ProfileAccess): ProfileAccessData {
    let accessPermission = ''
    profileAccessDomain.accessPermission.map((permission) => {
      accessPermission += getAccessPermissionsDescription(permission) + ', '
    })
    const lastIndex = accessPermission.lastIndexOf(', ')
    if (lastIndex !== -1) {
      accessPermission = accessPermission.slice(0, lastIndex)
    }
    return {
      id: profileAccessDomain.id.value,
      name: profileAccessDomain.name,
      active: profileAccessDomain.active,
      accessPermission,
      createdAt: profileAccessDomain.createdAt,
      updatedAt: profileAccessDomain.updatedAt,
    }
  }
  dataToDomain(profileAccessData: ProfileAccessData): ProfileAccess {
    const accessPermissionArray = profileAccessData.accessPermission
      .split(',')
      .map((permission) => permission.trim())

    const isEnumValue = (
      value: string,
    ): value is keyof typeof AccessPermissions => {
      return value in AccessPermissions
    }
    const validPermissionsArray = accessPermissionArray.filter(isEnumValue)
    const accessPermisison: AccessPermissions[] = validPermissionsArray.map(
      (permission) =>
        AccessPermissions[permission as keyof typeof AccessPermissions],
    )

    const profileAccess = ProfileAccess.create({
      id: profileAccessData.id,
      name: profileAccessData.name,
      active: profileAccessData.active,
    })

    accessPermisison.map((item) => {
      profileAccess.addPermission(item)
    })

    return profileAccess
  }
}
