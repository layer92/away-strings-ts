import { Expect } from "away-core/Expect";
import { OnException } from "away-core/OnException";
import { Box } from "away-core/Box";
import { Strings } from "./Strings";
import { AlphebeticCharset } from "./CommonCharsets";

export class NonEmptyAlphabeticStringBox extends Box<string>{
    private readonly NonEmptyAlphabeticStringBox:undefined;
    
    constructor(data:string,onInvalidData:OnException){
        Expect(
            data.length,
            `data: length cannot be 0`,
            onInvalidData
        );
        Expect(
            Strings.IsInCharset(data,AlphebeticCharset),
            `data: not alphabetic`,
            onInvalidData
        );
        super(data);
    }
    
}