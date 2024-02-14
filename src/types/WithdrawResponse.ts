export type WithdrawResponse = {
  status: "accepted" | "refused";
  orderID: number;
  failCause?: string;
}