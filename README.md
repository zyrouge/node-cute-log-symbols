# node-cute-log-symbols

💜 Cute log symbols.

## Installation

```bash
$ npm install cute-log-symbols
```

## Usage

### Uncolored symbols

```ts
const { createCuteLogSymbols } = require("cute-log-symbols");
// or
import { createCuteLogSymbols } from "cute-log-symbols";

const logSymbols = createCuteLogSymbols();

console.log(logSymbols.info, "Information");
console.log(logSymbols.warning, "Warning");
console.log(logSymbols.success, "Success");
console.log(logSymbols.error, "Error");
```
