# node-cute-log-symbols

💜 Cute log symbols.

## Installation

```bash
$ npm install cute-log-symbols
```

## Usage

### Importing

```ts
// javascript
const { createCuteLogSymbols } = require("cute-log-symbols");

// typescript
import { createCuteLogSymbols } from "cute-log-symbols";
```

### Colored symbols

You will need to install some terminal color library for this. [Picocolors](https://www.npmjs.com/package/picocolors) is recommended.

```ts
import picocolors from "picocolors";
import { createCuteLogSymbols } from "cute-log-symbols";

const logSymbols = createCuteLogSymbols({
    style: {
        info: picocolors.blue,
        warning: picocolors.yellow,
        success: picocolors.green,
        error: picocolors.red,
    },
});

console.log(logSymbols.info, "Information");
console.log(logSymbols.warning, "Warning");
console.log(logSymbols.success, "Success");
console.log(logSymbols.error, "Error");
```

### Uncolored symbols

```ts
import { createCuteLogSymbols } from "cute-log-symbols";

const logSymbols = createCuteLogSymbols();

console.log(logSymbols.info, "Information");
console.log(logSymbols.warning, "Warning");
console.log(logSymbols.success, "Success");
console.log(logSymbols.error, "Error");
```

## License

[MIT](./LICENSE)
