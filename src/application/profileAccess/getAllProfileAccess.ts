import { ProfileAccessRepository } from "domain/repositories/profileAccessRepository";
import { ProfileAccessAdapter } from "infra/adapter/profileAccessAdapter";
import { ProfileAccessData } from "shared/interfaces/profileAccessInterfaces";

interface Response {
  profileAccesses: ProfileAccessData[]
  count: number
}

export class GetAllProfileAccess {
  constructor(
    private readonly profileAccessRepository: ProfileAccessRepository,
  ) { }

  async execute(): Promise<Response> {
    const profileAccesses = await this.profileAccessRepository.getAll();
    const profileCount = await this.profileAccessRepository.countAll();
    const adapter = new ProfileAccessAdapter()
    const profileAccessesData: ProfileAccessData[] = []
    profileAccesses.map(profile => {
      const data = adapter.domainToData(profile)
      profileAccessesData.push(data)
    })
    return {
      profileAccesses: profileAccessesData,
      count: profileCount
    }
  }
}