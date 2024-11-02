import { ProfileAccess } from "domain/entities/accesControl/profileAccess";
import { ProfileAccessRepository } from "domain/repositories/profileAccessRepository";
import { ProfileAccessAdapter } from "infra/adapter/profileAccessAdapter";
import { ProfileAccessCreateType, ProfileAccessData } from "shared/interfaces/profileAccessInterfaces";

interface Response {
  profileAccess: ProfileAccessData
}

export class CreateProfileAccess {
  constructor(
    private profileAccessRepository: ProfileAccessRepository
  ) { }

  async execute({
    id, name, accessPermission, active, createdAt, updatedAt
  }: ProfileAccessCreateType): Promise<Response> {
    const profileAccess = ProfileAccess.create({
      id, name, accessPermission, active, createdAt, updatedAt
    })

    await this.profileAccessRepository.create(profileAccess)
    const adapter = new ProfileAccessAdapter()
    const profileAccessAdapter = adapter.domainToData(profileAccess)
    return { profileAccess: profileAccessAdapter }
  }
}