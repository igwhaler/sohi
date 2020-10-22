declare function greeter(name: string): string;
interface Person {
    name: string;
    age: number;
}
declare function showPersonInfo({ name, age }: Person): string;
declare class Studen {
    fistName: string;
    middleInitial: string;
    lastName: string;
    age: number;
    static b: string;
    name: string;
    constructor(fistName: string, middleInitial: string, lastName: string, age: number);
    show: () => void;
}
declare const user: Studen;
