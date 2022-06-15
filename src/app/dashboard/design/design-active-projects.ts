export class DesignActiveProjects {
    private _instance:number;

    constructor() {
        this._instance = Math.random()
    }

    ping() {
        return this._instance;
    }
}
