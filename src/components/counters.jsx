import Counter from './counter';
import React, { Component } from 'react';

class Counters extends React.Component {
    render() { 
        return (
        <div>
            <button 
            onClick={this.props.onReset}
            className="btn btn-primary btn-sm">Reset
            </button>
            { this.props.counters.map(counter => 
            <Counter 
            key={counter.id} 
            counter={counter}   
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}> 
            Item : {counter.id}
            </Counter>
            ) }
        </div>
        );
    }
}
 
export default Counters;