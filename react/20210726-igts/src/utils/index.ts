interface userInfo {
    name: string,
    age: number
};

export const showErr = (msg: string): boolean => {
    console.log(msg);
    return true;
};

export const getUserData = ({name, age}: userInfo): string => {
    return `${name}, ${age}岁`;
}

export class Student {
    info: string;

    constructor(public name: string, public age: number) {
        this.info = `${name}, ${age}岁`;
    }

    getInfo(): string {
        return this.info;
    }
}
