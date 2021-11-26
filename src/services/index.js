import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

api.interceptors.request.use(function (config) {
  config.headers = {
    ...config.headers,
    'Authorization': `Token ${localStorage.getItem('token')}`,
  }

  return config;
});

class Services {
  // ----------- EMPRESAS -----------
  static async getEmpresas(filters) {
    for (let filter in filters) {
      if (filters.hasOwnProperty(filter)) {
        if (!filters[filter]) {
          delete filters[filter];
        }
      }
    }
    return await api.get('/empresas', { params: filters });
  }

  static async getEmpresaFKS() {
    return await api.get('/empresafks');
  }

  static async deleteEmpresa(id) {
    return await api.delete(`/empresas/${id}`);
  }

   // ----------- AUTH -----------
  static async login(loginData) {
    return await api.post('', loginData);
  }

  static async getUser() {
    return await api.get('/usuarios/get_usuario');
  }

  static async getUserFks() {
    return await api.get('/usuarios/get_fks');
  }

  static async updateUser(id, data) {
    return await api.put(`/usuarios/${id}`, data);
  }

  static async changePassword(id, password) {
    return await api.put(`/usuarios/${id}`, data);
  }
}

// const services = new Services()

// export default services;
export default Services;
