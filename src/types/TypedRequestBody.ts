export interface TypedResquestBody<TBody> extends Express.Request {
    body: TBody
}