export enum PayoutStatus {
    NEW = 1,
    FINISHED,
    FAILED
}

export type PayoutDetails = {
    ID: number;
    statusID: PayoutStatus;
    orderType: string;
    amount: number;
    successPaid: number;
    fee: number;
    createdAt: number;
    clientOrderID: string;
    currencyID: number;
    recipient: string;
    recipientTypeID: number;
}