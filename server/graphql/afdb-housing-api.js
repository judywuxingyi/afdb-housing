import { RESTDataSource } from '@apollo/datasource-rest';

const API_KEY_ID = '2w21ho98xrix79l6qt1g99mn7';
const API_KEY_SECRET = '1v7iqqx82yiy45u7fooieoy1t2ag1nzxc355vsdtz3om8bye51';

export default class HousingAPI extends RESTDataSource {
  baseURL = 'https://data.cityofnewyork.us/resource/hq68-rnsi.json';

  async getAllProjects() {
    return this.get(`?$select=*`);
  }
}