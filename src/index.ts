import { connectMongo } from './database/mongodb';
import { PORT, MONGO_URI, WEB3_PROVIDER, STEP_BLOCK } from './config';
import { startApolloServer } from './apollo';
import { connectWeb3 } from './web3';
import { intervalConsume } from './service'

(async () => {
  try {
    await connectMongo(MONGO_URI)
    connectWeb3(WEB3_PROVIDER)
    await startApolloServer(PORT)
    intervalConsume({ stepBlock: STEP_BLOCK })
  } catch (error) {
    console.log(error);
  }
})()

