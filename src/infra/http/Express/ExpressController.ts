import { HelloWorld } from "application/_/helloWorld";
import HttpServer from "../HttpServer";

const API = '/api'

export default class ExpressController {
  constructor(
    httpServer: HttpServer,
    helloworld: HelloWorld,
  ) {
    httpServer.on('get', `${API}/_/healthcheck`, async function (params: any, body: any) {
      const output = helloworld.execute()
      return output
    });
    httpServer.on('get', `${API}/_/helloWorld`, async function (params: any, body: any) {
      const output = helloworld.execute()
      return output
    });

  }
}