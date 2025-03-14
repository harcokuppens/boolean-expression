
import { StringExprContext } from "./generated/BooleanExprParser.js";
import BooleanExprVisitor from "./generated/BooleanExprVisitor.js";

export class WordsVisitor extends BooleanExprVisitor<boolean> {
    protected defaultResult(): boolean {
        return false;
    }

    private stringValues: string[] = [];

    visitStringExpr = (ctx: StringExprContext): boolean => {
        const str = ctx.STRING().getText();
        // Remove surrounding quotes if present
        const unquotedStr = str.startsWith('"') && str.endsWith('"') ? str.slice(1, -1) : str;
        this.stringValues.push(unquotedStr);
        return false;
    }

    getStringValues(): string[] {
        return this.stringValues;
    }
}
