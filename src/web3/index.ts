import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { SOIL_ABI } from './abi/soil'
import { STONE_ABI } from './abi/stone'
import { WOOD_ABI } from './abi/wood'
import { RUBBER_ABI } from './abi/rubber'
import { PLASTIC_ABI } from './abi/plastic'
import { CRYSTAL_ABI } from './abi/crystal'
import { METAL_ABI } from './abi/metal'
import { GEM_ABI } from './abi/gem'
import { ONIXIUS_ABI } from './abi/onixius'
import { CRYPTON_ABI } from './abi/crypton'
import { PYTHIUM_ABI } from './abi/pythium'
import { PARANIUM_ABI } from './abi/paranium'

import { ADDRESS_CONTRACT } from '../config'

export let web3: Web3
export let soilContract: Contract
export let stoneContract: Contract
export let woodContract: Contract
export let rubberContract: Contract
export let plasticContract: Contract
export let crystalContract: Contract
export let metalContract: Contract
export let gemContract: Contract
export let onixiusContract: Contract
export let cryptonContract: Contract
export let pythiumContract: Contract
export let paraniumContract: Contract


export const connectWeb3 = (provider: string) => {
  try {
    web3 = new Web3(new Web3.providers.HttpProvider(provider))
    soilContract = new web3.eth.Contract(SOIL_ABI, ADDRESS_CONTRACT.soil)
    stoneContract = new web3.eth.Contract(STONE_ABI, ADDRESS_CONTRACT.stone)
    woodContract= new web3.eth.Contract(WOOD_ABI, ADDRESS_CONTRACT.wood)
    rubberContract= new web3.eth.Contract(RUBBER_ABI, ADDRESS_CONTRACT.rubber)
    plasticContract= new web3.eth.Contract(PLASTIC_ABI, ADDRESS_CONTRACT.plastic)
    crystalContract= new web3.eth.Contract(CRYSTAL_ABI, ADDRESS_CONTRACT.crystal)
    metalContract= new web3.eth.Contract(METAL_ABI, ADDRESS_CONTRACT.metal)
    gemContract= new web3.eth.Contract(GEM_ABI, ADDRESS_CONTRACT.gem)
    onixiusContract= new web3.eth.Contract(ONIXIUS_ABI, ADDRESS_CONTRACT.onixius)
    cryptonContract= new web3.eth.Contract(CRYPTON_ABI, ADDRESS_CONTRACT.crypton)
    pythiumContract= new web3.eth.Contract(PYTHIUM_ABI, ADDRESS_CONTRACT.pythium)
    paraniumContract= new web3.eth.Contract(PARANIUM_ABI, ADDRESS_CONTRACT.paranium)
    if (web3) console.log('Connect to web3');
  } catch (error) {
    throw error
  }
}