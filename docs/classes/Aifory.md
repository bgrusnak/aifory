[[libraryNameWithSpacesAndUpperCases]](../README.md) / Aifory

# Class: Aifory

## Table of contents

### Constructors

- [constructor](Aifory.md#constructor)

### Properties

- [apiSecret](Aifory.md#apisecret)
- [connection](Aifory.md#connection)

### Methods

- [appeal](Aifory.md#appeal)
- [balance](Aifory.md#balance)
- [cancel](Aifory.md#cancel)
- [confirmation](Aifory.md#confirmation)
- [createReport](Aifory.md#createreport)
- [createWallet](Aifory.md#createwallet)
- [currencies](Aifory.md#currencies)
- [downloadReport](Aifory.md#downloadreport)
- [invoice](Aifory.md#invoice)
- [invoiceDetails](Aifory.md#invoicedetails)
- [methods](Aifory.md#methods)
- [recipients](Aifory.md#recipients)
- [sendRequest](Aifory.md#sendrequest)
- [signature](Aifory.md#signature)
- [terminateWithdraw](Aifory.md#terminatewithdraw)
- [types](Aifory.md#types)
- [withdraw](Aifory.md#withdraw)
- [withdrawDetails](Aifory.md#withdrawdetails)

## Constructors

### constructor

• **new Aifory**(`options`): [`Aifory`](Aifory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `AiforyOptions` |

#### Returns

[`Aifory`](Aifory.md)

#### Defined in

[index.ts:16](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L16)

## Properties

### apiSecret

• `Private` **apiSecret**: `string`

#### Defined in

[index.ts:14](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L14)

___

### connection

• `Private` **connection**: `Axios`

#### Defined in

[index.ts:13](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L13)

## Methods

### appeal

▸ **appeal**(`ID`, `proofs`, `message?`, `amount?`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<``"OK"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ID` | `number` |
| `proofs` | `string`[] |
| `message?` | `string` |
| `amount?` | `number` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<``"OK"``\>\>

#### Defined in

[index.ts:91](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L91)

___

### balance

▸ **balance**(): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`BalanceItem`[]\>\>

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`BalanceItem`[]\>\>

#### Defined in

[index.ts:67](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L67)

___

### cancel

▸ **cancel**(`ID`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<``"OK"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ID` | `number` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<``"OK"``\>\>

#### Defined in

[index.ts:99](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L99)

___

### confirmation

▸ **confirmation**(`ID`, `utrNumber`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<``"OK"``\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ID` | `number` |
| `utrNumber` | `string` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<``"OK"``\>\>

#### Defined in

[index.ts:87](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L87)

___

### createReport

▸ **createReport**(`data`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<\{ `uid`: `string`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ReportRequest` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<\{ `uid`: `string`  }\>\>

#### Defined in

[index.ts:107](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L107)

___

### createWallet

▸ **createWallet**(`currency`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`Wallet`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `CurrencyId` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`Wallet`\>\>

#### Defined in

[index.ts:103](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L103)

___

### currencies

▸ **currencies**(): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`Currency`[]\>\>

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`Currency`[]\>\>

#### Defined in

[index.ts:71](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L71)

___

### downloadReport

▸ **downloadReport**(`uid`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`any`\>\>

#### Defined in

[index.ts:111](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L111)

___

### invoice

▸ **invoice**(`params`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`P2PPayinResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `InvoiceRequest` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`P2PPayinResponse`\>\>

#### Defined in

[index.ts:43](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L43)

___

### invoiceDetails

▸ **invoiceDetails**(`id`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`PayinDetails`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`PayinDetails`\>\>

#### Defined in

[index.ts:47](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L47)

___

### methods

▸ **methods**(): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`MethodItem`[]\>\>

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`MethodItem`[]\>\>

#### Defined in

[index.ts:79](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L79)

___

### recipients

▸ **recipients**(): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`Recipient`[]\>\>

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`Recipient`[]\>\>

#### Defined in

[index.ts:83](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L83)

___

### sendRequest

▸ **sendRequest**(`url`, `data`, `method?`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`any`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `data` | `Object` | `undefined` |
| `method` | `string` | `"POST"` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`any`\>\>

#### Defined in

[index.ts:29](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L29)

___

### signature

▸ **signature**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`string`

#### Defined in

[index.ts:24](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L24)

___

### terminateWithdraw

▸ **terminateWithdraw**(`clientOrderID`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<\{ `success`: `boolean`  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientOrderID` | `string` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<\{ `success`: `boolean`  }\>\>

#### Defined in

[index.ts:63](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L63)

___

### types

▸ **types**(): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`Currency`[]\>\>

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`Currency`[]\>\>

#### Defined in

[index.ts:75](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L75)

___

### withdraw

▸ **withdraw**(`params`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`WithdrawResponse`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `WithdrawRequest` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`WithdrawResponse`\>\>

#### Defined in

[index.ts:53](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L53)

___

### withdrawDetails

▸ **withdrawDetails**(`id`): `Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`PayoutDetails`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`Promise`\<[`AiforyResponse`](../README.md#aiforyresponse)\<`PayoutDetails`\>\>

#### Defined in

[index.ts:57](https://github.com/bgrusnak/aifory/blob/8398090/src/index.ts#L57)
