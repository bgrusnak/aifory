import type { PayerInfo } from "./PayerInfo";

export type P2PPayinExtra = {
    methodID: number;
    payerInfo: PayerInfo
}