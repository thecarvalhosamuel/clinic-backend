import { Permission } from "domain/entities/accesControl/permission"

export type PermissionRepository = {
  get(permissionId: string): Promise<Permission | null>
  getAll(): Promise<Permission[]>

  create(permission: Permission): Promise<void>
  update(permission: Permission): Promise<void>
  delete(permission: Permission): Promise<void>
}
