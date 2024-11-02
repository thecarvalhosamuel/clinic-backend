import { ProfileAccess } from "domain/entities/accesControl/profileAccess"
import { ProfileAccessRepository } from "domain/repositories/profileAccessRepository"
import { ProfileAccessAdapter } from "infra/adapter/profileAccessAdapter"
import { NotFoundError } from "shared/errors/errorHandler"
import { ProfileAccessData } from "shared/interfaces/profileAccessInterfaces"

export class ProfileAccessDummy implements ProfileAccessRepository {
  private profileAccesses: ProfileAccessData[]
  private adapter: ProfileAccessAdapter

  constructor() {
    this.profileAccesses = []
    this.adapter = new ProfileAccessAdapter()
  }

  async get(profileAccessId: string): Promise<ProfileAccess | null> {
    const profileAccess = this.profileAccesses.find(
      (item) => item.id === profileAccessId,
    )
    if (!profileAccess) return null
    return this.adapter.dataToDomain(profileAccess)
  }

  async getAll(): Promise<ProfileAccess[]> {
    const listProfileAccess: ProfileAccess[] = []

    this.profileAccesses.map((item) => {
      const profileAccess = ProfileAccess.create({
        id: item.id,
        name: item.name,
        active: item.active,
      })
      listProfileAccess.push(profileAccess)
    })
    return listProfileAccess
  }

  async countAll(): Promise<number> {
    let count = 0
    this.profileAccesses.map((item) => {
      count++
    })
    return count
  }

  async create(profileAcess: ProfileAccess): Promise<void> {
    const profileAccessData = this.adapter.domainToData(profileAcess)
    this.profileAccesses.push(profileAccessData)
  }

  async update(profileAcess: ProfileAccess): Promise<void> {
    const index = this.profileAccesses.findIndex(
      (item) => item.id === profileAcess.id.value,
    )
    if (!index) {
      throw new NotFoundError('Profile Access not found')
    }
    const data = this.adapter.domainToData(profileAcess)
    this.profileAccesses[index] = data
  }

  async delete(profileAcessId: string): Promise<void> {
    const index = this.profileAccesses.findIndex(
      (item) => item.id === profileAcessId,
    )
    if (!index) {
      throw new NotFoundError('Profile Access not found')
    }
    this.profileAccesses.slice(index, 1)
  }
}
