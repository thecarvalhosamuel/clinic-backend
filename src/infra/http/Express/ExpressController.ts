import { HelloWorld } from "application/_/helloWorld";
import HttpServer from "../HttpServer";
import { CreateProfileAccess } from "application/profileAccess/createProfileAccess";
import { GetAllProfileAccess } from "application/profileAccess/getAllProfileAccess";

const API = '/api'

export default class ExpressController {
  constructor(
    httpServer: HttpServer,
    helloworld: HelloWorld,
    createProfileAccess: CreateProfileAccess,
    getAllProfileAccess: GetAllProfileAccess,
  ) {
    httpServer.on('get', `${API}/_/healthcheck`, async function (params: any, body: any) {
      const output = helloworld.execute()
      return output
    });
    httpServer.on('get', `${API}/_/helloWorld`, async function (params: any, body: any) {
      const output = helloworld.execute()
      return output
    });
    httpServer.on('post', `${API}/profileAccess`, async function (params: any, body: any) {
      const output = createProfileAccess.execute(body)
      return output
    });
    httpServer.on('get', `${API}/profileAccess`, async function (params: any, body: any) {
      const output = getAllProfileAccess.execute()
      return output
    });
  }
}