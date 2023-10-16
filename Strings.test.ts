import { Expect } from "away-core/Expect";
import {Strings} from "./Strings";

export function Strings__Test(){
    SplitByRepeatingDelimiter();
    Between();
}

interface SplitByRepeatingDelimiterTest{
    input:string,
    expectedResult:string[],
    delimiters:string[],
    parseDirection:"rightToLeft"|"leftToRight"
}

function SplitByRepeatingDelimiter(){
    const tests:SplitByRepeatingDelimiterTest[] = [

        {
            input: "ab[c]d[e]fg",
            delimiters: ["[","]"],
            parseDirection:"leftToRight",
            expectedResult: ["ab","c","d","e","fg"],
        },
        {
            input: "ab[c]d[e]fg",
            delimiters: ["b[","]"],
            parseDirection:"leftToRight",
            expectedResult: ["a","c","d[e]fg"],
        },
        {
            input: "a1b2c3",
            delimiters: ["1","2","3"],
            parseDirection:"leftToRight",
            expectedResult: ["a","b","c",""],
        },
        {
            input: "[a[b]c]",
            delimiters: ["[","]"],
            parseDirection:"leftToRight",
            expectedResult:["","a[b","c]"],
        },
        {
            input: "[a[b]c]",
            delimiters: ["[","]"],
            parseDirection:"rightToLeft",
            expectedResult:["[a","b]c",""],
        }

    ];

    for(const test of tests){
        const resultSplit = Strings.SplitStringByRepeatingDelimiters({
            string: test.input,
            delimiters: test.delimiters,
            parseDirection: test.parseDirection
        });
        Expect(
            JSON.stringify(resultSplit)===JSON.stringify(test.expectedResult),
            JSON.stringify({...test,resultSplit}),
            ()=>{}
        );
    
    }
}

interface SetBetweenTest{
    input:string,
    expectedResult:string,
    args:[string,string,string,"rightToLeft"|"leftToRight"]
}

function Between(){
    const tests:SetBetweenTest[] = [

        {
            input: "ab[c]d[e]fg",
            args: ["[","]","~","leftToRight"],
            expectedResult: "ab[~]d[~]fg",
        },
        {
            input: "ab[c]d[e]fg",
            args: ["b[","]","~","leftToRight"],
            expectedResult: "ab[~]d[e]fg",
        },
        {
            input: "ab[c]d[e]fg",
            args: ["[","]f","~","leftToRight"],
            expectedResult: "ab[~]fg",
        },
        {
            input: "ab[c]d[e]fg",
            args: ["b[","]f","~","leftToRight"],
            expectedResult: "ab[~]fg",
        },

        {
            input: "ab[c]d[e]fg",
            args: ["[","]","~","rightToLeft"],
            expectedResult: "ab[~]d[~]fg",
        },
        {
            input: "ab[c]d[e]fg",
            args: ["b[","]","~","rightToLeft"],
            expectedResult: "ab[~]fg",
        },
        {
            input: "ab[c]d[e]fg",
            args: ["[","]f","~","rightToLeft"],
            expectedResult: "ab[c]d[~]fg",
        },
        {
            input: "ab[c]d[e]fg",
            args: ["b[","]f","~","rightToLeft"],
            expectedResult: "ab[~]fg",
        },

    ];

    for(const test of tests){
        const result = Strings.SetBetween({
            string:test.input,
            delimiters:[test.args[0],test.args[1]],
            valueToSetTo:test.args[2],
            parseDirection: test.args[3],
        });
        Expect(
            result===test.expectedResult,
            JSON.stringify({...test,result}),
            ()=>{}
        );
    
    }

}

