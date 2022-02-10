import { RuneCollection, mongoClient } from '../database/mongodb';
import { Decimal128 } from 'mongodb';
import { stoneContract, web3 } from '../web3'
import { getSoilTransfer, getStoneTransfer, getWoodTransfer, getRubberTransfer, getPlasticTransfer, getCrystalTransfer, getMetalTransfer, getGemTransfer, getOnixiusTransfer, getCryptonTransfer, getPythiumTransfer, getParaniumTransfer } from './rune'
// import { typeRune } from '../common'


const getPastEventsOptions = (startBlock: number, stepBlock: number, latestBlock: number) => {
  const currentBlockWithStepBlock = startBlock + stepBlock
  let toBlock = currentBlockWithStepBlock >= latestBlock ? latestBlock : currentBlockWithStepBlock
  return { fromBlock: startBlock, toBlock }
}

export const intervalConsume = async (startBlock: number, stepBlock: number) => {
  try {
    const latestBlock = await web3.eth.getBlockNumber()
    if (startBlock >= latestBlock) startBlock = latestBlock

    let options = getPastEventsOptions(startBlock, stepBlock, latestBlock)

    console.table({ startBlock: options.fromBlock, toBlock: options.toBlock, latestBlock: latestBlock });

    // const orderCreateEvent = await stoneContract.getPastEvents('Transfer', options)
    // console.log(orderCreateEvent);

    await getSoilTransfer(options)
    await getStoneTransfer(options)
    await getWoodTransfer(options)
    await getRubberTransfer(options)
    await getPlasticTransfer(options)
    await getCrystalTransfer(options)
    await getMetalTransfer(options)
    await getGemTransfer(options)
    await getOnixiusTransfer(options)
    await getCryptonTransfer(options)
    await getPythiumTransfer(options)
    await getParaniumTransfer(options)

    startBlock = options.toBlock
  } catch (error) {
    throw error
  } finally {
    setTimeout(() => {
      intervalConsume(startBlock, stepBlock)
    }, 3000)
  }
}

// export const getRuneTransfer = async (nameContract: any, options: any, rune: string) => {
//   const session = mongoClient.startSession()
//   try {
//     const transferEvent = await nameContract.getPastEvents('Transfer', options)
//     if (transferEvent.length > 0) {
//       for (const event of transferEvent) {
//         const dataBlock = await web3.eth.getBlock(event.blockNumber)
//         await session.withTransaction(async () => {
//           const dataParallel = await RuneCollection.findOne({ transactionHash: event.transactionHash })
//           if (!dataParallel) {
//             await RuneCollection.insertOne({
//               blockNumber: event.blockNumber,
//               transactionHash: event.transactionHash,
//               rune: rune,
//               address: {
//                 from: event.returnValues.from.toLowerCase(),
//                 to: event.returnValues.to.toLowerCase()
//               },
//               balance: new Decimal128(event.returnValues.value),
//               timestamp: dataBlock.timestamp
//             }, { session })
//           }
//         })
//       }
//     }
//   } catch (error) {
//     console.log(error)
//     if (session.inTransaction()) {
//       await session.abortTransaction()
//     }
//     throw error;
//   } finally {
//     await session.endSession()
//   }
// }