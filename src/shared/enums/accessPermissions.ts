export enum AccessPermissions {
  READ_USER = 'READ_USER',
  ADD_USER = 'ADD_USER',
  ALTER_USER = 'ALTER_USER',
  DELETE_USER = 'DELETE_USER',
}

export function getAccessPermissionsDescription(
  accessPermission: AccessPermissions,
): string {
  switch (accessPermission) {
    case AccessPermissions.READ_USER:
      return 'Read User'
    case AccessPermissions.ADD_USER:
      return 'Add User'
    case AccessPermissions.ALTER_USER:
      return 'Alter User'
    case AccessPermissions.DELETE_USER:
      return 'Delete User'
    default:
      return 'Unknown permission'
  }
}
