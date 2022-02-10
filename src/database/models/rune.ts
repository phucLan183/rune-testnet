import { IndexDescription, Decimal128 } from "mongodb";

export interface Rune {
  blockNumber: number
  blockId: string
  rune: string
  address: {
    from: string
    to: string
  }
  quantity: number
  timestamp: number | string
}

export const RuneIndexes: IndexDescription[] = [
  { key: { blockId: 1 }, unique: true, background: true },
  { key: { blockNumber: 1 }, background: true },
  { key: { rune: 1 }, background: true },
  { key: { address: 1 }, background: true },
  { key: { balance: 1 }, background: true },
  { key: { timestamp: 1 }, background: true },
]