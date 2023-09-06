import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CarsService {
  async deleteCar(carId) {
    const carToRemove = await dbContext.Cars.findById(carId)
    if (!carToRemove) {
      throw new BadRequest('no car at id: ' + carId)
    }
    await carToRemove.remove()
    return `Removed the ${carToRemove.make} ${carToRemove.model}`
  }
  async getCars() {
    const cars = await dbContext.Cars.find()
    return cars
  }
  async createCar(carData) {
    const car = await dbContext.Cars.create(carData)
    return car
  }

}

export const carsService = new CarsService()