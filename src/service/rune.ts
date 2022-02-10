import { RuneCollection, mongoClient } from '../database/mongodb';
import { soilContract, stoneContract, woodContract, rubberContract, plasticContract, crystalContract, metalContract, gemContract, onixiusContract, cryptonContract, pythiumContract, paraniumContract, web3 } from '../web3'
import { Decimal128 } from 'mongodb';
import { typeRune } from '../common'

export const getSoilTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await soilContract.getPastEvents('Transfer', options)
    console.log({ soil: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.soil,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getStoneTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await stoneContract.getPastEvents('Transfer', options)
    console.log({ stone: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.stone,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getWoodTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await woodContract.getPastEvents('Transfer', options)
    console.log({ wood: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.wood,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getRubberTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await rubberContract.getPastEvents('Transfer', options)
    console.log({ rubber: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.rubber,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getPlasticTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await plasticContract.getPastEvents('Transfer', options)
    console.log({ plastic: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.plastic,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getCrystalTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await crystalContract.getPastEvents('Transfer', options)
    console.log({ crystal: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.crystal,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getMetalTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await metalContract.getPastEvents('Transfer', options)
    console.log({ metal: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.metal,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getGemTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await gemContract.getPastEvents('Transfer', options)
    console.log({ gem: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.gem,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getOnixiusTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await onixiusContract.getPastEvents('Transfer', options)
    console.log({ onixius: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.onixius,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getCryptonTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await cryptonContract.getPastEvents('Transfer', options)
    console.log({ crypton: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.crypton,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getPythiumTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await pythiumContract.getPastEvents('Transfer', options)
    console.log({ pythium: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.pythium,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}

export const getParaniumTransfer = async (options: any) => {
  const session = mongoClient.startSession()
  try {
    const transferEvent = await paraniumContract.getPastEvents('Transfer', options)
    console.log({ paranium: transferEvent.length });
    if (transferEvent.length > 0) {
      for (const event of transferEvent) {
        const dataBlock = await web3.eth.getBlock(event.blockNumber)
        await session.withTransaction(async () => {
          const dataParallel = await RuneCollection.findOne({ blockId: event["id"] })
          if (!dataParallel) {
            await RuneCollection.insertOne({
              blockNumber: event.blockNumber,
              blockId: event["id"],
              rune: typeRune.paranium,
              address: {
                from: event.returnValues.from.toLowerCase(),
                to: event.returnValues.to.toLowerCase()
              },
              quantity: Number(event.returnValues.value),
              timestamp: dataBlock.timestamp
            }, { session })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
    if (session.inTransaction()) {
      await session.abortTransaction()
    }
    throw error;
  } finally {
    await session.endSession()
  }
}