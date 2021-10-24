import React, { Component } from 'react';

class Counter extends React.Component {
    render() { 
        return (
            <div>
                {this.props.children}
                <span className={this.buttonDynamic()} >{this.formatCount()}</span>
                <button 
                    onClick={ () => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">+
                </button>
                <button 
                    onClick={ () => this.props.onDecrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">-
                </button>
                <button
                    onClick={ () => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-secondary btn-sm btn-danger m-2 ">Delete
                </button>
            </div>
        );
    }
    buttonDynamic() {
            let classes = "badge m-2 badge-";
            classes += (this.props.counter.value === 0) ? "warning" : "primary";
            return classes;
    }
    
    formatCount() {
        const { value: value } = this.props.counter;
        return value === 0 ? "0" : value;
    }
}
 
export default Counter;