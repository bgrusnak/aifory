export type SMPPayout = {
    currencyID: number;
    amount: number;
    recipientTypeID: number;
    recipient: number;
    webhookURL: string;
    methodID: number;
}