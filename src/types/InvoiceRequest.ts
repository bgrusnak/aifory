import type { PayerInfo } from "./PayerInfo";

export type InvoiceRequest = {
    amount: number;
    clientOrderID: string;
    currencyID: number;
    typeID: number;
    TTL: number;
    webhookURL?: string;
    extra: InvoiceRequestExtra;
}

export type InvoiceRequestExtra = {
    comment?: string;
    allowedMethodIDs: number[];
    successRedirectURL?: string;
    failedRedirectURL?: string;
    payerInfo?: PayerInfo;
}