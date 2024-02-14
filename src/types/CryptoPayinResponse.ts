export type CryptoPayinResponse = {
    status: string;
    orderID: number;
    address: string;
    destTag: string;
    failCause: string;
}