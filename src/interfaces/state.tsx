import {Square} from "./properties";

export interface ISquareState { 
    value: string; 
}
export interface IBoardState {    
    
}
export interface IGameState { 
    history: Array<Square>;
    xIsNext: boolean;
    stepNumber: number;
}