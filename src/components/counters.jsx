import Counter from './counter';
import React, { Component } from 'react';

class Counters extends React.Component {
    state = {
        counters : [
            { id: 1, value: 5},
            { id: 2, value: 0},
            { id: 3, value: 0},
            { id: 4, value: 0}
        ]
    };
    
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId );
        this.setState({ counters : counters });
    }

    render() { 
        return (
        <div>
            { this.state.counters.map(counter => 
            <Counter 
            key={counter.id} 
            counter={counter} 
            onDelete={this.handleDelete}> 
            Item : {counter.id}
            </Counter>
            ) }
        </div>
        );
    }
}
 
export default Counters;