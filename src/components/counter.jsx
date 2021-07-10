import React, { Component } from 'react';

class Counter extends Component {
//    state = {
//     value: this.props.counter.value
//     // tags: []    
//    };

//    // handling an onClick event
//    handleIncrement = () => { 
//     this.setState({ value: this.state.value + 1});
//     };
   
    render() {
        console.log(this.props);
        return (
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'>
            Increment
            </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>
           {/* {this.state.tags.length === 0 && "Please create a new tag"}
           {this.renderTags()}; */}
         </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // object destructuring
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;    }
}
 
export default Counter;

 {/* setting an attribute// braces allow us to render dynamically */}
            {/* <img src={this.state.imageUrl} alt ="" />  */}
            {/* can use either of these to render children prop // make it dynamic using id */}
            {/* {this.props.children}
            <h4>{this.props.id}</h4> */}

             // doHandleIncrement = () => {
    //     this.handleIncrement({id: 1})
    // }
//    we can use v.js to do if else statements since react doesnt have the capability
//    renderTags() {
//        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
//        return  <ul>{this.state.tags.map( (tag) => <li key={tag}>{ tag }</li>)}</ul>;
//    }
   //using a constructor to use this. in a child class to bind event handlers
//    constructor() {
//         super();
//         this.handleIncrement = this.handleIncrement.bind(this);
//    }
{/* writing a inline function */}
            {/* <button onClick={this.doHandleIncrement}  */}