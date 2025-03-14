import { CharStream, CommonTokenStream } from "antlr4";
import BooleanExprLexer from "./generated/BooleanExprLexer.js";
import BooleanExprParser, { ExprContext } from "./generated/BooleanExprParser.js";
import { EvalVisitor } from "./EvalVisitor.js";
import { WordsVisitor } from "./WordsVisitor.js";

/**
 * Class representing a Boolean expression.
 */
export default class BooleanExpression {
    private caseSensitive: boolean;
    private lexer: BooleanExprLexer;
    private tokenStream: CommonTokenStream;
    private parser: BooleanExprParser;
    private tree: ExprContext;
    private wordsUsedInMatch: string[];

    /**
     * Creates an instance of BooleanExpression.
     * @param booleanExpression - The boolean expression as a string.
     * @param caseSensitive - Whether the expression is case sensitive.
     */
    public constructor(booleanExpression: string, caseSensitive = false) {
        this.caseSensitive = caseSensitive;
        this.lexer = new BooleanExprLexer(new CharStream(booleanExpression));
        this.tokenStream = new CommonTokenStream(this.lexer);
        this.parser = new BooleanExprParser(this.tokenStream);
        this.tree = this.parser.expr();
        // Check for errors, and if so throw exception to be handled higher up
        if (this.parser.syntaxErrorsCount > 0) {
            throw new SyntaxError("invalid boolean expression");
        }
        this.wordsUsedInMatch = [];
    }

    /**
     * Logs tokens for debugging grammar.
     */
    logTokens() {
        const symbols: (string | null)[] = this.lexer.symbolicNames;
        this.tokenStream.fill();
        this.tokenStream.tokens.forEach((token) => {
            const tokenName = symbols[token.type] || token.type;
            console.log(`Type: ${token.type}, Name: ${tokenName}, Text: '${token.text}'`);
        });
    }

    /**
     * Gets words used in the boolean search expression.
     * @returns An array of words used in the expression.
     */
    getWords(): string[] {
        const wordsVisitor = new WordsVisitor();
        wordsVisitor.visit(this.tree);
        return wordsVisitor.getStringValues();
    }

    /**
     * Checks whether the given text matches the boolean expression.
     * @param text - The text to match against the boolean expression.
     * @param caseSensitive - Whether the match should be case sensitive.
     * @returns True if the text matches the expression, false otherwise.
     */
    match(text: string, caseSensitive: boolean | null = null): boolean {
        const usedCaseSensitive: boolean = caseSensitive !== null ? caseSensitive : this.caseSensitive;
        const evalVisitor = new EvalVisitor(text, usedCaseSensitive);

        let foundMatch = evalVisitor.visit(this.tree);
        if (foundMatch) {
            this.wordsUsedInMatch = evalVisitor.getStringValues();
        } else {
            this.wordsUsedInMatch = [];
        }
        return foundMatch;
    }

    /**
     * Gets words visited in the evaluation of the boolean search expression to come to a positive match.
     * @returns An array of words used in the last match.
     */
    getWordsUsedInLastMatch() {
        return this.wordsUsedInMatch;
    }

    /**
     * Directly matches a boolean expression given as a string with a given text string.
     * This is convenient for a single match for the expression. For multiple matches, 
     * it is better to create a BooleanExpression object.
     * @param booleanExpression - The boolean expression as a string.
     * @param text - The text to match against the boolean expression.
     * @param caseSensitive - Whether the match should be case sensitive.
     * @returns True if the text matches the expression, false otherwise.
     */
    static match(booleanExpression: string, text: string, caseSensitive: boolean | null = null): boolean {
        const usedCaseSensitive: boolean = caseSensitive !== null ? caseSensitive : false;
        return new BooleanExpression(booleanExpression).match(text, usedCaseSensitive);
    }
}