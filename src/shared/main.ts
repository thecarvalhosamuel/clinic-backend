import ExpressAdapter from "infra/http/Express/ExpressAdapter";
import ExpressController from "infra/http/Express/ExpressController";
import { HelloWorld } from "application/_/helloWorld";
import { CreateProfileAccess } from "application/profileAccess/createProfileAccess";
import { ProfileAccessDummy } from "infra/database/dummy/ProfileAccessDummy";
import { GetAllProfileAccess } from "application/profileAccess/getAllProfileAccess";

const httpServer = new ExpressAdapter()

const profileAccessRepository = new ProfileAccessDummy()

const helloWorld = new HelloWorld()
const createProfileAccess = new CreateProfileAccess(profileAccessRepository)
const getAllProfileAccess = new GetAllProfileAccess(profileAccessRepository)

new ExpressController(
  httpServer,
  helloWorld,
  createProfileAccess,
  getAllProfileAccess
)

httpServer.listen(3333)