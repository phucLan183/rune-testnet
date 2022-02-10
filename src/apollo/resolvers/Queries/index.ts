import { RuneCollection } from '../../../database/mongodb'
import { typeRune } from '../../../common'

const filterDataRune = (data: any, rune: string) => {
  const dataRune = data.filter((data: any) => data.rune === rune)
  const quantity = dataRune.map((data: any) => data.quantity)
  const totalQuantityRune = quantity.reduce((per: number, cur: number) => per + cur, 0)
  return totalQuantityRune
}

export const totalOwnerRune = async (parent: any, args: any) => {
  try {
    const { address } = args
    const dataRuneIn = await RuneCollection.find({
      "address.to": address.toLowerCase(),
    }).toArray()

    return {
      soil: filterDataRune(dataRuneIn, typeRune.soil),
      stone: filterDataRune(dataRuneIn, typeRune.stone),
      wood: filterDataRune(dataRuneIn, typeRune.wood),
      rubber: filterDataRune(dataRuneIn, typeRune.rubber),
      plastic: filterDataRune(dataRuneIn, typeRune.plastic),
      crystal: filterDataRune(dataRuneIn, typeRune.crystal),
      metal: filterDataRune(dataRuneIn, typeRune.metal),
      gem: filterDataRune(dataRuneIn, typeRune.gem),
      onixius: filterDataRune(dataRuneIn, typeRune.onixius),
      crypton: filterDataRune(dataRuneIn, typeRune.crypton),
      pythium: filterDataRune(dataRuneIn, typeRune.pythium),
      paranium: filterDataRune(dataRuneIn, typeRune.paranium),
    }
  } catch (error) {
    throw error
  }
}

const countOwnerRune = async (rune: string) => {
  const dataRune = await RuneCollection.aggregate(
    [
      {
        '$match': {
          'rune': rune
        }
      }, {
        '$group': {
          '_id': '$address.to',
          'count': {
            '$sum': 1
          }
        }
      }, {
        '$group': {
          '_id': null,
          'count': {
            '$sum': 1
          }
        }
      }
    ]).toArray()
  return dataRune[0]?.count || 0
}

export const totalRuneHolder = async (parent: any, args: any) => {
  try {
    return {
      soil: countOwnerRune(typeRune.soil),
      stone: countOwnerRune(typeRune.stone),
      wood: countOwnerRune(typeRune.wood),
      rubber: countOwnerRune(typeRune.rubber),
      plastic: countOwnerRune(typeRune.plastic),
      crystal: countOwnerRune(typeRune.crystal),
      metal: countOwnerRune(typeRune.metal),
      gem: countOwnerRune(typeRune.gem),
      onixius: countOwnerRune(typeRune.onixius),
      crypton: countOwnerRune(typeRune.crypton),
      pythium: countOwnerRune(typeRune.pythium),
      paranium: countOwnerRune(typeRune.paranium),
    }
  } catch (error) {
    throw error
  }
}