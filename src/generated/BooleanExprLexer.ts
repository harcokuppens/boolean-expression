// Generated from ./grammar/BooleanExpr.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class BooleanExprLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly AND = 3;
	public static readonly OR = 4;
	public static readonly NOT = 5;
	public static readonly STRING = 6;
	public static readonly EMPTY = 7;
	public static readonly WS = 8;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "AND", 
                                                             "OR", "NOT", 
                                                             "STRING", "EMPTY", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "AND", "OR", "NOT", "STRING", "EMPTY", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, BooleanExprLexer._ATN, BooleanExprLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "BooleanExpr.g4"; }

	public get literalNames(): (string | null)[] { return BooleanExprLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return BooleanExprLexer.symbolicNames; }
	public get ruleNames(): string[] { return BooleanExprLexer.ruleNames; }

	public get serializedATN(): number[] { return BooleanExprLexer._serializedATN; }

	public get channelNames(): string[] { return BooleanExprLexer.channelNames; }

	public get modeNames(): string[] { return BooleanExprLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,8,66,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,
	1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,28,8,2,1,3,1,3,1,3,1,3,1,3,3,3,35,8,3,1,4,
	1,4,1,4,1,4,3,4,41,8,4,1,5,1,5,5,5,45,8,5,10,5,12,5,48,9,5,1,5,1,5,4,5,
	52,8,5,11,5,12,5,53,3,5,56,8,5,1,6,1,6,1,7,4,7,61,8,7,11,7,12,7,62,1,7,
	1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,9,2,0,65,65,97,97,2,0,
	78,78,110,110,2,0,68,68,100,100,2,0,79,79,111,111,2,0,82,82,114,114,2,0,
	84,84,116,116,3,0,10,10,13,13,34,34,6,0,9,10,13,13,32,33,38,38,40,41,124,
	124,3,0,9,10,13,13,32,32,74,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,
	0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,19,
	1,0,0,0,5,27,1,0,0,0,7,34,1,0,0,0,9,40,1,0,0,0,11,55,1,0,0,0,13,57,1,0,
	0,0,15,60,1,0,0,0,17,18,5,40,0,0,18,2,1,0,0,0,19,20,5,41,0,0,20,4,1,0,0,
	0,21,22,7,0,0,0,22,23,7,1,0,0,23,28,7,2,0,0,24,25,5,38,0,0,25,28,5,38,0,
	0,26,28,5,38,0,0,27,21,1,0,0,0,27,24,1,0,0,0,27,26,1,0,0,0,28,6,1,0,0,0,
	29,30,7,3,0,0,30,35,7,4,0,0,31,32,5,124,0,0,32,35,5,124,0,0,33,35,5,124,
	0,0,34,29,1,0,0,0,34,31,1,0,0,0,34,33,1,0,0,0,35,8,1,0,0,0,36,37,7,1,0,
	0,37,38,7,3,0,0,38,41,7,5,0,0,39,41,5,33,0,0,40,36,1,0,0,0,40,39,1,0,0,
	0,41,10,1,0,0,0,42,46,5,34,0,0,43,45,8,6,0,0,44,43,1,0,0,0,45,48,1,0,0,
	0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,46,1,0,0,0,49,56,5,34,0,
	0,50,52,8,7,0,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,
	54,56,1,0,0,0,55,42,1,0,0,0,55,51,1,0,0,0,56,12,1,0,0,0,57,58,1,0,0,0,58,
	14,1,0,0,0,59,61,7,8,0,0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,0,0,62,63,
	1,0,0,0,63,64,1,0,0,0,64,65,6,7,0,0,65,16,1,0,0,0,8,0,27,34,40,46,53,55,
	62,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BooleanExprLexer.__ATN) {
			BooleanExprLexer.__ATN = new ATNDeserializer().deserialize(BooleanExprLexer._serializedATN);
		}

		return BooleanExprLexer.__ATN;
	}


	static DecisionsToDFA = BooleanExprLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}