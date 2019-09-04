/**
 * @file
 */
import { MonadFunction } from 'macoolka-app/lib/MonadFunction'
import { Reader } from 'fp-ts/lib/Reader'
/**
 * Monad Log
 * @since 0.2.0
 */
export interface MonadLog {
    readonly info: MonadFunction<string, void>
    readonly log: MonadFunction<string, void>
    readonly debug: MonadFunction<string, void>
    readonly warn: MonadFunction<string, void>
    readonly error: MonadFunction<string, void>
}
/**
 * Log
 * @since 0.2.0
 */
export interface Log {
    readonly info: Reader<string, void>
    readonly log: Reader<string, void>
    readonly debug: Reader<string, void>
    readonly warn: Reader<string, void>
    readonly error: Reader<string, void>
}