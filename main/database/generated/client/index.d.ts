
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model user_accounts
 * 
 */
export type user_accounts = {
  id: number
  email: string
  username: string
  password: string
  account_type: string | null
  incoming_server: string | null
  outgoing_server: string | null
}

/**
 * Model email
 * 
 */
export type email = {
  id: number
  sender_id: number
  recipient: string
  subject: string
  body: string
  timestamp: Date
  is_read: boolean
}

/**
 * Model attachments
 * 
 */
export type attachments = {
  id: number
  email_id: number
  file_name: string
  file_type: string
  file_size: string
  file_contents: Buffer
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_accounts
 * const user_accounts = await prisma.user_accounts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_accounts
   * const user_accounts = await prisma.user_accounts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user_accounts`: Exposes CRUD operations for the **user_accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_accounts
    * const user_accounts = await prisma.user_accounts.findMany()
    * ```
    */
  get user_accounts(): Prisma.user_accountsDelegate<GlobalReject>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.emailDelegate<GlobalReject>;

  /**
   * `prisma.attachments`: Exposes CRUD operations for the **attachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachments.findMany()
    * ```
    */
  get attachments(): Prisma.attachmentsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.13.0
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_accounts: 'user_accounts',
    email: 'email',
    attachments: 'attachments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type User_accountsCountOutputType
   */


  export type User_accountsCountOutputType = {
    emails: number
  }

  export type User_accountsCountOutputTypeSelect = {
    emails?: boolean
  }

  export type User_accountsCountOutputTypeGetPayload<S extends boolean | null | undefined | User_accountsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User_accountsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (User_accountsCountOutputTypeArgs)
    ? User_accountsCountOutputType 
    : S extends { select: any } & (User_accountsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof User_accountsCountOutputType ? User_accountsCountOutputType[P] : never
  } 
      : User_accountsCountOutputType




  // Custom InputTypes

  /**
   * User_accountsCountOutputType without action
   */
  export type User_accountsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the User_accountsCountOutputType
     */
    select?: User_accountsCountOutputTypeSelect | null
  }



  /**
   * Count Type EmailCountOutputType
   */


  export type EmailCountOutputType = {
    attachments: number
  }

  export type EmailCountOutputTypeSelect = {
    attachments?: boolean
  }

  export type EmailCountOutputTypeGetPayload<S extends boolean | null | undefined | EmailCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? EmailCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (EmailCountOutputTypeArgs)
    ? EmailCountOutputType 
    : S extends { select: any } & (EmailCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof EmailCountOutputType ? EmailCountOutputType[P] : never
  } 
      : EmailCountOutputType




  // Custom InputTypes

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmailCountOutputType
     */
    select?: EmailCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model user_accounts
   */


  export type AggregateUser_accounts = {
    _count: User_accountsCountAggregateOutputType | null
    _avg: User_accountsAvgAggregateOutputType | null
    _sum: User_accountsSumAggregateOutputType | null
    _min: User_accountsMinAggregateOutputType | null
    _max: User_accountsMaxAggregateOutputType | null
  }

  export type User_accountsAvgAggregateOutputType = {
    id: number | null
  }

  export type User_accountsSumAggregateOutputType = {
    id: number | null
  }

  export type User_accountsMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    account_type: string | null
    incoming_server: string | null
    outgoing_server: string | null
  }

  export type User_accountsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    password: string | null
    account_type: string | null
    incoming_server: string | null
    outgoing_server: string | null
  }

  export type User_accountsCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    account_type: number
    incoming_server: number
    outgoing_server: number
    _all: number
  }


  export type User_accountsAvgAggregateInputType = {
    id?: true
  }

  export type User_accountsSumAggregateInputType = {
    id?: true
  }

  export type User_accountsMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    account_type?: true
    incoming_server?: true
    outgoing_server?: true
  }

  export type User_accountsMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    account_type?: true
    incoming_server?: true
    outgoing_server?: true
  }

  export type User_accountsCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    account_type?: true
    incoming_server?: true
    outgoing_server?: true
    _all?: true
  }

  export type User_accountsAggregateArgs = {
    /**
     * Filter which user_accounts to aggregate.
     */
    where?: user_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_accounts to fetch.
     */
    orderBy?: Enumerable<user_accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_accounts
    **/
    _count?: true | User_accountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_accountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_accountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_accountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_accountsMaxAggregateInputType
  }

  export type GetUser_accountsAggregateType<T extends User_accountsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_accounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_accounts[P]>
      : GetScalarType<T[P], AggregateUser_accounts[P]>
  }




  export type User_accountsGroupByArgs = {
    where?: user_accountsWhereInput
    orderBy?: Enumerable<user_accountsOrderByWithAggregationInput>
    by: User_accountsScalarFieldEnum[]
    having?: user_accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_accountsCountAggregateInputType | true
    _avg?: User_accountsAvgAggregateInputType
    _sum?: User_accountsSumAggregateInputType
    _min?: User_accountsMinAggregateInputType
    _max?: User_accountsMaxAggregateInputType
  }


  export type User_accountsGroupByOutputType = {
    id: number
    email: string
    username: string
    password: string
    account_type: string | null
    incoming_server: string | null
    outgoing_server: string | null
    _count: User_accountsCountAggregateOutputType | null
    _avg: User_accountsAvgAggregateOutputType | null
    _sum: User_accountsSumAggregateOutputType | null
    _min: User_accountsMinAggregateOutputType | null
    _max: User_accountsMaxAggregateOutputType | null
  }

  type GetUser_accountsGroupByPayload<T extends User_accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<User_accountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_accountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_accountsGroupByOutputType[P]>
            : GetScalarType<T[P], User_accountsGroupByOutputType[P]>
        }
      >
    >


  export type user_accountsSelect = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    account_type?: boolean
    incoming_server?: boolean
    outgoing_server?: boolean
    emails?: boolean | user_accounts$emailsArgs
    _count?: boolean | User_accountsCountOutputTypeArgs
  }


  export type user_accountsInclude = {
    emails?: boolean | user_accounts$emailsArgs
    _count?: boolean | User_accountsCountOutputTypeArgs
  }

  export type user_accountsGetPayload<S extends boolean | null | undefined | user_accountsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? user_accounts :
    S extends undefined ? never :
    S extends { include: any } & (user_accountsArgs | user_accountsFindManyArgs)
    ? user_accounts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'emails' ? Array < emailGetPayload<S['include'][P]>>  :
        P extends '_count' ? User_accountsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (user_accountsArgs | user_accountsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'emails' ? Array < emailGetPayload<S['select'][P]>>  :
        P extends '_count' ? User_accountsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof user_accounts ? user_accounts[P] : never
  } 
      : user_accounts


  type user_accountsCountArgs = 
    Omit<user_accountsFindManyArgs, 'select' | 'include'> & {
      select?: User_accountsCountAggregateInputType | true
    }

  export interface user_accountsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User_accounts that matches the filter.
     * @param {user_accountsFindUniqueArgs} args - Arguments to find a User_accounts
     * @example
     * // Get one User_accounts
     * const user_accounts = await prisma.user_accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends user_accountsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, user_accountsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'user_accounts'> extends True ? Prisma__user_accountsClient<user_accountsGetPayload<T>> : Prisma__user_accountsClient<user_accountsGetPayload<T> | null, null>

    /**
     * Find one User_accounts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {user_accountsFindUniqueOrThrowArgs} args - Arguments to find a User_accounts
     * @example
     * // Get one User_accounts
     * const user_accounts = await prisma.user_accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends user_accountsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, user_accountsFindUniqueOrThrowArgs>
    ): Prisma__user_accountsClient<user_accountsGetPayload<T>>

    /**
     * Find the first User_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountsFindFirstArgs} args - Arguments to find a User_accounts
     * @example
     * // Get one User_accounts
     * const user_accounts = await prisma.user_accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends user_accountsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, user_accountsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'user_accounts'> extends True ? Prisma__user_accountsClient<user_accountsGetPayload<T>> : Prisma__user_accountsClient<user_accountsGetPayload<T> | null, null>

    /**
     * Find the first User_accounts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountsFindFirstOrThrowArgs} args - Arguments to find a User_accounts
     * @example
     * // Get one User_accounts
     * const user_accounts = await prisma.user_accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends user_accountsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, user_accountsFindFirstOrThrowArgs>
    ): Prisma__user_accountsClient<user_accountsGetPayload<T>>

    /**
     * Find zero or more User_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_accounts
     * const user_accounts = await prisma.user_accounts.findMany()
     * 
     * // Get first 10 User_accounts
     * const user_accounts = await prisma.user_accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_accountsWithIdOnly = await prisma.user_accounts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends user_accountsFindManyArgs>(
      args?: SelectSubset<T, user_accountsFindManyArgs>
    ): Prisma.PrismaPromise<Array<user_accountsGetPayload<T>>>

    /**
     * Create a User_accounts.
     * @param {user_accountsCreateArgs} args - Arguments to create a User_accounts.
     * @example
     * // Create one User_accounts
     * const User_accounts = await prisma.user_accounts.create({
     *   data: {
     *     // ... data to create a User_accounts
     *   }
     * })
     * 
    **/
    create<T extends user_accountsCreateArgs>(
      args: SelectSubset<T, user_accountsCreateArgs>
    ): Prisma__user_accountsClient<user_accountsGetPayload<T>>

    /**
     * Delete a User_accounts.
     * @param {user_accountsDeleteArgs} args - Arguments to delete one User_accounts.
     * @example
     * // Delete one User_accounts
     * const User_accounts = await prisma.user_accounts.delete({
     *   where: {
     *     // ... filter to delete one User_accounts
     *   }
     * })
     * 
    **/
    delete<T extends user_accountsDeleteArgs>(
      args: SelectSubset<T, user_accountsDeleteArgs>
    ): Prisma__user_accountsClient<user_accountsGetPayload<T>>

    /**
     * Update one User_accounts.
     * @param {user_accountsUpdateArgs} args - Arguments to update one User_accounts.
     * @example
     * // Update one User_accounts
     * const user_accounts = await prisma.user_accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends user_accountsUpdateArgs>(
      args: SelectSubset<T, user_accountsUpdateArgs>
    ): Prisma__user_accountsClient<user_accountsGetPayload<T>>

    /**
     * Delete zero or more User_accounts.
     * @param {user_accountsDeleteManyArgs} args - Arguments to filter User_accounts to delete.
     * @example
     * // Delete a few User_accounts
     * const { count } = await prisma.user_accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends user_accountsDeleteManyArgs>(
      args?: SelectSubset<T, user_accountsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_accounts
     * const user_accounts = await prisma.user_accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends user_accountsUpdateManyArgs>(
      args: SelectSubset<T, user_accountsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_accounts.
     * @param {user_accountsUpsertArgs} args - Arguments to update or create a User_accounts.
     * @example
     * // Update or create a User_accounts
     * const user_accounts = await prisma.user_accounts.upsert({
     *   create: {
     *     // ... data to create a User_accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_accounts we want to update
     *   }
     * })
    **/
    upsert<T extends user_accountsUpsertArgs>(
      args: SelectSubset<T, user_accountsUpsertArgs>
    ): Prisma__user_accountsClient<user_accountsGetPayload<T>>

    /**
     * Count the number of User_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_accountsCountArgs} args - Arguments to filter User_accounts to count.
     * @example
     * // Count the number of User_accounts
     * const count = await prisma.user_accounts.count({
     *   where: {
     *     // ... the filter for the User_accounts we want to count
     *   }
     * })
    **/
    count<T extends user_accountsCountArgs>(
      args?: Subset<T, user_accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_accountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_accountsAggregateArgs>(args: Subset<T, User_accountsAggregateArgs>): Prisma.PrismaPromise<GetUser_accountsAggregateType<T>>

    /**
     * Group by User_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_accountsGroupByArgs['orderBy'] }
        : { orderBy?: User_accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_accountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for user_accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__user_accountsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    emails<T extends user_accounts$emailsArgs= {}>(args?: Subset<T, user_accounts$emailsArgs>): Prisma.PrismaPromise<Array<emailGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * user_accounts base type for findUnique actions
   */
  export type user_accountsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * Filter, which user_accounts to fetch.
     */
    where: user_accountsWhereUniqueInput
  }

  /**
   * user_accounts findUnique
   */
  export interface user_accountsFindUniqueArgs extends user_accountsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_accounts findUniqueOrThrow
   */
  export type user_accountsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * Filter, which user_accounts to fetch.
     */
    where: user_accountsWhereUniqueInput
  }


  /**
   * user_accounts base type for findFirst actions
   */
  export type user_accountsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * Filter, which user_accounts to fetch.
     */
    where?: user_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_accounts to fetch.
     */
    orderBy?: Enumerable<user_accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_accounts.
     */
    cursor?: user_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_accounts.
     */
    distinct?: Enumerable<User_accountsScalarFieldEnum>
  }

  /**
   * user_accounts findFirst
   */
  export interface user_accountsFindFirstArgs extends user_accountsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * user_accounts findFirstOrThrow
   */
  export type user_accountsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * Filter, which user_accounts to fetch.
     */
    where?: user_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_accounts to fetch.
     */
    orderBy?: Enumerable<user_accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_accounts.
     */
    cursor?: user_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_accounts.
     */
    distinct?: Enumerable<User_accountsScalarFieldEnum>
  }


  /**
   * user_accounts findMany
   */
  export type user_accountsFindManyArgs = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * Filter, which user_accounts to fetch.
     */
    where?: user_accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_accounts to fetch.
     */
    orderBy?: Enumerable<user_accountsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_accounts.
     */
    cursor?: user_accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_accounts.
     */
    skip?: number
    distinct?: Enumerable<User_accountsScalarFieldEnum>
  }


  /**
   * user_accounts create
   */
  export type user_accountsCreateArgs = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * The data needed to create a user_accounts.
     */
    data: XOR<user_accountsCreateInput, user_accountsUncheckedCreateInput>
  }


  /**
   * user_accounts update
   */
  export type user_accountsUpdateArgs = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * The data needed to update a user_accounts.
     */
    data: XOR<user_accountsUpdateInput, user_accountsUncheckedUpdateInput>
    /**
     * Choose, which user_accounts to update.
     */
    where: user_accountsWhereUniqueInput
  }


  /**
   * user_accounts updateMany
   */
  export type user_accountsUpdateManyArgs = {
    /**
     * The data used to update user_accounts.
     */
    data: XOR<user_accountsUpdateManyMutationInput, user_accountsUncheckedUpdateManyInput>
    /**
     * Filter which user_accounts to update
     */
    where?: user_accountsWhereInput
  }


  /**
   * user_accounts upsert
   */
  export type user_accountsUpsertArgs = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * The filter to search for the user_accounts to update in case it exists.
     */
    where: user_accountsWhereUniqueInput
    /**
     * In case the user_accounts found by the `where` argument doesn't exist, create a new user_accounts with this data.
     */
    create: XOR<user_accountsCreateInput, user_accountsUncheckedCreateInput>
    /**
     * In case the user_accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_accountsUpdateInput, user_accountsUncheckedUpdateInput>
  }


  /**
   * user_accounts delete
   */
  export type user_accountsDeleteArgs = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
    /**
     * Filter which user_accounts to delete.
     */
    where: user_accountsWhereUniqueInput
  }


  /**
   * user_accounts deleteMany
   */
  export type user_accountsDeleteManyArgs = {
    /**
     * Filter which user_accounts to delete
     */
    where?: user_accountsWhereInput
  }


  /**
   * user_accounts.emails
   */
  export type user_accounts$emailsArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    where?: emailWhereInput
    orderBy?: Enumerable<emailOrderByWithRelationInput>
    cursor?: emailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EmailScalarFieldEnum>
  }


  /**
   * user_accounts without action
   */
  export type user_accountsArgs = {
    /**
     * Select specific fields to fetch from the user_accounts
     */
    select?: user_accountsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_accountsInclude | null
  }



  /**
   * Model email
   */


  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailAvgAggregateOutputType = {
    id: number | null
    sender_id: number | null
  }

  export type EmailSumAggregateOutputType = {
    id: number | null
    sender_id: number | null
  }

  export type EmailMinAggregateOutputType = {
    id: number | null
    sender_id: number | null
    recipient: string | null
    subject: string | null
    body: string | null
    timestamp: Date | null
    is_read: boolean | null
  }

  export type EmailMaxAggregateOutputType = {
    id: number | null
    sender_id: number | null
    recipient: string | null
    subject: string | null
    body: string | null
    timestamp: Date | null
    is_read: boolean | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    sender_id: number
    recipient: number
    subject: number
    body: number
    timestamp: number
    is_read: number
    _all: number
  }


  export type EmailAvgAggregateInputType = {
    id?: true
    sender_id?: true
  }

  export type EmailSumAggregateInputType = {
    id?: true
    sender_id?: true
  }

  export type EmailMinAggregateInputType = {
    id?: true
    sender_id?: true
    recipient?: true
    subject?: true
    body?: true
    timestamp?: true
    is_read?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    sender_id?: true
    recipient?: true
    subject?: true
    body?: true
    timestamp?: true
    is_read?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    sender_id?: true
    recipient?: true
    subject?: true
    body?: true
    timestamp?: true
    is_read?: true
    _all?: true
  }

  export type EmailAggregateArgs = {
    /**
     * Filter which email to aggregate.
     */
    where?: emailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: Enumerable<emailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: emailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs = {
    where?: emailWhereInput
    orderBy?: Enumerable<emailOrderByWithAggregationInput>
    by: EmailScalarFieldEnum[]
    having?: emailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _avg?: EmailAvgAggregateInputType
    _sum?: EmailSumAggregateInputType
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }


  export type EmailGroupByOutputType = {
    id: number
    sender_id: number
    recipient: string
    subject: string
    body: string
    timestamp: Date
    is_read: boolean
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type emailSelect = {
    id?: boolean
    sender_id?: boolean
    recipient?: boolean
    subject?: boolean
    body?: boolean
    timestamp?: boolean
    is_read?: boolean
    sender?: boolean | user_accountsArgs
    attachments?: boolean | email$attachmentsArgs
    _count?: boolean | EmailCountOutputTypeArgs
  }


  export type emailInclude = {
    sender?: boolean | user_accountsArgs
    attachments?: boolean | email$attachmentsArgs
    _count?: boolean | EmailCountOutputTypeArgs
  }

  export type emailGetPayload<S extends boolean | null | undefined | emailArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? email :
    S extends undefined ? never :
    S extends { include: any } & (emailArgs | emailFindManyArgs)
    ? email  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sender' ? user_accountsGetPayload<S['include'][P]> :
        P extends 'attachments' ? Array < attachmentsGetPayload<S['include'][P]>>  :
        P extends '_count' ? EmailCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (emailArgs | emailFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sender' ? user_accountsGetPayload<S['select'][P]> :
        P extends 'attachments' ? Array < attachmentsGetPayload<S['select'][P]>>  :
        P extends '_count' ? EmailCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof email ? email[P] : never
  } 
      : email


  type emailCountArgs = 
    Omit<emailFindManyArgs, 'select' | 'include'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface emailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Email that matches the filter.
     * @param {emailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends emailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, emailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'email'> extends True ? Prisma__emailClient<emailGetPayload<T>> : Prisma__emailClient<emailGetPayload<T> | null, null>

    /**
     * Find one Email that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {emailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends emailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, emailFindUniqueOrThrowArgs>
    ): Prisma__emailClient<emailGetPayload<T>>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends emailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, emailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'email'> extends True ? Prisma__emailClient<emailGetPayload<T>> : Prisma__emailClient<emailGetPayload<T> | null, null>

    /**
     * Find the first Email that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends emailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, emailFindFirstOrThrowArgs>
    ): Prisma__emailClient<emailGetPayload<T>>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends emailFindManyArgs>(
      args?: SelectSubset<T, emailFindManyArgs>
    ): Prisma.PrismaPromise<Array<emailGetPayload<T>>>

    /**
     * Create a Email.
     * @param {emailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
    **/
    create<T extends emailCreateArgs>(
      args: SelectSubset<T, emailCreateArgs>
    ): Prisma__emailClient<emailGetPayload<T>>

    /**
     * Delete a Email.
     * @param {emailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
    **/
    delete<T extends emailDeleteArgs>(
      args: SelectSubset<T, emailDeleteArgs>
    ): Prisma__emailClient<emailGetPayload<T>>

    /**
     * Update one Email.
     * @param {emailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends emailUpdateArgs>(
      args: SelectSubset<T, emailUpdateArgs>
    ): Prisma__emailClient<emailGetPayload<T>>

    /**
     * Delete zero or more Emails.
     * @param {emailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends emailDeleteManyArgs>(
      args?: SelectSubset<T, emailDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends emailUpdateManyArgs>(
      args: SelectSubset<T, emailUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Email.
     * @param {emailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
    **/
    upsert<T extends emailUpsertArgs>(
      args: SelectSubset<T, emailUpsertArgs>
    ): Prisma__emailClient<emailGetPayload<T>>

    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends emailCountArgs>(
      args?: Subset<T, emailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__emailClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sender<T extends user_accountsArgs= {}>(args?: Subset<T, user_accountsArgs>): Prisma__user_accountsClient<user_accountsGetPayload<T> | Null>;

    attachments<T extends email$attachmentsArgs= {}>(args?: Subset<T, email$attachmentsArgs>): Prisma.PrismaPromise<Array<attachmentsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * email base type for findUnique actions
   */
  export type emailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * Filter, which email to fetch.
     */
    where: emailWhereUniqueInput
  }

  /**
   * email findUnique
   */
  export interface emailFindUniqueArgs extends emailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * email findUniqueOrThrow
   */
  export type emailFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * Filter, which email to fetch.
     */
    where: emailWhereUniqueInput
  }


  /**
   * email base type for findFirst actions
   */
  export type emailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * Filter, which email to fetch.
     */
    where?: emailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: Enumerable<emailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emails.
     */
    cursor?: emailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emails.
     */
    distinct?: Enumerable<EmailScalarFieldEnum>
  }

  /**
   * email findFirst
   */
  export interface emailFindFirstArgs extends emailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * email findFirstOrThrow
   */
  export type emailFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * Filter, which email to fetch.
     */
    where?: emailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: Enumerable<emailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emails.
     */
    cursor?: emailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emails.
     */
    distinct?: Enumerable<EmailScalarFieldEnum>
  }


  /**
   * email findMany
   */
  export type emailFindManyArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * Filter, which emails to fetch.
     */
    where?: emailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: Enumerable<emailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing emails.
     */
    cursor?: emailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    distinct?: Enumerable<EmailScalarFieldEnum>
  }


  /**
   * email create
   */
  export type emailCreateArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * The data needed to create a email.
     */
    data: XOR<emailCreateInput, emailUncheckedCreateInput>
  }


  /**
   * email update
   */
  export type emailUpdateArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * The data needed to update a email.
     */
    data: XOR<emailUpdateInput, emailUncheckedUpdateInput>
    /**
     * Choose, which email to update.
     */
    where: emailWhereUniqueInput
  }


  /**
   * email updateMany
   */
  export type emailUpdateManyArgs = {
    /**
     * The data used to update emails.
     */
    data: XOR<emailUpdateManyMutationInput, emailUncheckedUpdateManyInput>
    /**
     * Filter which emails to update
     */
    where?: emailWhereInput
  }


  /**
   * email upsert
   */
  export type emailUpsertArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * The filter to search for the email to update in case it exists.
     */
    where: emailWhereUniqueInput
    /**
     * In case the email found by the `where` argument doesn't exist, create a new email with this data.
     */
    create: XOR<emailCreateInput, emailUncheckedCreateInput>
    /**
     * In case the email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<emailUpdateInput, emailUncheckedUpdateInput>
  }


  /**
   * email delete
   */
  export type emailDeleteArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
    /**
     * Filter which email to delete.
     */
    where: emailWhereUniqueInput
  }


  /**
   * email deleteMany
   */
  export type emailDeleteManyArgs = {
    /**
     * Filter which emails to delete
     */
    where?: emailWhereInput
  }


  /**
   * email.attachments
   */
  export type email$attachmentsArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    where?: attachmentsWhereInput
    orderBy?: Enumerable<attachmentsOrderByWithRelationInput>
    cursor?: attachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AttachmentsScalarFieldEnum>
  }


  /**
   * email without action
   */
  export type emailArgs = {
    /**
     * Select specific fields to fetch from the email
     */
    select?: emailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: emailInclude | null
  }



  /**
   * Model attachments
   */


  export type AggregateAttachments = {
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  export type AttachmentsAvgAggregateOutputType = {
    id: number | null
    email_id: number | null
  }

  export type AttachmentsSumAggregateOutputType = {
    id: number | null
    email_id: number | null
  }

  export type AttachmentsMinAggregateOutputType = {
    id: number | null
    email_id: number | null
    file_name: string | null
    file_type: string | null
    file_size: string | null
    file_contents: Buffer | null
  }

  export type AttachmentsMaxAggregateOutputType = {
    id: number | null
    email_id: number | null
    file_name: string | null
    file_type: string | null
    file_size: string | null
    file_contents: Buffer | null
  }

  export type AttachmentsCountAggregateOutputType = {
    id: number
    email_id: number
    file_name: number
    file_type: number
    file_size: number
    file_contents: number
    _all: number
  }


  export type AttachmentsAvgAggregateInputType = {
    id?: true
    email_id?: true
  }

  export type AttachmentsSumAggregateInputType = {
    id?: true
    email_id?: true
  }

  export type AttachmentsMinAggregateInputType = {
    id?: true
    email_id?: true
    file_name?: true
    file_type?: true
    file_size?: true
    file_contents?: true
  }

  export type AttachmentsMaxAggregateInputType = {
    id?: true
    email_id?: true
    file_name?: true
    file_type?: true
    file_size?: true
    file_contents?: true
  }

  export type AttachmentsCountAggregateInputType = {
    id?: true
    email_id?: true
    file_name?: true
    file_type?: true
    file_size?: true
    file_contents?: true
    _all?: true
  }

  export type AttachmentsAggregateArgs = {
    /**
     * Filter which attachments to aggregate.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: Enumerable<attachmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attachments
    **/
    _count?: true | AttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentsMaxAggregateInputType
  }

  export type GetAttachmentsAggregateType<T extends AttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachments[P]>
      : GetScalarType<T[P], AggregateAttachments[P]>
  }




  export type AttachmentsGroupByArgs = {
    where?: attachmentsWhereInput
    orderBy?: Enumerable<attachmentsOrderByWithAggregationInput>
    by: AttachmentsScalarFieldEnum[]
    having?: attachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentsCountAggregateInputType | true
    _avg?: AttachmentsAvgAggregateInputType
    _sum?: AttachmentsSumAggregateInputType
    _min?: AttachmentsMinAggregateInputType
    _max?: AttachmentsMaxAggregateInputType
  }


  export type AttachmentsGroupByOutputType = {
    id: number
    email_id: number
    file_name: string
    file_type: string
    file_size: string
    file_contents: Buffer
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  type GetAttachmentsGroupByPayload<T extends AttachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type attachmentsSelect = {
    id?: boolean
    email_id?: boolean
    file_name?: boolean
    file_type?: boolean
    file_size?: boolean
    file_contents?: boolean
    email?: boolean | emailArgs
  }


  export type attachmentsInclude = {
    email?: boolean | emailArgs
  }

  export type attachmentsGetPayload<S extends boolean | null | undefined | attachmentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? attachments :
    S extends undefined ? never :
    S extends { include: any } & (attachmentsArgs | attachmentsFindManyArgs)
    ? attachments  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'email' ? emailGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (attachmentsArgs | attachmentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'email' ? emailGetPayload<S['select'][P]> :  P extends keyof attachments ? attachments[P] : never
  } 
      : attachments


  type attachmentsCountArgs = 
    Omit<attachmentsFindManyArgs, 'select' | 'include'> & {
      select?: AttachmentsCountAggregateInputType | true
    }

  export interface attachmentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Attachments that matches the filter.
     * @param {attachmentsFindUniqueArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends attachmentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, attachmentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'attachments'> extends True ? Prisma__attachmentsClient<attachmentsGetPayload<T>> : Prisma__attachmentsClient<attachmentsGetPayload<T> | null, null>

    /**
     * Find one Attachments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {attachmentsFindUniqueOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends attachmentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, attachmentsFindUniqueOrThrowArgs>
    ): Prisma__attachmentsClient<attachmentsGetPayload<T>>

    /**
     * Find the first Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindFirstArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends attachmentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, attachmentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'attachments'> extends True ? Prisma__attachmentsClient<attachmentsGetPayload<T>> : Prisma__attachmentsClient<attachmentsGetPayload<T> | null, null>

    /**
     * Find the first Attachments that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindFirstOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends attachmentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, attachmentsFindFirstOrThrowArgs>
    ): Prisma__attachmentsClient<attachmentsGetPayload<T>>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachments.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends attachmentsFindManyArgs>(
      args?: SelectSubset<T, attachmentsFindManyArgs>
    ): Prisma.PrismaPromise<Array<attachmentsGetPayload<T>>>

    /**
     * Create a Attachments.
     * @param {attachmentsCreateArgs} args - Arguments to create a Attachments.
     * @example
     * // Create one Attachments
     * const Attachments = await prisma.attachments.create({
     *   data: {
     *     // ... data to create a Attachments
     *   }
     * })
     * 
    **/
    create<T extends attachmentsCreateArgs>(
      args: SelectSubset<T, attachmentsCreateArgs>
    ): Prisma__attachmentsClient<attachmentsGetPayload<T>>

    /**
     * Delete a Attachments.
     * @param {attachmentsDeleteArgs} args - Arguments to delete one Attachments.
     * @example
     * // Delete one Attachments
     * const Attachments = await prisma.attachments.delete({
     *   where: {
     *     // ... filter to delete one Attachments
     *   }
     * })
     * 
    **/
    delete<T extends attachmentsDeleteArgs>(
      args: SelectSubset<T, attachmentsDeleteArgs>
    ): Prisma__attachmentsClient<attachmentsGetPayload<T>>

    /**
     * Update one Attachments.
     * @param {attachmentsUpdateArgs} args - Arguments to update one Attachments.
     * @example
     * // Update one Attachments
     * const attachments = await prisma.attachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends attachmentsUpdateArgs>(
      args: SelectSubset<T, attachmentsUpdateArgs>
    ): Prisma__attachmentsClient<attachmentsGetPayload<T>>

    /**
     * Delete zero or more Attachments.
     * @param {attachmentsDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends attachmentsDeleteManyArgs>(
      args?: SelectSubset<T, attachmentsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends attachmentsUpdateManyArgs>(
      args: SelectSubset<T, attachmentsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachments.
     * @param {attachmentsUpsertArgs} args - Arguments to update or create a Attachments.
     * @example
     * // Update or create a Attachments
     * const attachments = await prisma.attachments.upsert({
     *   create: {
     *     // ... data to create a Attachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachments we want to update
     *   }
     * })
    **/
    upsert<T extends attachmentsUpsertArgs>(
      args: SelectSubset<T, attachmentsUpsertArgs>
    ): Prisma__attachmentsClient<attachmentsGetPayload<T>>

    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attachmentsCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachments.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends attachmentsCountArgs>(
      args?: Subset<T, attachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentsAggregateArgs>(args: Subset<T, AttachmentsAggregateArgs>): Prisma.PrismaPromise<GetAttachmentsAggregateType<T>>

    /**
     * Group by Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentsGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for attachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__attachmentsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    email<T extends emailArgs= {}>(args?: Subset<T, emailArgs>): Prisma__emailClient<emailGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * attachments base type for findUnique actions
   */
  export type attachmentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * Filter, which attachments to fetch.
     */
    where: attachmentsWhereUniqueInput
  }

  /**
   * attachments findUnique
   */
  export interface attachmentsFindUniqueArgs extends attachmentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * attachments findUniqueOrThrow
   */
  export type attachmentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * Filter, which attachments to fetch.
     */
    where: attachmentsWhereUniqueInput
  }


  /**
   * attachments base type for findFirst actions
   */
  export type attachmentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: Enumerable<attachmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: Enumerable<AttachmentsScalarFieldEnum>
  }

  /**
   * attachments findFirst
   */
  export interface attachmentsFindFirstArgs extends attachmentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * attachments findFirstOrThrow
   */
  export type attachmentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: Enumerable<attachmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attachments.
     */
    distinct?: Enumerable<AttachmentsScalarFieldEnum>
  }


  /**
   * attachments findMany
   */
  export type attachmentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * Filter, which attachments to fetch.
     */
    where?: attachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attachments to fetch.
     */
    orderBy?: Enumerable<attachmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attachments.
     */
    cursor?: attachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attachments.
     */
    skip?: number
    distinct?: Enumerable<AttachmentsScalarFieldEnum>
  }


  /**
   * attachments create
   */
  export type attachmentsCreateArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * The data needed to create a attachments.
     */
    data: XOR<attachmentsCreateInput, attachmentsUncheckedCreateInput>
  }


  /**
   * attachments update
   */
  export type attachmentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * The data needed to update a attachments.
     */
    data: XOR<attachmentsUpdateInput, attachmentsUncheckedUpdateInput>
    /**
     * Choose, which attachments to update.
     */
    where: attachmentsWhereUniqueInput
  }


  /**
   * attachments updateMany
   */
  export type attachmentsUpdateManyArgs = {
    /**
     * The data used to update attachments.
     */
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyInput>
    /**
     * Filter which attachments to update
     */
    where?: attachmentsWhereInput
  }


  /**
   * attachments upsert
   */
  export type attachmentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * The filter to search for the attachments to update in case it exists.
     */
    where: attachmentsWhereUniqueInput
    /**
     * In case the attachments found by the `where` argument doesn't exist, create a new attachments with this data.
     */
    create: XOR<attachmentsCreateInput, attachmentsUncheckedCreateInput>
    /**
     * In case the attachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attachmentsUpdateInput, attachmentsUncheckedUpdateInput>
  }


  /**
   * attachments delete
   */
  export type attachmentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
    /**
     * Filter which attachments to delete.
     */
    where: attachmentsWhereUniqueInput
  }


  /**
   * attachments deleteMany
   */
  export type attachmentsDeleteManyArgs = {
    /**
     * Filter which attachments to delete
     */
    where?: attachmentsWhereInput
  }


  /**
   * attachments without action
   */
  export type attachmentsArgs = {
    /**
     * Select specific fields to fetch from the attachments
     */
    select?: attachmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attachmentsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AttachmentsScalarFieldEnum: {
    id: 'id',
    email_id: 'email_id',
    file_name: 'file_name',
    file_type: 'file_type',
    file_size: 'file_size',
    file_contents: 'file_contents'
  };

  export type AttachmentsScalarFieldEnum = (typeof AttachmentsScalarFieldEnum)[keyof typeof AttachmentsScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    sender_id: 'sender_id',
    recipient: 'recipient',
    subject: 'subject',
    body: 'body',
    timestamp: 'timestamp',
    is_read: 'is_read'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_accountsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    account_type: 'account_type',
    incoming_server: 'incoming_server',
    outgoing_server: 'outgoing_server'
  };

  export type User_accountsScalarFieldEnum = (typeof User_accountsScalarFieldEnum)[keyof typeof User_accountsScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type user_accountsWhereInput = {
    AND?: Enumerable<user_accountsWhereInput>
    OR?: Enumerable<user_accountsWhereInput>
    NOT?: Enumerable<user_accountsWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    account_type?: StringNullableFilter | string | null
    incoming_server?: StringNullableFilter | string | null
    outgoing_server?: StringNullableFilter | string | null
    emails?: EmailListRelationFilter
  }

  export type user_accountsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    account_type?: SortOrder
    incoming_server?: SortOrder
    outgoing_server?: SortOrder
    emails?: emailOrderByRelationAggregateInput
  }

  export type user_accountsWhereUniqueInput = {
    id?: number
    username?: string
  }

  export type user_accountsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    account_type?: SortOrder
    incoming_server?: SortOrder
    outgoing_server?: SortOrder
    _count?: user_accountsCountOrderByAggregateInput
    _avg?: user_accountsAvgOrderByAggregateInput
    _max?: user_accountsMaxOrderByAggregateInput
    _min?: user_accountsMinOrderByAggregateInput
    _sum?: user_accountsSumOrderByAggregateInput
  }

  export type user_accountsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<user_accountsScalarWhereWithAggregatesInput>
    OR?: Enumerable<user_accountsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<user_accountsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    account_type?: StringNullableWithAggregatesFilter | string | null
    incoming_server?: StringNullableWithAggregatesFilter | string | null
    outgoing_server?: StringNullableWithAggregatesFilter | string | null
  }

  export type emailWhereInput = {
    AND?: Enumerable<emailWhereInput>
    OR?: Enumerable<emailWhereInput>
    NOT?: Enumerable<emailWhereInput>
    id?: IntFilter | number
    sender_id?: IntFilter | number
    recipient?: StringFilter | string
    subject?: StringFilter | string
    body?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    is_read?: BoolFilter | boolean
    sender?: XOR<User_accountsRelationFilter, user_accountsWhereInput>
    attachments?: AttachmentsListRelationFilter
  }

  export type emailOrderByWithRelationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    is_read?: SortOrder
    sender?: user_accountsOrderByWithRelationInput
    attachments?: attachmentsOrderByRelationAggregateInput
  }

  export type emailWhereUniqueInput = {
    id?: number
  }

  export type emailOrderByWithAggregationInput = {
    id?: SortOrder
    sender_id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    is_read?: SortOrder
    _count?: emailCountOrderByAggregateInput
    _avg?: emailAvgOrderByAggregateInput
    _max?: emailMaxOrderByAggregateInput
    _min?: emailMinOrderByAggregateInput
    _sum?: emailSumOrderByAggregateInput
  }

  export type emailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<emailScalarWhereWithAggregatesInput>
    OR?: Enumerable<emailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<emailScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    sender_id?: IntWithAggregatesFilter | number
    recipient?: StringWithAggregatesFilter | string
    subject?: StringWithAggregatesFilter | string
    body?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    is_read?: BoolWithAggregatesFilter | boolean
  }

  export type attachmentsWhereInput = {
    AND?: Enumerable<attachmentsWhereInput>
    OR?: Enumerable<attachmentsWhereInput>
    NOT?: Enumerable<attachmentsWhereInput>
    id?: IntFilter | number
    email_id?: IntFilter | number
    file_name?: StringFilter | string
    file_type?: StringFilter | string
    file_size?: StringFilter | string
    file_contents?: BytesFilter | Buffer
    email?: XOR<EmailRelationFilter, emailWhereInput>
  }

  export type attachmentsOrderByWithRelationInput = {
    id?: SortOrder
    email_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    file_contents?: SortOrder
    email?: emailOrderByWithRelationInput
  }

  export type attachmentsWhereUniqueInput = {
    id?: number
  }

  export type attachmentsOrderByWithAggregationInput = {
    id?: SortOrder
    email_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    file_contents?: SortOrder
    _count?: attachmentsCountOrderByAggregateInput
    _avg?: attachmentsAvgOrderByAggregateInput
    _max?: attachmentsMaxOrderByAggregateInput
    _min?: attachmentsMinOrderByAggregateInput
    _sum?: attachmentsSumOrderByAggregateInput
  }

  export type attachmentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<attachmentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<attachmentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<attachmentsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email_id?: IntWithAggregatesFilter | number
    file_name?: StringWithAggregatesFilter | string
    file_type?: StringWithAggregatesFilter | string
    file_size?: StringWithAggregatesFilter | string
    file_contents?: BytesWithAggregatesFilter | Buffer
  }

  export type user_accountsCreateInput = {
    email: string
    username: string
    password: string
    account_type?: string | null
    incoming_server?: string | null
    outgoing_server?: string | null
    emails?: emailCreateNestedManyWithoutSenderInput
  }

  export type user_accountsUncheckedCreateInput = {
    id?: number
    email: string
    username: string
    password: string
    account_type?: string | null
    incoming_server?: string | null
    outgoing_server?: string | null
    emails?: emailUncheckedCreateNestedManyWithoutSenderInput
  }

  export type user_accountsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    incoming_server?: NullableStringFieldUpdateOperationsInput | string | null
    outgoing_server?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: emailUpdateManyWithoutSenderNestedInput
  }

  export type user_accountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    incoming_server?: NullableStringFieldUpdateOperationsInput | string | null
    outgoing_server?: NullableStringFieldUpdateOperationsInput | string | null
    emails?: emailUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type user_accountsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    incoming_server?: NullableStringFieldUpdateOperationsInput | string | null
    outgoing_server?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_accountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    incoming_server?: NullableStringFieldUpdateOperationsInput | string | null
    outgoing_server?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type emailCreateInput = {
    recipient: string
    subject: string
    body: string
    timestamp: Date | string
    is_read: boolean
    sender: user_accountsCreateNestedOneWithoutEmailsInput
    attachments?: attachmentsCreateNestedManyWithoutEmailInput
  }

  export type emailUncheckedCreateInput = {
    id?: number
    sender_id: number
    recipient: string
    subject: string
    body: string
    timestamp: Date | string
    is_read: boolean
    attachments?: attachmentsUncheckedCreateNestedManyWithoutEmailInput
  }

  export type emailUpdateInput = {
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    sender?: user_accountsUpdateOneRequiredWithoutEmailsNestedInput
    attachments?: attachmentsUpdateManyWithoutEmailNestedInput
  }

  export type emailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    attachments?: attachmentsUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type emailUpdateManyMutationInput = {
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type emailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attachmentsCreateInput = {
    file_name: string
    file_type: string
    file_size: string
    file_contents: Buffer
    email: emailCreateNestedOneWithoutAttachmentsInput
  }

  export type attachmentsUncheckedCreateInput = {
    id?: number
    email_id: number
    file_name: string
    file_type: string
    file_size: string
    file_contents: Buffer
  }

  export type attachmentsUpdateInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: StringFieldUpdateOperationsInput | string
    file_contents?: BytesFieldUpdateOperationsInput | Buffer
    email?: emailUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type attachmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: StringFieldUpdateOperationsInput | string
    file_contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type attachmentsUpdateManyMutationInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: StringFieldUpdateOperationsInput | string
    file_contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type attachmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: StringFieldUpdateOperationsInput | string
    file_contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type EmailListRelationFilter = {
    every?: emailWhereInput
    some?: emailWhereInput
    none?: emailWhereInput
  }

  export type emailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_accountsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    account_type?: SortOrder
    incoming_server?: SortOrder
    outgoing_server?: SortOrder
  }

  export type user_accountsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type user_accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    account_type?: SortOrder
    incoming_server?: SortOrder
    outgoing_server?: SortOrder
  }

  export type user_accountsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    account_type?: SortOrder
    incoming_server?: SortOrder
    outgoing_server?: SortOrder
  }

  export type user_accountsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type User_accountsRelationFilter = {
    is?: user_accountsWhereInput
    isNot?: user_accountsWhereInput
  }

  export type AttachmentsListRelationFilter = {
    every?: attachmentsWhereInput
    some?: attachmentsWhereInput
    none?: attachmentsWhereInput
  }

  export type attachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type emailCountOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    is_read?: SortOrder
  }

  export type emailAvgOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
  }

  export type emailMaxOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    is_read?: SortOrder
  }

  export type emailMinOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
    recipient?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    timestamp?: SortOrder
    is_read?: SortOrder
  }

  export type emailSumOrderByAggregateInput = {
    id?: SortOrder
    sender_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type BytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type EmailRelationFilter = {
    is?: emailWhereInput
    isNot?: emailWhereInput
  }

  export type attachmentsCountOrderByAggregateInput = {
    id?: SortOrder
    email_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    file_contents?: SortOrder
  }

  export type attachmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    email_id?: SortOrder
  }

  export type attachmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    email_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    file_contents?: SortOrder
  }

  export type attachmentsMinOrderByAggregateInput = {
    id?: SortOrder
    email_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_size?: SortOrder
    file_contents?: SortOrder
  }

  export type attachmentsSumOrderByAggregateInput = {
    id?: SortOrder
    email_id?: SortOrder
  }

  export type BytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type emailCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<emailCreateWithoutSenderInput>, Enumerable<emailUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<emailCreateOrConnectWithoutSenderInput>
    connect?: Enumerable<emailWhereUniqueInput>
  }

  export type emailUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<Enumerable<emailCreateWithoutSenderInput>, Enumerable<emailUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<emailCreateOrConnectWithoutSenderInput>
    connect?: Enumerable<emailWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type emailUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<emailCreateWithoutSenderInput>, Enumerable<emailUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<emailCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<emailUpsertWithWhereUniqueWithoutSenderInput>
    set?: Enumerable<emailWhereUniqueInput>
    disconnect?: Enumerable<emailWhereUniqueInput>
    delete?: Enumerable<emailWhereUniqueInput>
    connect?: Enumerable<emailWhereUniqueInput>
    update?: Enumerable<emailUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<emailUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<emailScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type emailUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<Enumerable<emailCreateWithoutSenderInput>, Enumerable<emailUncheckedCreateWithoutSenderInput>>
    connectOrCreate?: Enumerable<emailCreateOrConnectWithoutSenderInput>
    upsert?: Enumerable<emailUpsertWithWhereUniqueWithoutSenderInput>
    set?: Enumerable<emailWhereUniqueInput>
    disconnect?: Enumerable<emailWhereUniqueInput>
    delete?: Enumerable<emailWhereUniqueInput>
    connect?: Enumerable<emailWhereUniqueInput>
    update?: Enumerable<emailUpdateWithWhereUniqueWithoutSenderInput>
    updateMany?: Enumerable<emailUpdateManyWithWhereWithoutSenderInput>
    deleteMany?: Enumerable<emailScalarWhereInput>
  }

  export type user_accountsCreateNestedOneWithoutEmailsInput = {
    create?: XOR<user_accountsCreateWithoutEmailsInput, user_accountsUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: user_accountsCreateOrConnectWithoutEmailsInput
    connect?: user_accountsWhereUniqueInput
  }

  export type attachmentsCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<attachmentsCreateWithoutEmailInput>, Enumerable<attachmentsUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<attachmentsCreateOrConnectWithoutEmailInput>
    connect?: Enumerable<attachmentsWhereUniqueInput>
  }

  export type attachmentsUncheckedCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<attachmentsCreateWithoutEmailInput>, Enumerable<attachmentsUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<attachmentsCreateOrConnectWithoutEmailInput>
    connect?: Enumerable<attachmentsWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type user_accountsUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<user_accountsCreateWithoutEmailsInput, user_accountsUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: user_accountsCreateOrConnectWithoutEmailsInput
    upsert?: user_accountsUpsertWithoutEmailsInput
    connect?: user_accountsWhereUniqueInput
    update?: XOR<user_accountsUpdateWithoutEmailsInput, user_accountsUncheckedUpdateWithoutEmailsInput>
  }

  export type attachmentsUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<attachmentsCreateWithoutEmailInput>, Enumerable<attachmentsUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<attachmentsCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<attachmentsUpsertWithWhereUniqueWithoutEmailInput>
    set?: Enumerable<attachmentsWhereUniqueInput>
    disconnect?: Enumerable<attachmentsWhereUniqueInput>
    delete?: Enumerable<attachmentsWhereUniqueInput>
    connect?: Enumerable<attachmentsWhereUniqueInput>
    update?: Enumerable<attachmentsUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<attachmentsUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<attachmentsScalarWhereInput>
  }

  export type attachmentsUncheckedUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<attachmentsCreateWithoutEmailInput>, Enumerable<attachmentsUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<attachmentsCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<attachmentsUpsertWithWhereUniqueWithoutEmailInput>
    set?: Enumerable<attachmentsWhereUniqueInput>
    disconnect?: Enumerable<attachmentsWhereUniqueInput>
    delete?: Enumerable<attachmentsWhereUniqueInput>
    connect?: Enumerable<attachmentsWhereUniqueInput>
    update?: Enumerable<attachmentsUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<attachmentsUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<attachmentsScalarWhereInput>
  }

  export type emailCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<emailCreateWithoutAttachmentsInput, emailUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: emailCreateOrConnectWithoutAttachmentsInput
    connect?: emailWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type emailUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<emailCreateWithoutAttachmentsInput, emailUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: emailCreateOrConnectWithoutAttachmentsInput
    upsert?: emailUpsertWithoutAttachmentsInput
    connect?: emailWhereUniqueInput
    update?: XOR<emailUpdateWithoutAttachmentsInput, emailUncheckedUpdateWithoutAttachmentsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedBytesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesFilter | Buffer
  }

  export type NestedBytesWithAggregatesFilter = {
    equals?: Buffer
    in?: Enumerable<Buffer>
    notIn?: Enumerable<Buffer>
    not?: NestedBytesWithAggregatesFilter | Buffer
    _count?: NestedIntFilter
    _min?: NestedBytesFilter
    _max?: NestedBytesFilter
  }

  export type emailCreateWithoutSenderInput = {
    recipient: string
    subject: string
    body: string
    timestamp: Date | string
    is_read: boolean
    attachments?: attachmentsCreateNestedManyWithoutEmailInput
  }

  export type emailUncheckedCreateWithoutSenderInput = {
    id?: number
    recipient: string
    subject: string
    body: string
    timestamp: Date | string
    is_read: boolean
    attachments?: attachmentsUncheckedCreateNestedManyWithoutEmailInput
  }

  export type emailCreateOrConnectWithoutSenderInput = {
    where: emailWhereUniqueInput
    create: XOR<emailCreateWithoutSenderInput, emailUncheckedCreateWithoutSenderInput>
  }

  export type emailUpsertWithWhereUniqueWithoutSenderInput = {
    where: emailWhereUniqueInput
    update: XOR<emailUpdateWithoutSenderInput, emailUncheckedUpdateWithoutSenderInput>
    create: XOR<emailCreateWithoutSenderInput, emailUncheckedCreateWithoutSenderInput>
  }

  export type emailUpdateWithWhereUniqueWithoutSenderInput = {
    where: emailWhereUniqueInput
    data: XOR<emailUpdateWithoutSenderInput, emailUncheckedUpdateWithoutSenderInput>
  }

  export type emailUpdateManyWithWhereWithoutSenderInput = {
    where: emailScalarWhereInput
    data: XOR<emailUpdateManyMutationInput, emailUncheckedUpdateManyWithoutEmailsInput>
  }

  export type emailScalarWhereInput = {
    AND?: Enumerable<emailScalarWhereInput>
    OR?: Enumerable<emailScalarWhereInput>
    NOT?: Enumerable<emailScalarWhereInput>
    id?: IntFilter | number
    sender_id?: IntFilter | number
    recipient?: StringFilter | string
    subject?: StringFilter | string
    body?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    is_read?: BoolFilter | boolean
  }

  export type user_accountsCreateWithoutEmailsInput = {
    email: string
    username: string
    password: string
    account_type?: string | null
    incoming_server?: string | null
    outgoing_server?: string | null
  }

  export type user_accountsUncheckedCreateWithoutEmailsInput = {
    id?: number
    email: string
    username: string
    password: string
    account_type?: string | null
    incoming_server?: string | null
    outgoing_server?: string | null
  }

  export type user_accountsCreateOrConnectWithoutEmailsInput = {
    where: user_accountsWhereUniqueInput
    create: XOR<user_accountsCreateWithoutEmailsInput, user_accountsUncheckedCreateWithoutEmailsInput>
  }

  export type attachmentsCreateWithoutEmailInput = {
    file_name: string
    file_type: string
    file_size: string
    file_contents: Buffer
  }

  export type attachmentsUncheckedCreateWithoutEmailInput = {
    id?: number
    file_name: string
    file_type: string
    file_size: string
    file_contents: Buffer
  }

  export type attachmentsCreateOrConnectWithoutEmailInput = {
    where: attachmentsWhereUniqueInput
    create: XOR<attachmentsCreateWithoutEmailInput, attachmentsUncheckedCreateWithoutEmailInput>
  }

  export type user_accountsUpsertWithoutEmailsInput = {
    update: XOR<user_accountsUpdateWithoutEmailsInput, user_accountsUncheckedUpdateWithoutEmailsInput>
    create: XOR<user_accountsCreateWithoutEmailsInput, user_accountsUncheckedCreateWithoutEmailsInput>
  }

  export type user_accountsUpdateWithoutEmailsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    incoming_server?: NullableStringFieldUpdateOperationsInput | string | null
    outgoing_server?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_accountsUncheckedUpdateWithoutEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    incoming_server?: NullableStringFieldUpdateOperationsInput | string | null
    outgoing_server?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attachmentsUpsertWithWhereUniqueWithoutEmailInput = {
    where: attachmentsWhereUniqueInput
    update: XOR<attachmentsUpdateWithoutEmailInput, attachmentsUncheckedUpdateWithoutEmailInput>
    create: XOR<attachmentsCreateWithoutEmailInput, attachmentsUncheckedCreateWithoutEmailInput>
  }

  export type attachmentsUpdateWithWhereUniqueWithoutEmailInput = {
    where: attachmentsWhereUniqueInput
    data: XOR<attachmentsUpdateWithoutEmailInput, attachmentsUncheckedUpdateWithoutEmailInput>
  }

  export type attachmentsUpdateManyWithWhereWithoutEmailInput = {
    where: attachmentsScalarWhereInput
    data: XOR<attachmentsUpdateManyMutationInput, attachmentsUncheckedUpdateManyWithoutAttachmentsInput>
  }

  export type attachmentsScalarWhereInput = {
    AND?: Enumerable<attachmentsScalarWhereInput>
    OR?: Enumerable<attachmentsScalarWhereInput>
    NOT?: Enumerable<attachmentsScalarWhereInput>
    id?: IntFilter | number
    email_id?: IntFilter | number
    file_name?: StringFilter | string
    file_type?: StringFilter | string
    file_size?: StringFilter | string
    file_contents?: BytesFilter | Buffer
  }

  export type emailCreateWithoutAttachmentsInput = {
    recipient: string
    subject: string
    body: string
    timestamp: Date | string
    is_read: boolean
    sender: user_accountsCreateNestedOneWithoutEmailsInput
  }

  export type emailUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    sender_id: number
    recipient: string
    subject: string
    body: string
    timestamp: Date | string
    is_read: boolean
  }

  export type emailCreateOrConnectWithoutAttachmentsInput = {
    where: emailWhereUniqueInput
    create: XOR<emailCreateWithoutAttachmentsInput, emailUncheckedCreateWithoutAttachmentsInput>
  }

  export type emailUpsertWithoutAttachmentsInput = {
    update: XOR<emailUpdateWithoutAttachmentsInput, emailUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<emailCreateWithoutAttachmentsInput, emailUncheckedCreateWithoutAttachmentsInput>
  }

  export type emailUpdateWithoutAttachmentsInput = {
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    sender?: user_accountsUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type emailUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_id?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type emailUpdateWithoutSenderInput = {
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    attachments?: attachmentsUpdateManyWithoutEmailNestedInput
  }

  export type emailUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    attachments?: attachmentsUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type emailUncheckedUpdateManyWithoutEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipient?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attachmentsUpdateWithoutEmailInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: StringFieldUpdateOperationsInput | string
    file_contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type attachmentsUncheckedUpdateWithoutEmailInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: StringFieldUpdateOperationsInput | string
    file_contents?: BytesFieldUpdateOperationsInput | Buffer
  }

  export type attachmentsUncheckedUpdateManyWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_size?: StringFieldUpdateOperationsInput | string
    file_contents?: BytesFieldUpdateOperationsInput | Buffer
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}