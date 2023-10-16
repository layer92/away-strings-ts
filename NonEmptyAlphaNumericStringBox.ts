import { Box } from "away-core/Box";
import { Expect } from "away-core/Expect";
import { OnException } from "away-core/OnException";
import { AlphanumericCharset } from "./CommonCharsets";
import { Strings } from "./Strings";

export class NonEmptyAlphaNumericStringBox extends Box<string>{
    private readonly NonEmptyAlphaNumericStringBox:undefined;
    
    constructor(data:string,onInvalidData:OnException){
        Expect(
            data.length,
            `data: length cannot be 0`,
            onInvalidData
        );
        Expect(
            Strings.IsInCharset(data,AlphanumericCharset),
            `data: not alphabetic`,
            onInvalidData
        );
        super(data);
    }
    
}