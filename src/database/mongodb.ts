import { MongoClient, Collection } from "mongodb"
import { Rune, RuneIndexes } from './models/rune'
export let mongoClient: MongoClient

// Export collection
export let RuneCollection: Collection<Rune>

export const connectMongo = async (MONGO_URI: any) => {
  try {
    // Connect Database
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();

    mongoClient.on('error', async (e) => {
      try {
        await mongoClient.close()
        await connectMongo(MONGO_URI)
      } catch (e) {
        setTimeout(connectMongo, 1000)
        throw e
      }
    })

    mongoClient.on('timeout', async () => {
      try {
        await mongoClient.close()
        await connectMongo(MONGO_URI)
      } catch (e) {
        setTimeout(connectMongo, 1000)
        throw e
      }
    })

    const db = mongoClient.db()
    
    // Connect collection
    RuneCollection = db.collection('rune-testnet')

    await Promise.all([
      RuneCollection.createIndexes(RuneIndexes)
    ])

    console.log('💾 Connected successfully to mongodb');
  } catch (error) {
    console.log('Mongodb: Disconnected');
    await mongoClient?.close(true)
    setTimeout(connectMongo, 1000)
    throw error
  }
}
