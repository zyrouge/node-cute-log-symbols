import isUnicodeSupported from "is-unicode-supported";

export interface CuteLogSymbols {
    info: string;
    success: string;
    warning: string;
    error: string;
}

export const CuteLogSymbolsUnicode = {
    info: "ℹ",
    success: "✔",
    warning: "⚠",
    error: "✖",
};

export const CuteLogSymbolsAscii = {
    info: "i",
    success: "√",
    warning: "‼",
    error: "×",
};

export interface CreateCuteLogSymbolsOptions {
    style?: {
        info?: (symbol: string) => string;
        success?: (symbol: string) => string;
        warning?: (symbol: string) => string;
        error?: (symbol: string) => string;
    };
}

export const createCuteLogSymbols = (
    options?: CreateCuteLogSymbolsOptions
): CuteLogSymbols => {
    const from = isUnicodeSupported()
        ? CuteLogSymbolsUnicode
        : CuteLogSymbolsAscii;
    // @ts-expect-error
    const output: CuteLogSymbols = {};
    for (const key of Object.keys(from) as (keyof CuteLogSymbols)[]) {
        const symbol = from[key];
        output[key] = options?.style?.[key]?.(symbol) ?? symbol;
    }
    return output;
};

export default createCuteLogSymbols;
