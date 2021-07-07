import React from 'react';

class CreateTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Default message",
            counter: 1
        };
    }

    click = () => {
        console.log("CreateTODO click function is running!");
        this.setState({ message: "Click " + Math.random() });
    }

    anotherClick() {
        console.log("CreateTODO anotherClick function is running!");
        // Warning! This will not work, because "this" is undefined
        // This *can* be made to work with method binding
        // but you can just use an arrow function like above too
        this.setState({ message: "AnotherClick" });
    }

    render() {
        console.log("CreateTODO render function is running!");
        return (
            <div className="todo-create">
                <p>Message: {this.state.message}</p>
                <p>Counter: {this.state.counter}</p>
                <input type="text" />
                <button onClick={this.click}>
                    Add TODO
                </button>
            </div>
        );
    }
}

export default CreateTodo;