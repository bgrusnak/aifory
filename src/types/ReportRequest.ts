export type ReportRequest = {
  timeTo: number;
  timeFrom: number;
  timeZone: string;
  orderTypeID: "invoice" | "withdraw";
  statusID: number;
}