import { ProfileAccess } from "domain/entities/accesControl/profileAccess"

export type ProfileAccessRepository = {
  get(profileAccessId: string): Promise<ProfileAccess | null>
  getAll(): Promise<ProfileAccess[]>
  countAll(): Promise<number>

  create(profileAcess: ProfileAccess): Promise<void>
  update(profileAcess: ProfileAccess): Promise<void>
  delete(profileAcessId: string): Promise<void>
}
