import type { PayerInfo } from "./PayerInfo"

export type H2HFormPayinExtra = {
    comment?: string;
    successRedirectURL?: string;
    failedRedirectURL?: string;
    merchantURL: string;
    payerInfo: PayerInfo;
}