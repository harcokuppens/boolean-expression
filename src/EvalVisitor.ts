
import BooleanExprVisitor from './generated/BooleanExprVisitor.js';
import { AndExprContext, OrExprContext, ParenExprContext, StringExprContext, ImplicitAndExprContext, NotExprContext, EmptyExprContext } from './generated/BooleanExprParser.js';


function matchWordInText(word: string, text: string, caseSensitive: boolean): boolean {
    let matchValue;
    if (caseSensitive) {
        matchValue = text.includes(word);
    } else {
        matchValue = text.toLowerCase().includes(word.toLowerCase());
    }
    return matchValue;
}

export class EvalVisitor extends BooleanExprVisitor<boolean> {
    protected defaultResult(): boolean {
        return false;
    }

    private caseSensitive: boolean;
    private textToMatch: string;
    private stringValues: string[] = [];

    constructor(textToMatch: string, caseSensitive: boolean) {
        super();
        this.textToMatch = textToMatch;
        this.caseSensitive = caseSensitive;
    }


    visitAndExpr = (ctx: AndExprContext): boolean => {
        const left = this.visit(ctx.expr(0));
        if (!left) return false;
        const right = this.visit(ctx.expr(1));
        return left && right;
    }

    visitOrExpr = (ctx: OrExprContext): boolean => {
        const left = this.visit(ctx.expr(0));
        if (left) return true;
        const right = this.visit(ctx.expr(1));
        return left || right;
    }

    // visitImplicitOrExpr = (ctx: ImplicitOrExprContext): boolean => {
    //     const left = this.visit(ctx.expr(0));
    //     if (left) return true;
    //     const right = this.visit(ctx.expr(1));
    //     return left || right;
    // }


    visitImplicitAndExpr = (ctx: ImplicitAndExprContext): boolean => {
        const left = this.visit(ctx.expr(0));
        if (!left) return false;
        const right = this.visit(ctx.expr(1));
        return left && right;
    }


    visitParenExpr = (ctx: ParenExprContext): boolean => {
        return this.visit(ctx.expr());
    }

    visitNotExpr = (ctx: NotExprContext): boolean => {
        return !this.visit(ctx.expr());
    }

    visitStringExpr = (ctx: StringExprContext): boolean => {
        const str = ctx.STRING().getText();
        // Remove surrounding quotes if present
        const unquotedStr = str.startsWith('"') && str.endsWith('"') ? str.slice(1, -1) : str;
        this.stringValues.push(unquotedStr);
        return matchWordInText(unquotedStr, this.textToMatch, this.caseSensitive);
    }

    visitEmptyExpr = (ctx: EmptyExprContext): boolean => {
        // Handle the empty string case
        return true;
    }

    getStringValues(): string[] {
        return this.stringValues;
    }
}
