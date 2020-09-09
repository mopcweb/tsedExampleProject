import 'reflect-metadata';
import { RequestHandler, json, urlencoded } from 'express';
import cors from 'cors';
import { parse } from 'qs';

import { PlatformApplication } from '@tsed/common';
import { Configuration, Inject } from '@tsed/di';
import '@tsed/platform-express'; // /!\ keep this import
import '@tsed/ajv';
import '@tsed/swagger';

const API = '/api/v1';

const middleware = (num: number): RequestHandler => (_req, _res, next): void => { console.log(`${num} >>>`, num); next(); };

@Configuration({
  port: 3007,
  rootDir: __dirname,
  commonServerDir: __dirname,
  httpsPort: false,
  mount: { [API]: [`${__dirname}/controllers/**/*.ts`] },
  swagger: [{ path: `${API}/api-docs` }],
  routers: { mergeParams: true },
  logger: { logRequest: false, logEnd: false, logStart: false },
  exclude: ['**/*.spec.ts', '**/*.d.ts'],
})
export class Server {
  @Inject() public app: PlatformApplication;
  @Configuration() public settings: Configuration;

  public $beforeInit(): void {
    this.app.raw.set('query parser', (str: string) => parse(str, { comma: true, strictNullHandling: true }));
  }

  public $beforeRoutesInit(): void {
    this.app
      .use(json())
      .use(urlencoded({ extended: true }))
      .use(cors())
      .use(middleware(1));
  }

  public $afterRoutesInit(): void {
    //
  }
}
