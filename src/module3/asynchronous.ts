
//Mocking

//Json Placeholder

interface ITodo  {
        userId: number,
        id: number,
        title: string,
        completed: boolean,
}

const getTodo = async() : Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}

const getToDoData = async() : Promise<void> => {
    const result = await getTodo();
    console.log(result);
}

getToDoData();

const makePromise = () : Promise<string> => {
    return new Promise<string>((resolve, reject)=>{
        const data: string = "Data is fetched";
        if(data){
            resolve(data);
        }
        else{
            reject("Failed to fetched data")
        }
    });
}

const getPromiseData = async (): Promise<void> => {
    const data = await makePromise();
}


//Boolean promise
const makePromiseBoolean = () : Promise<boolean> => {
    return new Promise<boolean>((resolve, reject)=>{
        const data: boolean = true;
        if(data){
            resolve(data);
        }
        else{
            reject("Failed to fetched data")
        }
    });
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}

//object promise

type DataType = {
    data: string
}

const makePromiseObject = () : Promise<DataType> => {
    return new Promise<DataType>((resolve, reject)=>{
        const data: DataType = {data: "Data is fetched"};
        if(data){
            resolve(data);
        }
        else{
            reject("Failed to fetched data")
        }
    });
}

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
}

