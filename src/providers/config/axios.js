import axios from 'axios';
import { throwError } from 'rxjs';

const PROD_URL = 'http//';
const TEST_URL = 'http://localhost:6003';

const axiosProvider = axios.create({
  baseURL: TEST_URL
});

axiosProvider.interceptors.response.use(
  (response) => {
    console.log(response)
    return new Promise(async (resolve, reject) => {
        resolve(response);
    });
  },
  (err) => {
    return new Promise(async (resolve, reject) => {
        reject(err)
    });
  }
);

export default axiosProvider;