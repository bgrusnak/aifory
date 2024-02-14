export type PaymentFormResponse = {
    orderID: number;
    status: string;
    paymentURL: string;
    failCause: string;
}