export type PromiseFunction = (
    path: string,
    header?: {},
    params?: {},
    data?: {},
) => Promise<any>