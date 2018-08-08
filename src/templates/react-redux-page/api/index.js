import createAPI from 'shared/utils/createAPI';

export default {
  getTestData: params => createAPI.get('getTestData', params),
};
