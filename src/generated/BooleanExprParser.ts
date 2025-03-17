// Generated from ./grammar/BooleanExpr.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import BooleanExprVisitor from "./BooleanExprVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class BooleanExprParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly AND = 3;
	public static readonly OR = 4;
	public static readonly NOT = 5;
	public static readonly STRING = 6;
	public static readonly EMPTY = 7;
	public static readonly WS = 8;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_expr = 0;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "AND", 
                                                             "OR", "NOT", 
                                                             "STRING", "EMPTY", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expr",
	];
	public get grammarFileName(): string { return "BooleanExpr.g4"; }
	public get literalNames(): (string | null)[] { return BooleanExprParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return BooleanExprParser.symbolicNames; }
	public get ruleNames(): string[] { return BooleanExprParser.ruleNames; }
	public get serializedATN(): number[] { return BooleanExprParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, BooleanExprParser._ATN, BooleanExprParser.DecisionsToDFA, new PredictionContextCache());
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 0;
		this.enterRecursionRule(localctx, 0, BooleanExprParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				localctx = new NotExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 3;
				this.match(BooleanExprParser.NOT);
				this.state = 4;
				this.expr(7);
				}
				break;
			case 1:
				{
				localctx = new ParenExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 5;
				this.match(BooleanExprParser.T__0);
				this.state = 6;
				this.expr(0);
				this.state = 7;
				this.match(BooleanExprParser.T__1);
				}
				break;
			case 7:
				{
				localctx = new EmptyExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 9;
				this.match(BooleanExprParser.EMPTY);
				}
				break;
			case 6:
				{
				localctx = new StringExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 10;
				this.match(BooleanExprParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 23;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 21;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BooleanExprParser.RULE_expr);
						this.state = 13;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 14;
						this.match(BooleanExprParser.AND);
						this.state = 15;
						this.expr(7);
						}
						break;
					case 2:
						{
						localctx = new ImplicitAndExprContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BooleanExprParser.RULE_expr);
						this.state = 16;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 17;
						this.expr(6);
						}
						break;
					case 3:
						{
						localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, BooleanExprParser.RULE_expr);
						this.state = 18;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 19;
						this.match(BooleanExprParser.OR);
						this.state = 20;
						this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 0:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,8,27,2,0,7,0,1,0,
	1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,12,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
	1,0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,0,1,0,1,0,0,0,31,0,11,1,0,0,0,2,3,6,
	0,-1,0,3,4,5,5,0,0,4,12,3,0,0,7,5,6,5,1,0,0,6,7,3,0,0,0,7,8,5,2,0,0,8,12,
	1,0,0,0,9,12,5,7,0,0,10,12,5,6,0,0,11,2,1,0,0,0,11,5,1,0,0,0,11,9,1,0,0,
	0,11,10,1,0,0,0,12,23,1,0,0,0,13,14,10,6,0,0,14,15,5,3,0,0,15,22,3,0,0,
	7,16,17,10,5,0,0,17,22,3,0,0,6,18,19,10,4,0,0,19,20,5,4,0,0,20,22,3,0,0,
	5,21,13,1,0,0,0,21,16,1,0,0,0,21,18,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,
	23,24,1,0,0,0,24,1,1,0,0,0,25,23,1,0,0,0,3,11,21,23];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BooleanExprParser.__ATN) {
			BooleanExprParser.__ATN = new ATNDeserializer().deserialize(BooleanExprParser._serializedATN);
		}

		return BooleanExprParser.__ATN;
	}


	static DecisionsToDFA = BooleanExprParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ExprContext extends ParserRuleContext {
	constructor(parser?: BooleanExprParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return BooleanExprParser.RULE_expr;
	}
	public override copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class AndExprContext extends ExprContext {
	constructor(parser: BooleanExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public AND(): TerminalNode {
		return this.getToken(BooleanExprParser.AND, 0);
	}
	// @Override
	public accept<Result>(visitor: BooleanExprVisitor<Result>): Result {
		if (visitor.visitAndExpr) {
			return visitor.visitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExprContext extends ExprContext {
	constructor(parser: BooleanExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(BooleanExprParser.STRING, 0);
	}
	// @Override
	public accept<Result>(visitor: BooleanExprVisitor<Result>): Result {
		if (visitor.visitStringExpr) {
			return visitor.visitStringExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImplicitAndExprContext extends ExprContext {
	constructor(parser: BooleanExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	// @Override
	public accept<Result>(visitor: BooleanExprVisitor<Result>): Result {
		if (visitor.visitImplicitAndExpr) {
			return visitor.visitImplicitAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmptyExprContext extends ExprContext {
	constructor(parser: BooleanExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EMPTY(): TerminalNode {
		return this.getToken(BooleanExprParser.EMPTY, 0);
	}
	// @Override
	public accept<Result>(visitor: BooleanExprVisitor<Result>): Result {
		if (visitor.visitEmptyExpr) {
			return visitor.visitEmptyExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExprContext extends ExprContext {
	constructor(parser: BooleanExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(BooleanExprParser.NOT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	// @Override
	public accept<Result>(visitor: BooleanExprVisitor<Result>): Result {
		if (visitor.visitNotExpr) {
			return visitor.visitNotExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExprContext extends ExprContext {
	constructor(parser: BooleanExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	// @Override
	public accept<Result>(visitor: BooleanExprVisitor<Result>): Result {
		if (visitor.visitParenExpr) {
			return visitor.visitParenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	constructor(parser: BooleanExprParser, ctx: ExprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public OR(): TerminalNode {
		return this.getToken(BooleanExprParser.OR, 0);
	}
	// @Override
	public accept<Result>(visitor: BooleanExprVisitor<Result>): Result {
		if (visitor.visitOrExpr) {
			return visitor.visitOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
