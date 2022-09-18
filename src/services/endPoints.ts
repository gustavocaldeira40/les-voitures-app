import { CarsData } from '../models/cars'
import api from './api'

export class EndPoints {
  static getAllCars = async () => {
    const { data } = await api.get('cars')
    return data
  }

  static getOneCar = async (id: string) => {
    const { data } = await api.get(`cars/${id}`)
    return data
  }

  static createCar = async (values: CarsData) => {
    const { data } = await api.post('cars', values)
    console.log('DATA CREEATE CAR', data)
    return data
  }

  static updateCar = async (id: string, values: CarsData) => {
    const { data } = await api.put(`cars/${id}`, values)
    return data
  }

  static removeCar = async (id: string) => {
    const { data } = await api.delete(`cars/${id}`)
    return data
  }
}
