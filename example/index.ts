import picocolors from "picocolors";
import { CuteLogSymbols, createCuteLogSymbols } from "../src";

const unicodeLogSymbols = createCuteLogSymbols({ mode: "unicode" });
const asciiLogSymbols = createCuteLogSymbols({ mode: "ascii" });
const plainLogSymbols = createCuteLogSymbols();
const coloredLogSymbols = createCuteLogSymbols({
    style: {
        info: picocolors.blue,
        warning: picocolors.yellow,
        success: picocolors.green,
        error: picocolors.red,
    },
});

useCuteLogSymbols("Unicode Log Symbols", unicodeLogSymbols);
useCuteLogSymbols("Ascii Log Symbols", asciiLogSymbols);
useCuteLogSymbols("Plain Log Symbols", plainLogSymbols);
useCuteLogSymbols("Colored Log Symbols", coloredLogSymbols);

function useCuteLogSymbols(title: string, logSymbols: CuteLogSymbols) {
    console.log(title);
    console.log(` ${logSymbols.info} Information`);
    console.log(` ${logSymbols.warning} Warning`);
    console.log(` ${logSymbols.success} Success`);
    console.log(` ${logSymbols.error} Error`);
    console.log("");
}
