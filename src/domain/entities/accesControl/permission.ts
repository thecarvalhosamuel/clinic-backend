import { BadRequestError } from "shared/errors/errorHandler";
import { PermissionCreateInterface, PermissionInterface } from "shared/interfaces/permissionInterfaces";
import { MoreThan, NotBeEmpty } from "shared/validations/entitiesValidations";
import { Cuid } from "../cuid";

export class Permission {
  private params: PermissionInterface

  constructor(permisison: PermissionInterface) {
    this.params = permisison;
  }

  static create({
    id, name, description
  }: PermissionCreateInterface): Permission {
    if (name.trim().length === 0) {
      const message = NotBeEmpty('Name')
      throw new BadRequestError(message)
    }
    if (name.trim().length > 50) {
      const message = MoreThan('Name', 50)
      throw new BadRequestError(message)
    }
    if (description.trim().length === 0) {
      const message = NotBeEmpty('Description')
      throw new BadRequestError(message)
    }
    if (description.trim().length > 250) {
      const message = MoreThan('Description', 250)
      throw new BadRequestError(message)
    }
    return new Permission({
      id: id ? new Cuid({ value: id }) : Cuid.create(),
      name,
      description,
    });
  }
}