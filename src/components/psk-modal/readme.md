# psk-modal



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type      | Default     |
| ----------- | ------------ | ----------- | --------- | ----------- |
| `eventName` | `event-name` |             | `string`  | `undefined` |
| `expanded`  | `expanded`   |             | `string`  | `undefined` |
| `opened`    | `opened`     |             | `boolean` | `false`     |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `closeModal` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [psk-pin-popup](../psk-pin-popup)

### Depends on

- [psk-condition](../psk-condition)
- [psk-icon](../psk-icon)

### Graph
```mermaid
graph TD;
  psk-modal --> psk-condition
  psk-modal --> psk-icon
  psk-condition --> psk-hoc
  psk-pin-popup --> psk-modal
  style psk-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
