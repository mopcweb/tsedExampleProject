import 'reflect-metadata';

import { PlatformExpress } from '@tsed/platform-express';
import { Configuration } from '@tsed/common';
import '@tsed/swagger';

import { Server } from '@some-pkg/tsed';
// import { Server } from './server';

const API = '/api/v1';
const settings: Partial<Configuration> = {
  port: 3007,
  httpsPort: false,
  mount: { [API]: [`${__dirname}/controllers/**/*.ts`] },
};

export async function start(): Promise<void> {
  const server = await PlatformExpress.bootstrap(Server, settings);
  await server.listen();
}
