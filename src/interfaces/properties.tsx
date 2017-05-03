export interface ISquareProps { 
    value: string; 
    onClick: () => any;
}
export interface IBoardProps { 
    squares: string[];
     onClick: (i: number) => any;
}
export interface IGameProps { 

}

export interface Square {
    squares: string[];
}