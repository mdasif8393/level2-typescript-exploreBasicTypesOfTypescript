const searchName = (value:string | null):void =>{
    if(value === null){
        console.log("There is nothing to search");
    }
    else{
        console.log("Searching...");
    }
} 

searchName(null);

const getMyCarSpeed = (speed: unknown): void =>{
    if(typeof speed === "number"){
        const value = (speed*1000) / 3600;
        console.log(`My speed is ${value}`);
    }
    if(typeof speed === "string"){
        const [value] = speed.split(" ");
        const convertedSpeed = (parseFloat(value)*1000) / 3600;
        console.log(`Converted speed is ${convertedSpeed}`);
    }
    else{
        console.log("Unknown type");
    }
}

getMyCarSpeed(10);
getMyCarSpeed('10 kmh^-1');
getMyCarSpeed(null);

// const throwError = (message: string) : never => {
//     throw new Error(message);
// }

// throwError("Something went wrong");