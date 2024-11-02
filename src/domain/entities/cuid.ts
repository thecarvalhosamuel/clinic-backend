import cuid2 from "@paralleldrive/cuid2"
import { CuidInterface } from "shared/interfaces/cuidInterface"

export class Cuid {
  private params: CuidInterface
  constructor(params: CuidInterface) {
    this.params = params
  }

  static create(): Cuid {
    return new Cuid({ value: cuid2.createId() })
  }

  public get value(): string {
    return this.params.value
  }
}