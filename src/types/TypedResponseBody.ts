export interface TypedResponseBody<T> extends Express.Response {
    body: T   
}
