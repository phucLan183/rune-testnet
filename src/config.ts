import { config } from "dotenv";
config()

if (!process.env.PORT) throw new Error("PORT must be provided")
export const PORT = process.env.PORT

if (!process.env.MONGO_URI) throw new Error("MONGO_URI must be provided")
export const MONGO_URI = process.env.MONGO_URI

if (!process.env.WEB3_PROVIDER) throw new Error("WEB3_PROVIDER must be provided")
export const WEB3_PROVIDER = process.env.WEB3_PROVIDER

if (!process.env.START_BLOCK) throw new Error("START_BLOCK must be provided")
export const START_BLOCK = Number(process.env.START_BLOCK)

if (!process.env.STEP_BLOCK) throw new Error("STEP_BLOCK must be provided")
export const STEP_BLOCK = Number(process.env.STEP_BLOCK)

const addressContract = {
  soil: process.env.SOIL,
  stone: process.env.STONE,
  wood: process.env.WOOD,
  rubber: process.env.RUBBER,
  plastic: process.env.PLASTIC,
  crystal: process.env.CRYSTAL,
  metal: process.env.METAL,
  gem: process.env.GEM,
  onixius: process.env.ONIXIUS,
  crypton: process.env.CRYPTON,
  pythium: process.env.PYTHIUM,
  paranium: process.env.PARANIUM
}

if (!addressContract) throw new Error("Address Contract must be provided")
export const ADDRESS_CONTRACT = addressContract