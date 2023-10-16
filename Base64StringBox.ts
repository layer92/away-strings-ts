import { Box } from "away-core/Box";

export class Base64StringBox extends Box<string>{
    private __Base64StringBox__:undefined;

    static FromPlaintext(plaintext:string){
        const buffer = Buffer.from(plaintext,"utf-8");
        const data = buffer.toString("base64");
        return new Base64StringBox(data);
    }
    
    toPlaintext(){
        const buffer = Buffer.from(this._data,"base64");
        return buffer.toString("utf-8");
    }

}