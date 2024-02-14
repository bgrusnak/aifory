export enum PayinStatus {
    PROCESS = 1,
    FINISHED,
    FAILED
}

export type PayinDetails = {
    ID: number;
    statusID: PayinStatus;
    orderType: string;
    amount: number;
    successPaid: number;
    fee: number;
    createdAt: number;
    clientOrderID: string;
    currencyID: number;
    expiredAt: number;
}