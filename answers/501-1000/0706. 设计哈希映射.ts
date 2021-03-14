class MyHashMap {
    private obj: {
        [prop: string]: number;
    }

    constructor() {
        this.obj = {};
    }

    put(key: number, value: number): void {
        this.obj[key] = value;
    }

    get(key: number): number {
        return this.obj[key]  ?? -1;
    }

    remove(key: number): void {
        delete this.obj[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */