import { BadRequestError } from "shared/errors/errorHandler"
import { ProfileAccessCreateType, ProfileAccessType } from "shared/interfaces/profileAccessInterfaces"
import { MoreThan, NotBeEmpty } from "shared/validations/entitiesValidations"
import { Cuid } from "../cuid"
import { AccessPermissions } from "shared/enums/accessPermissions"

export class ProfileAccess {
  private params: ProfileAccessType

  constructor(profileAcess: ProfileAccessType) {
    this.params = profileAcess
  }

  static create({
    id, name, active, accessPermission, createdAt, updatedAt
  }: ProfileAccessCreateType): ProfileAccess {
    if (name.trim().length === 0) {
      const message = NotBeEmpty('Name')
      throw new BadRequestError(message)
    }
    if (name.trim().length > 60) {
      const message = MoreThan('Name', 60)
      throw new BadRequestError(message)
    }

    return new ProfileAccess({
      id: !id ? Cuid.create() : new Cuid({ value: id }),
      name,
      accessPermission: accessPermission ?? [],
      active: active !== null && active !== undefined ? active : true,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ? updatedAt : null,
    })
  }

  public activate(): void {
    if (this.params.active) {
      throw new BadRequestError('Profile Access already activate.')
    }
    this.params.active = true
    this.params.updatedAt = new Date()
  }

  public deactivate(): void {
    if (!this.params.active) {
      throw new BadRequestError('Profile Access already deactivate.')
    }
    this.params.active = false
    this.params.updatedAt = new Date()
  }

  public addPermission(accessPermission: AccessPermissions): void {
    const permissionAlreadyAdded = this.params.accessPermission.find(
      (permission) => permission === accessPermission,
    )
    if (permissionAlreadyAdded) return
    this.accessPermission.push(accessPermission)
    this.params.updatedAt = new Date()
  }

  public removePermission(accessPermission: AccessPermissions): void {
    const permissionIdAlreadyAdded = this.params.accessPermission.findIndex(
      (permission) => permission === accessPermission,
    )
    if (!permissionIdAlreadyAdded) {
      throw new BadRequestError('Permission has not be added.')
    }
    this.accessPermission.slice(permissionIdAlreadyAdded, 1)
    this.params.updatedAt = new Date()
  }

  public get id(): Cuid {
    return this.params.id
  }
  public get name(): string {
    return this.params.name
  }
  public get active(): boolean {
    return this.params.active
  }
  public get accessPermission(): AccessPermissions[] {
    return this.params.accessPermission
  }
  public get createdAt(): Date {
    return this.params.createdAt
  }
  public get updatedAt(): Date | null {
    return this.params.updatedAt ?? null
  }
  public get toJSON(): any {
    return this.params
  }
}
