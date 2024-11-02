/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import express, { Request, Response } from "express";
import HttpServer, { HTTPMethods } from "../HttpServer";
import bodyParser from "body-parser";
import cors from "cors";
import { Env } from "shared/config/env";

export default class ExpressAdapter implements HttpServer {
  private app: any
  // private fileStorage?: any
  // private fileFilter?: any

  constructor(fileStorage?: any, fileFilter?: any) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors())
    // if(!this.fileStorage && !this.fileFilter) {
    //   this.app.use(multer({ storage: this.fileStorage, fileFilter: this.fileFilter}))
    // }
    this.app.use(bodyParser.json({ limit: '50mb' }))
  }

  // on(method: METHOD, url: string, callback: Function): void {
  on(method: HTTPMethods, url: string, callback: Function): void {
    this.app[method](url, async function (req: Request, res: Response) {
      try {
        const output = await callback(req.params, req.body)
        res.json(output)
      } catch (error: any) {
        res.status(422).send(error.message)
      }
    })
  }

  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`[server 👨🏻‍💻🚀]: Server is running at ${Env.HOSTNAME}:${port}`);
    });
  }
}