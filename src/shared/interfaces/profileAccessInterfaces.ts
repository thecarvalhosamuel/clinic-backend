import { Cuid } from "domain/entities/cuid"
import { AccessPermissions } from "shared/enums/accessPermissions"

type ProfileAccessType = {
  id: Cuid
  name: string
  accessPermission: AccessPermissions[]
  active: boolean
  createdAt: Date
  updatedAt?: Date | null
}

type ProfileAccessCreateType = {
  id?: string | null
  name: string
  active?: boolean | null
  accessPermission?: AccessPermissions[] | null
  createdAt?: Date | null
  updatedAt?: Date | null
}

type ProfileAccessData = {
  id: string
  name: string
  active: boolean
  createdAt: Date
  updatedAt: Date | null
  accessPermission: string
}

type ProfileAccessIdType = {
  profileAccessId: string
}

type ProfileAccessReturn = {
  id: string
  name: string
  active: boolean
  createdAt: Date
  updatedAt: Date | null
  accessPermission: AccessPermissions[]
}

export type {
  ProfileAccessType,
  ProfileAccessCreateType,
  ProfileAccessData,
  ProfileAccessIdType,
  ProfileAccessReturn,
}
