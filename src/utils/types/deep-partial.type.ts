export type DeepPartialType<T> = {
    [P in keyof T]?: DeepPartialType<T[P]>
};