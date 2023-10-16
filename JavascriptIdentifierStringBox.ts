import { Box } from "away-core/Box";
import { Expect } from "away-core/Expect";
import { OnException } from "away-core/OnException";
import { NumericCharset, JavascriptIdentifierCharset } from "./CommonCharsets";
import { Strings } from "./Strings";

export class JavascriptIdentifierStringBox extends Box<string>{
    private readonly JavascriptIdentifierStringBox:undefined;
    
    constructor(data:string,onInvalidData:OnException){
        Expect(
            data.length,
            `data: length cannot be 0`,
            onInvalidData
        );
        Expect(
            !Strings.IsInCharset(data[0],NumericCharset),
            `data: cannot start with a number: `+data,
            onInvalidData
        );
        Expect(
            Strings.IsInCharset(data,JavascriptIdentifierCharset),
            `data: invalid character(s): `+data,
            onInvalidData
        );
        super(data);
    }
    
}