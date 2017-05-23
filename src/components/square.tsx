import * as React from "react";
import { ISquareProps } from "../interfaces/properties";
import { ISquareState } from "../interfaces/state";

/*export default class Square extends React.Component<ISquareProps, ISquareState> {
    public state: ISquareState;
    constructor(props: ISquareProps) {
        super(props);
        this.state = {
            value: null
        }
    }
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()} >
                {this.props.value}
            </button>
        );
    }
}*/

export const Square = (props: ISquareProps) =>  <button className="square" onClick={() => props.onClick()} >
                                                    {props.value}
                                                </button>;                                         