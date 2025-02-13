export class TypeUtils
{
    public static notNull<T>(value: T | null | undefined, message = 'Value must not be null'): T
    {
        if (null == value) {
            throw new Error(message);
        }

        return value;
    }
}
