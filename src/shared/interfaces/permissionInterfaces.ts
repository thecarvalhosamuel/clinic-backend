import { Cuid } from "domain/entities/cuid"

type PermissionInterface = {
  id: Cuid
  name: string
  description: string
}

type PermissionCreateInterface = {
  id?: string | null
  name: string
  description: string
}

type PermissionDataInterface = {
  id: string
  name: string
  description: string
  permission: string
}
type PermissionIdOutput = {
  permissionId: string
}

export type {
  PermissionInterface,
  PermissionCreateInterface,
  PermissionDataInterface,
  PermissionIdOutput,
}
