export interface TypedResquestBody<T> extends Express.Request {
    body: T   
}