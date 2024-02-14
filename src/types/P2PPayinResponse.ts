export type P2PPayinResponseExtra = {
    recipientCardIssuerID: number;
    bankName?: string;
}

export type P2PPayinResponse = {
    status: "accepted" | "refused";
    orderID: number;
    cardNumber?: string
    cardHolderName?: string;
    accountNumber: string
    accountName: string;
    TTL: number;
    failCause: string;
    extra: P2PPayinResponseExtra;
}