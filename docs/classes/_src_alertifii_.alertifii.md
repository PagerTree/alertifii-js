**[alertifii-js](../README.md)**

> [Globals](../globals.md) / ["src/alertifii"](../modules/_src_alertifii_.md) / Alertifii

# Class: Alertifii

## Hierarchy

* **Alertifii**

## Index

### Constructors

* [constructor](_src_alertifii_.alertifii.md#constructor)

### Properties

* [\_hostname](_src_alertifii_.alertifii.md#_hostname)
* [\_path](_src_alertifii_.alertifii.md#_path)

### Methods

* [send](_src_alertifii_.alertifii.md#send)
* [setAttachment](_src_alertifii_.alertifii.md#setattachment)
* [setDevice](_src_alertifii_.alertifii.md#setdevice)
* [setHtml](_src_alertifii_.alertifii.md#sethtml)
* [setMessage](_src_alertifii_.alertifii.md#setmessage)
* [setPriority](_src_alertifii_.alertifii.md#setpriority)
* [setSound](_src_alertifii_.alertifii.md#setsound)
* [setTimestamp](_src_alertifii_.alertifii.md#settimestamp)
* [setTitle](_src_alertifii_.alertifii.md#settitle)
* [setUrl](_src_alertifii_.alertifii.md#seturl)

### Object literals

* [\_notification](_src_alertifii_.alertifii.md#_notification)

## Constructors

### constructor

\+ **new Alertifii**(`integration_id`: string, `destination_id?`: undefined \| string): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:62](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L62)*

#### Parameters:

Name | Type |
------ | ------ |
`integration_id` | string |
`destination_id?` | undefined \| string |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

## Properties

### \_hostname

• `Private` **\_hostname**: string = "api.alertifii.com"

*Defined in [src/alertifii.ts:50](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L50)*

___

### \_path

• `Private` **\_path**: string = "/1/messages.json"

*Defined in [src/alertifii.ts:51](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L51)*

## Methods

### send

▸ **send**(`title?`: undefined \| string, `message?`: undefined \| string): Promise\<[IResponse](../interfaces/_src_request_.iresponse.md)>

*Defined in [src/alertifii.ts:129](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L129)*

#### Parameters:

Name | Type |
------ | ------ |
`title?` | undefined \| string |
`message?` | undefined \| string |

**Returns:** Promise\<[IResponse](../interfaces/_src_request_.iresponse.md)>

___

### setAttachment

▸ **setAttachment**(`name`: string, `filePath`: string): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:94](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L94)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`filePath` | string |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

___

### setDevice

▸ **setDevice**(`device`: string): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:69](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L69)*

#### Parameters:

Name | Type |
------ | ------ |
`device` | string |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

___

### setHtml

▸ **setHtml**(): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:74](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L74)*

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

___

### setMessage

▸ **setMessage**(`message`: string): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:84](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L84)*

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

___

### setPriority

▸ **setPriority**(`priority`: [Priority](../modules/_src_alertifii_.md#priority), `expire?`: undefined \| number, `retry?`: undefined \| number): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:102](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L102)*

#### Parameters:

Name | Type |
------ | ------ |
`priority` | [Priority](../modules/_src_alertifii_.md#priority) |
`expire?` | undefined \| number |
`retry?` | undefined \| number |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

___

### setSound

▸ **setSound**(`sound`: [Sound](../modules/_src_alertifii_.md#sound)): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:89](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L89)*

#### Parameters:

Name | Type |
------ | ------ |
`sound` | [Sound](../modules/_src_alertifii_.md#sound) |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

___

### setTimestamp

▸ **setTimestamp**(`timestamp`: number): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:124](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L124)*

#### Parameters:

Name | Type |
------ | ------ |
`timestamp` | number |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

___

### setTitle

▸ **setTitle**(`title`: string): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:79](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L79)*

#### Parameters:

Name | Type |
------ | ------ |
`title` | string |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

___

### setUrl

▸ **setUrl**(`url`: string, `title?`: undefined \| string): [Alertifii](_src_alertifii_.alertifii.md)

*Defined in [src/alertifii.ts:116](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L116)*

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`title?` | undefined \| string |

**Returns:** [Alertifii](_src_alertifii_.alertifii.md)

## Object literals

### \_notification

▪ `Private` **\_notification**: object

*Defined in [src/alertifii.ts:53](https://github.com/PagerTree/alertifii-js/blob/5b5d650/src/alertifii.ts#L53)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`expire` | number | 0 |
`message` | string | "" |
`priority` | number | 0 |
`retry` | number | 30 |
`sound` | \"alertifii\" | "alertifii" |
`title` | string | "" |
`token` | string | "" |
`user` | string | "" |
