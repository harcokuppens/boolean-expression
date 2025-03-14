import BooleanExpression from '../src/BooleanExpression.js';
import { describe, it, expect } from 'vitest';

describe('boolexpr', () => {

    const line = "paper by makeup adn john fakename ";
    const booleanExpr = "(fakename AND aKeup) or someone";
    const boolexpr = new BooleanExpression(booleanExpr);

    it('match boolean expression to be true', () => {
        expect(boolexpr.match(line)).toBe(true);
    });


    it('get words in boolean expression', () => {
        const words = boolexpr.getWords();
        expect(words).toStrictEqual(['fakename', 'aKeup', 'someone']);
    });

    it('words used in last match', () => {
        const wordsused = boolexpr.getWordsUsedInLastMatch();
        expect(wordsused).toStrictEqual(['fakename', 'aKeup']);
    });

    it('match boolean expression case sensitive to be false ', () => {
        expect(boolexpr.match(line, true)).toBe(false);
    });

    it('match on another line', () => {
        expect(boolexpr.match("paper by john fakename and someone")).toBe(true);
    });

    // it('match on again another line (now no match)', () => {
    //     expect(boolexpr.match("paper by john fakename and henk")).toBe(false);
    // });

    it('words used in last match again', () => {
        const wordsused = boolexpr.getWordsUsedInLastMatch();
        expect(wordsused).toStrictEqual(['fakename', 'aKeup', 'someone']);
    });

    it('match on booleanexpr and line directly', () => {
        expect(BooleanExpression.match("hallo or boe", "boek")).toBe(true);
    });

    it('match on booleanexpr and line directly(no match)', () => {
        expect(BooleanExpression.match("hallo or boe", "bah")).toBe(false);
    });

    it('match on booleanexpr and line directly casesensitive', () => {
        expect(BooleanExpression.match("hallo or boe", "boek", true)).toBe(true);
    });

    it('match on booleanexpr and line via compiled expresssion casesensitive', () => {
        const line = "paper by makeup adn john fakename ";
        const booleanExpr = "(fakename AND aKeup) or someone";
        const boolexpr = new BooleanExpression(booleanExpr, true);
        expect(boolexpr.match(line)).toBe(false);
    });

    it('match on booleanexpr and line via compiled expresssion casesensitive', () => {
        const line = "paper by makeup adn john fakename ";
        const booleanExpr = "(fakename AND aKeup) or someone";
        const boolexpr = new BooleanExpression(booleanExpr, false);
        expect(boolexpr.match(line)).toBe(true);
    });

    it('syntax error exception thrown at invalid boolean expression', () => {
        expect(() => new BooleanExpression("boek or")).toThrow(SyntaxError);
        expect(() => new BooleanExpression("boek or")).toThrow('invalid boolean expression');
    });
});