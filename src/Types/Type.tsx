export type ArrayofString ={
    array: {
        text: string;
        amount: string;
        index:number;
        isAdd:boolean;
        display:string;
    }[],
    addTransaction:Function;
}
export type NewObject={
        text: string;
        amount: string;
        index:number;
        isAdd:boolean;
        display:string;
}