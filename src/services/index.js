import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

class Services {
  async getEmpresas(filters) {
    for (let filter in filters) {
      if (filters.hasOwnProperty(filter)) {
        if (!filters[filter]) {
          delete filters[filter];
        }
      }
    }
    return await api.get('/empresas', { params: filters });
  }

  async getEmpresaFKS() {
    return await api.get('/empresafks');
  }

  async deleteEmpresa(id) {
    await api.delete(`/empresas/${id}`);
  }
}

const services = new Services()

export default services;
