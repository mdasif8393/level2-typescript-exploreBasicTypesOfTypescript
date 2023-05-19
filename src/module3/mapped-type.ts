type Volume = {
    height: number;
    width: number;
    depth: number;
}

type Area<T> = {
    //[key in keyof Volume]: Volume[key]; //  Persian : string Forhan: string
    [key in keyof T]: T[key]
}

const area1 : Area<{height: number, width: number}> = {height: 1, width: 3}

type AreaString = {
    height: string;
    width: string;
}

type AreaReadOnly = {
    readonly height: number;
    readonly width: number;
}

const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 20
}

type A = AreaNumber["height"] // get number
type B = keyof AreaNumber; // 'width' | 'height'