import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    click = () => {
        // console.log("CreateTODO click function is running!");
        // Create a TODO item?????
        this.props.createTodo({
            text: "Buy new keyboard",
            done: false
        })
    }

    render() {
        console.log("CreateTODO render function is running!");
        return (
            <div className="todo-create">
                <input type="text" />
                <button onClick={this.click}>
                    Add TODO
                </button>
            </div>
        );
    }
}

export default CreateTodo;