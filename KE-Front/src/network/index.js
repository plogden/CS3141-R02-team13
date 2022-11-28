import Axios from "axios";

function setResponseInterceptor(client) {
  function onFulfilled(response) {
    return response;
  }

  function onRejected(error) {
    return Promise.reject(error);
  }

  client.interceptors.response.use(onFulfilled, onRejected);
  return client;
}

function validateStatus(status) {
  return status >= 200 && status < 300;
}

const config = {
  baseURL: process.env.VUE_APP_BACKEND_URL || "http://localhost:3000",
  validateStatus,
};

const Client = Axios.create(config);
Client.defaults.timeout = 180000;
setResponseInterceptor(Client);

export { Client, setResponseInterceptor };
