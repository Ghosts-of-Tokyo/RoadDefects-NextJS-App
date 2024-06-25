import { baseurl } from '@/utils/constants/baseUrl';

export default {
  'road-defects': {
    input: `${baseurl}/swagger/v1/swagger.json`,
    output: {
      schemas: 'generated/api',
      prettier: true
    }
  }
};
