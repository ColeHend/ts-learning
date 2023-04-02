export default class UtilityService {
    public deepCopy<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

}
