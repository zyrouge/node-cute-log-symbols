import isUnicodeSupported from "is-unicode-supported";

export interface CuteLogSymbols {
    info: string;
    success: string;
    warning: string;
    error: string;
}

export const CuteLogSymbolsUnicode: CuteLogSymbols = {
    info: "ℹ",
    success: "✔",
    warning: "⚠",
    error: "✖",
};

export const CuteLogSymbolsAscii: CuteLogSymbols = {
    info: "i",
    success: "√",
    warning: "‼",
    error: "×",
};

export interface CreateCuteLogSymbolsOptions {
    mode?: "auto" | "ascii" | "unicode";
    style?: {
        [k in keyof CuteLogSymbols]?: (symbol: string) => string;
    };
}

export const createCuteLogSymbols = (
    options?: CreateCuteLogSymbolsOptions
): CuteLogSymbols => {
    const from = getCuteLogSymbolsFromMode(options?.mode);
    // @ts-expect-error
    const output: CuteLogSymbols = {};
    for (const key of Object.keys(from) as (keyof CuteLogSymbols)[]) {
        const symbol = from[key];
        output[key] = options?.style?.[key]?.(symbol) ?? symbol;
    }
    return output;
};

export const getCuteLogSymbolsFromMode = (
    mode?: CreateCuteLogSymbolsOptions["mode"]
) => {
    if (mode === "ascii") {
        return CuteLogSymbolsAscii;
    }
    if (mode === "unicode") {
        return CuteLogSymbolsUnicode;
    }
    return isUnicodeSupported() ? CuteLogSymbolsUnicode : CuteLogSymbolsAscii;
};

export default createCuteLogSymbols;
