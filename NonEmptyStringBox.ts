import { Box } from "away-core/Box";
import { Expect } from "away-core/Expect";
import { OnException } from "away-core/OnException";

export class NonEmptyStringBox extends Box<string>{
    private readonly NonEmptyStringBox:undefined;
    
    constructor(data:string,onInvalidData:OnException){
        Expect(
            data.length,
            `data: length cannot be 0`,
            onInvalidData
        );
        super(data);
    }
    
}