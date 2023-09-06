import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { houseSchema } from "../models/Houses.js";
import { carSchema } from "../models/Cars.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Houses = mongoose.model('Houses', houseSchema)
  Cars = mongoose.model('Cars', carSchema)
}

export const dbContext = new DbContext()
