export class HttpService {
  sample_api_https = 'https://reactnative.dev/movies.json';
  sample_api_http = 'http://reactnative.dev/movies.json';

  constructor() {}

  async fetch_http() {
    return fetch(this.sample_api_http, {
      method: 'GET',
    });
  }

  async fetch_https() {
    return fetch(this.sample_api_https, {
      method: 'GET',
    });
  }
}
