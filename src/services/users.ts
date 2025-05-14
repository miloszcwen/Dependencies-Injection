import { HTTP } from './http';

import type { ApiConfig, User } from '../types';
export class Users {
  static $inject = ['http', 'config'];

  http: HTTP;
  apiConfig: ApiConfig;

  constructor(http: HTTP, config: ApiConfig) {
    this.http = http;
    this.apiConfig = config;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as User[];
  }
}
