import api from './api'

export class EndPoints {
  static getAllCars = async () => {
    const { data } = await api.get('cars')
    return data
  }
}
