export default class UtilityService {
    public deepCopy<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }
    public keysArray(obj: Object): string[] {
        return Object.keys(obj);
    }
}
