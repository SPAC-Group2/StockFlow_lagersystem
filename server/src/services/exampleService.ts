import { verifyConnection } from "../db/db_module";

export function getExampleData() {
    verifyConnection();
    return {
        
        message: "Hello from the service"
    };
}

export function getExampleData2() {
    return {
        message: "Hul igennem"
    };
}

export function getExampleData3() {
    return {
        message: "Ja og nej"
    };
}