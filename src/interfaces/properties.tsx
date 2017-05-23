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

export interface TopicParameter {
    topicId: string;
}

export interface TopicsParameter {
    url: string;
}

export interface ChildParameter {
    id: string;
}