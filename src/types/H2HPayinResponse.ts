export type H2HPayinResponse = {
    status: string;
    orderID: number;
    paymentURL: string;
    failCause: string;
}