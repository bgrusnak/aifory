import CryptoJS from 'crypto-js';
import axios, { Axios } from 'axios';
import type { AiforyOptions, BalanceItem, Currency, CurrencyId, InvoiceRequest, MethodItem, P2PPayinResponse, PayinDetails, PayoutDetails, Recipient, ReportRequest, Wallet, WithdrawRequest, WithdrawResponse } from './types';

const defaultUrl = 'https://api.aifory.io';

export type AiforyResponse<type> = {
  data?: type,
  error?: any
}

export class Aifory {
  private connection: Axios;
  private apiSecret: string;

  constructor(options: AiforyOptions) {
    this.connection = axios.create();
    this.connection.defaults.baseURL = options.url || defaultUrl;
    this.connection.defaults.headers.common['API-Key'] = options.apiKey;
    this.connection.defaults.headers.common['user-agent'] = options.userAgent;
    this.apiSecret = options.apiSecret!;
  }

  signature(data: Object): string {
    const raw = JSON.stringify(data);
    return CryptoJS.HmacSHA512(raw.toString(), this.apiSecret).toString()
  }

  async sendRequest(url: string, data: Object, method = "POST"): Promise<AiforyResponse<any>> {
    return await this.connection.request({
      url, method: method.toLowerCase(),
      data,
      headers: {
        Signature: this.signature(data)
      }
    }).then(value => {
      return value.status == 200 ? {
        data: value.data
      } : { error: value.data }
    })
  }

  async invoice(params: InvoiceRequest): Promise<AiforyResponse<P2PPayinResponse>> {
    return await this.sendRequest('/payin/process', params)
  }

  async invoiceDetails(id: number): Promise<AiforyResponse<PayinDetails>> {
    return await this.sendRequest('/payin/details', {
      ID: id
    })
  }

  async withdraw(params: WithdrawRequest): Promise<AiforyResponse<WithdrawResponse>> {
    return await this.sendRequest('/payout/process', params)
  }

  async withdrawDetails(id: number): Promise<AiforyResponse<PayoutDetails>> {
    return await this.sendRequest('/payout/details', {
      ID: id
    })
  }

  async terminateWithdraw(clientOrderID: string): Promise<AiforyResponse<{ success: boolean }>> {
    return await this.sendRequest('/payout/terminate', { clientOrderID })
  }

  async balance(): Promise<AiforyResponse<BalanceItem[]>> {
    return await this.sendRequest('/account/balance', {}, "get")
  }

  async currencies(): Promise<AiforyResponse<Currency[]>> {
    return await this.sendRequest('/info/currency', {}, "get")
  }

  async types(): Promise<AiforyResponse<Currency[]>> {
    return await this.sendRequest('/info/recipient_type', {}, "get")
  }

  async methods(): Promise<AiforyResponse<MethodItem[]>> {
    return await this.sendRequest('/info/p2p_method', {}, "get")
  }

  async recipients(): Promise<AiforyResponse<Recipient[]>> {
    return await this.sendRequest('/info/sbp_withdraw_issuers', {}, "get")
  }

  async confirmation(ID: number, utrNumber: string): Promise<AiforyResponse<'OK'>> {
    return await this.sendRequest('/p2p/confirm', { ID, extra: { utrNumber } })
  }

  async appeal(ID: number, proofs: string[], message?: string, amount?: number): Promise<AiforyResponse<'OK'>> {
    const data: any = { ID };
    if (!!message) data.message = message;
    if (!!amount) data.amount = amount;
    data.proofs = proofs;
    return await this.sendRequest('/p2p/appeal', data);
  }

  async cancel(ID: number): Promise<AiforyResponse<'OK'>> {
    return await this.sendRequest('/p2p/cancel', { ID })
  }

  async createWallet(currency: CurrencyId): Promise<AiforyResponse<Wallet>> {
    return await this.sendRequest('/wallet/create', currency)
  }

  async createReport(data: ReportRequest): Promise<AiforyResponse<{ uid: string }>> {
    return await this.sendRequest('/account/create_report', data)
  }

  async downloadReport(uid: string): Promise<AiforyResponse<any>> {
    return await this.sendRequest('/account/download_report', { uid })
  }
}
