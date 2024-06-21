import type { MockServerConfig } from 'mock-config-server';

import * as requests from './mock';

const mockServerConfig: MockServerConfig = {
  baseUrl: '/api',
  rest: {
    configs: Object.values(requests)
  },
  interceptors: {
    request: ({ setDelay }) => setDelay(1000)
  }
};

export default mockServerConfig;
