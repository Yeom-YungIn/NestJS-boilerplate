export type EntityConditionType<T> = {
    [P in keyof T]?: T[P] | T[P][] | undefined
};