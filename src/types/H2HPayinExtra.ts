import type { CardDetails } from "./CardDetails"
import type { PayerInfo } from "./PayerInfo";

export type H2HPayinExtra = {
    cardDetails:CardDetails;
    successRedirectURL?: string;
    failedRedirectURL?: string;
    merchantURL: string;
    payerInfo: PayerInfo   
}