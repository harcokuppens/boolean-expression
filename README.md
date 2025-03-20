# BooleanExpression Library

<!--ts-->
<!-- prettier-ignore -->
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
      * [Importing the Library](#importing-the-library)
      * [Creating a BooleanExpression Object](#creating-a-booleanexpression-object)
      * [Matching a String](#matching-a-string)
      * [Getting Words in the Boolean Expression](#getting-words-in-the-boolean-expression)
      * [Getting Words Used in the Last Match](#getting-words-used-in-the-last-match)
      * [Case-Sensitive Matching](#case-sensitive-matching)
      * [Static Match Method](#static-match-method)
      * [Error Handling](#error-handling)
   * [API for BooleanExpression class](#api-for-booleanexpression-class)
      * [Description](#description-1)
      * [Constructor](#constructor)
         * [constructor(booleanExpression: string, caseSensitive = false)](#constructorbooleanexpression-string-casesensitive--false)
      * [Static Methods](#static-methods)
         * [static match(booleanExpression: string, text: string, caseSensitive: boolean | null = null): boolean](#static-matchbooleanexpression-string-text-string-casesensitive-boolean--null--null-boolean)
      * [Methods](#methods)
         * [match(text: string, caseSensitive: boolean | null = null): boolean](#matchtext-string-casesensitive-boolean--null--null-boolean)
         * [getWords(): string[]](#getwords-string)
         * [getWordsUsedInLastMatch(): string[]](#getwordsusedinlastmatch-string)
         * [logTokens()](#logtokens)
   * [Developer instructions](#developer-instructions)
   * [License](#license)
<!--te-->

## Description

This typescript library provides a `BooleanExpression` class to match a string
against a boolean expression containing words(strings). It supports both
case-sensitive and case-insensitive matching. The library is implemented using the
ANTLR4 tool.

The idea is that you combine words with parentheses and the `NOT`, `AND` and `OR`
operators to create a boolean expression. For example we could write:

```
  (fakename AND fakecity) OR someone
```

When evaluating this expression against a given string, then each word in the
expression is match against the given string and in case of match replaced by `TRUE`
and else by `FALSE` in the string. The rewritten boolean expression can then easily
be evaluated to either `TRUE` or `FALSE`.

Above boolean expression will give for the following strings:

```
"fakename of someone"       => TRUE
"my fakename is funny"      => FALSE
"Someone is not here"       => TRUE  (by default case insensitive match of words)
"I live in a fakecity"      => FALSE
"Fakecity is fakenamed"     => TRUE

```

The ANTLR4 grammar uses looks like:

```bash
expr:  NOT expr       # NotExpr
    | expr AND expr   # AndExpr
    | expr  expr      # ImplicitAndExpr
    | expr OR expr    # OrExpr
    | '(' expr ')'    # ParenExpr
    | EMPTY           # EmptyExpr
    | STRING          # StringExpr
    ;
```

This grammar also indicates that as a convenience that when you omit an operator between words, 
then implicitly the 'AND' operator is assumed.

We also allow freedom in expressing the operators `AND`,`OR` and `NOT`. The ANTLR4
grammar's lexer rules are:

```bash
AND:  'AND' | '&&' | '&' ;
OR: 'OR'  | '||' | '|';
NOT: 'NOT' | '!' ;
STRING: '"' (~["\r\n])* '"' | ~[ \t\r\n()!|&]+ ;
```

The strings 'AND', 'OR' and 'NOT' are also interpreted case insensitive. So you could
also write `and` instead of `AND`!

Note that the STRING lexer rules specifies that none-quoted words in the booleanexpression may not contain the characters
'|','&' and '!'. But if you quote the word then these characters are allowed. This
means that for example '!journal' is read as 'NOT journal'.

Finally when we have an invalid boolean expression, eg. 'John AND', then a "Syntax Error" exception is thrown by the 
library to allow users of the boolean-expression library to handle this exception at the code level they want.



## Installation

To install the library, you can use npm:

```bash
npm install "@harcokuppens/boolean-expression"
```

## Usage

### Importing the Library

```typescript
import BooleanExpression from '"@harcokuppens/boolean-expression"';
```

### Creating a BooleanExpression Object

```typescript
const booleanExpr = new BooleanExpression("(fakename AND aKeup) or someone"); // case insensitive
```

### Matching a String

You can match a string against the boolean expression using the `match` method.

```typescript
const line = "paper by makeup and john fakename";
const result = booleanExpr.match(line); // matches case insensitive
console.log(result); // true
```

### Getting Words in the Boolean Expression

You can get the words used in the boolean expression using the `getWords` method.

```typescript
const words = booleanExpr.getWords();
console.log(words); // ['fakename', 'aKeup', 'someone']
```

### Getting Words Used in the Last Match

When matching a boolean expression in case of an 'OR' when the left handside matches
we do not need to evaluate the right hand side anymore. This means we not always have
to match all words in the expression on the string. You can get the words only needed
in the last successful match using the `getWordsUsedInLastMatch` method.

```typescript
const wordsUsed = booleanExpr.getWordsUsedInLastMatch();
console.log(wordsUsed); // ['fakename', 'aKeup']
```

This means that we only needed the to match the words `fakename` and `aKeup` on the
string `"paper by makeup and john fakename"` to make the boolean expression
`"(fakename AND aKeup) or someone"` match.

### Case-Sensitive Matching

By default matching is done case insensitive, but you can specify case-sensitive
matching by passing `true` as the second argument to the `match` method.

```typescript
const result = booleanExpr.match(line, true); // matches case sensitive
console.log(result); // false
```

One can also create a boolean expression which by default matches case sensitive, and
let you pass `false` to match in case you do want to match case insensitive instead.

```typescript
const booleanExpr = new BooleanExpression("(fakename AND aKeup) or someone", true); // case sensitive
const result = booleanExpr.match(line); // matches case sensitive
console.log(result); // false
const result = booleanExpr.match(line, false); // matches case insensitive
console.log(result); // true
```

### Static Match Method

For convenience, you can use the static `match` method to directly match a boolean
expression string with a text string.

```typescript
const result = BooleanExpression.match("hallo or boe", "boek"); // first arg is boolean expression
console.log(result); // true
```

### Error Handling

If the boolean expression is invalid, a `SyntaxError` will be thrown.

```typescript
try {
  const invalidExpr = new BooleanExpression("boek or");
} catch (e) {
  console.error(e); // SyntaxError: invalid boolean expression
}
```

## API for BooleanExpression class

### Description

The `BooleanExpression` class represents a boolean expression and provides methods to
evaluate and analyze the expression.

### Constructor

#### `constructor(booleanExpression: string, caseSensitive = false)`

Creates an instance of `BooleanExpression`.

- **Parameters:**
  - `booleanExpression` (string): The boolean expression as a string.
  - `caseSensitive` (boolean, optional): Whether the expression is case sensitive.
    Defaults to `false`.

### Static Methods

#### `static match(booleanExpression: string, text: string, caseSensitive: boolean | null = null): boolean`

Directly matches a boolean expression given as a string with a given text string.
This is convenient for a single match for the expression. For multiple matches, it is
better to create a `BooleanExpression` object.

- **Parameters:**

  - `booleanExpression` (string): The boolean expression as a string.
  - `text` (string): The text to match against the boolean expression.
  - `caseSensitive` (boolean, optional): Whether the match should be case sensitive.
    Defaults to `false`.

- **Returns:** `true` if the text matches the expression, `false` otherwise.

### Methods

#### `match(text: string, caseSensitive: boolean | null = null): boolean`

Checks whether the given text matches the boolean expression.

- **Parameters:**

  - `text` (string): The text to match against the boolean expression.
  - `caseSensitive` (boolean, optional): Whether the match should be case sensitive.
    Defaults to the instance's `caseSensitive` value.

- **Returns:** `true` if the text matches the expression, `false` otherwise.

#### `getWords(): string[]`

Gets words used in the boolean search expression.

- **Returns:** An array of words used in the expression.

#### `getWordsUsedInLastMatch(): string[]`

Gets words visited in the evaluation of the boolean search expression to come to a
positive match.

- **Returns:** An array of words used in the last match.

#### `logTokens()`

Logs tokens for debugging grammar.

## Developer instructions

To work on this repository you have to run the following commands:

```bash
git clone https://github.com/harcokuppens/boolean-expression.git
cd boolean-expression
vscode .
```

This opens the repository in Visual Studio Code which is preconfigured with a debug
configuration.

To just quickly build and test the project from the commandline without needing
Visual Studio Code you can run in the project folder:

```bash
npm install
npm run build
npm run test
```

This will installs the project's dependencies, builds the project, and finally runs
the tests.

To cleanup the repository you can run:

```bash
npm run cleanall
```

## License

This project is licensed under the MIT License.
