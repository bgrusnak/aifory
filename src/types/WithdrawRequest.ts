import type { CryptoPayout } from "./CryptoPayout";
import type { INRPayout } from "./INRPayout";
import type { SBPPayout } from "./SBPPayout";
import type { SMPPayout } from "./SMPPayout";

export type WithdrawRequest = {
  currencyID: number;
  amount: number;
  recipientTypeID: number;
  recipient: string;
  webhookURL: string;
  clientOrderID: string;
  extra: SBPPayout | INRPayout | SMPPayout | CryptoPayout
}