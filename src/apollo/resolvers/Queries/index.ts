import { RuneCollection } from '../../../database/mongodb'
import { typeRune } from '../../../common'

const countRune = (data: any, rune: string) => {
  const filterDataRune = data.filter((data: any) => data.rune === rune)
  const quantity = filterDataRune.map((data: any) => data.quantity)
  const totalQuantityRune = quantity.reduce((per: number, cur: number) => per + cur, 0)
  return totalQuantityRune
}

export const totalOwnerRune = async (parent: any, args: any) => {
  try {
    const { address } = args
    const dataRuneIn = await RuneCollection.find({
      "address.to": address.toLowerCase()
    }).toArray()
    const dataRuneOut = await RuneCollection.find({
      "address.from": address.toLowerCase()
    }).toArray()

    const result = {
      soil: countRune(dataRuneIn, typeRune.soil) - countRune(dataRuneOut, typeRune.soil),
      stone: countRune(dataRuneIn, typeRune.stone) - countRune(dataRuneOut, typeRune.stone),
      wood: countRune(dataRuneIn, typeRune.wood) - countRune(dataRuneOut, typeRune.wood),
      rubber: countRune(dataRuneIn, typeRune.rubber) - countRune(dataRuneOut, typeRune.rubber),
      plastic: countRune(dataRuneIn, typeRune.plastic) - countRune(dataRuneOut, typeRune.plastic),
      crystal: countRune(dataRuneIn, typeRune.crystal) - countRune(dataRuneOut, typeRune.crystal),
      metal: countRune(dataRuneIn, typeRune.metal) - countRune(dataRuneOut, typeRune.metal),
      gem: countRune(dataRuneIn, typeRune.gem) - countRune(dataRuneOut, typeRune.gem),
      onixius: countRune(dataRuneIn, typeRune.onixius) - countRune(dataRuneOut, typeRune.onixius),
      crypton: countRune(dataRuneIn, typeRune.crypton) - countRune(dataRuneOut, typeRune.crypton),
      pythium: countRune(dataRuneIn, typeRune.pythium) - countRune(dataRuneOut, typeRune.pythium),
      paranium: countRune(dataRuneIn, typeRune.paranium) - countRune(dataRuneOut, typeRune.paranium),
    }
    return result
  } catch (error) {
    throw error
  }
}

const dataRune = async (rune: string) => {
  const dataRuneIn = await RuneCollection.aggregate([
    { '$match': { 'rune': rune } },
    { '$group': { '_id': '$address.to', 'totalRuneIn': { '$sum': "$quantity" } } },
  ]).toArray()
  const dataRuneOut = await RuneCollection.aggregate([
    { '$match': { 'rune': rune } },
    { '$group': { '_id': '$address.from', 'totalRuneOut': { '$sum': "$quantity" } } }
  ]).toArray()
  return countOwnerRune(dataRuneIn, dataRuneOut)
}

export const countOwnerRune = (dataRuneIn: any[], dataRuneOut: any[]) => {
  let count = 0
  for (let runeIn of dataRuneIn) {
    const find_index = dataRuneOut.findIndex(el => el._id === runeIn._id)
    if (find_index > -1) {
      count += runeIn.totalRuneIn - dataRuneOut[find_index].totalRuneOut > 0 ? 1 : 0
    } else {
      count++
    }
  }
  return count
}

export const totalRuneHolder = async (parent: any, args: any) => {
  try {
    return {
      soil: await dataRune(typeRune.soil),
      stone: await dataRune(typeRune.stone),
      wood: await dataRune(typeRune.wood),
      rubber: await dataRune(typeRune.rubber),
      plastic: await dataRune(typeRune.plastic),
      crystal: await dataRune(typeRune.crystal),
      metal: await dataRune(typeRune.metal),
      gem: await dataRune(typeRune.gem),
      onixius: await dataRune(typeRune.onixius),
      crypton: await dataRune(typeRune.crypton),
      pythium: await dataRune(typeRune.pythium),
      paranium: await dataRune(typeRune.paranium),
    }
  } catch (error) {
    throw error
  }
}