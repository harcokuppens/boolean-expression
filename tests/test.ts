
import BooleanExpression from '../src/BooleanExpression.js';

//import BooleanExpression from '../dist/BooleanExpression.js';

export function main() {

    const line = "paper by makeup adn john fakename ";
    const booleanExpr = "(fakename AND aKeup) or someone";

    //const tree = getParserTree(simpleBooleanExpr);
    const boolexpr = new BooleanExpression(booleanExpr);

    boolexpr.logTokens();


    let foundMatch = boolexpr.match(line)


    console.log("foundMatch: " + foundMatch.toString());

    const words = boolexpr.getWords();
    console.log("words in expression: " + words.toString());
    const wordsused = boolexpr.getWordsUsedInLastMatch();
    console.log("getWordsUsedInLastMatch: " + wordsused.toString());

    foundMatch = boolexpr.match("paper by john fakename and someone")
    console.log("foundMatch: " + foundMatch.toString());

    foundMatch = BooleanExpression.match("hallo or boe", "boek");
    console.log("foundMatch: " + foundMatch.toString());
    foundMatch = BooleanExpression.match("hallo or boe", "bah");
    console.log("foundMatch: " + foundMatch.toString());


    console.log("test whether an exception is thrown in case of invalid boolean expression");
    try {
        const wrongexpr = new BooleanExpression("boek or");
    } catch (exception) {
        console.log("Catched exception: Error in boolean search term");
    }
}

main();
