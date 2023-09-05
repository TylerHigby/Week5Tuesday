import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .post('', this.createHouse)
      .get('', this.getHouses)
      .delete('/:houseId', this.deleteHouse)
  }

  async createHouse(request, response, next) {
    try {
      logger.log('creating house', request.body)
      const house = await housesService.createHouse(request.body)
      response.send(house)
    } catch (error) {
      next(error)
    }
  }

  async getHouses(request, response, next) {
    try {
      const houses = await housesService.getHouses()
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async deleteHouse(request, response, next) {
    try {
      const message = await housesService.deleteHouse(request.params.houseId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }

}