import type { PayerInfo } from "./PayerInfo"

export type P2PFormPayinExtra = {
    comment?: string;
    successRedirectURL?: string;
    failedRedirectURL?: string;
    merchantURL: string;
    payerInfo: PayerInfo;
}