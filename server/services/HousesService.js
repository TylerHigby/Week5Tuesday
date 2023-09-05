import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {

  async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }

  async getHouses() {
    const cars = await dbContext.Houses.find()
    return cars
  }

  async deleteHouse(houseId) {
    const houseToRemove = await dbContext.Houses.findById(houseId)
    if (!houseToRemove) {
      throw new BadRequest("No house at id:" + houseId)
    }
    await houseToRemove.remove()
    return `removed the house from ${houseToRemove.year}. Good riddance.`
  }

}

export const housesService = new HousesService()