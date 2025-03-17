// Generated from ./grammar/BooleanExpr.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { AndExprContext } from "./BooleanExprParser.js";
import { StringExprContext } from "./BooleanExprParser.js";
import { ImplicitAndExprContext } from "./BooleanExprParser.js";
import { EmptyExprContext } from "./BooleanExprParser.js";
import { NotExprContext } from "./BooleanExprParser.js";
import { ParenExprContext } from "./BooleanExprParser.js";
import { OrExprContext } from "./BooleanExprParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BooleanExprParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class BooleanExprVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `AndExpr`
	 * labeled alternative in `BooleanExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpr?: (ctx: AndExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `StringExpr`
	 * labeled alternative in `BooleanExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpr?: (ctx: StringExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `ImplicitAndExpr`
	 * labeled alternative in `BooleanExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitAndExpr?: (ctx: ImplicitAndExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `EmptyExpr`
	 * labeled alternative in `BooleanExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyExpr?: (ctx: EmptyExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `NotExpr`
	 * labeled alternative in `BooleanExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExpr?: (ctx: NotExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `ParenExpr`
	 * labeled alternative in `BooleanExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `OrExpr`
	 * labeled alternative in `BooleanExprParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpr?: (ctx: OrExprContext) => Result;
}

