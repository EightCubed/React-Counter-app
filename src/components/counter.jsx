import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        value : this.props.counter.value
    };
    
    handleIncrement = product => {
        console.log(this.props.id);
        this.setState({ value: this.state.value + 1 });
    };

    render() { 
        return (
            <div>
                {this.props.children}
                <span className={this.buttonDynamic()} >{this.formatCount()}</span>
                <button 
                    onClick={ () => this.handleIncrement(this.props.counter.id)}
                    className="btn btn-secondary btn-sm">Increment
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
            classes += (this.state.value === 0) ? "warning" : "primary";
            return classes;
    }
    
    formatCount() {
        const { value: value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;