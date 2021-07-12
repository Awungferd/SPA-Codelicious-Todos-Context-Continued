import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: "-"
        };
    }

    click = () => {
        console.log("CreateTODO click function is running!");
        // Create a TODO item?????
        this.props.createTodo({
            text: this.state.todoText,
            done: false
        })
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            todoText: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form was submitted!");

        // Who remembers how to POST this data?
        const url = "https://jsonplaceholder.typicode.com/users";
        const config = {
            method: "POST",
            body: JSON.stringify(this.state)
        };
        
        fetch(url, config)
            .then(response => response.json())
            .then(result => console.log("Result is", result))
            .catch(err => console.error(err));
    }

    render() {
        console.log("CreateTODO render function is running!");
        return (
            <form onSubmit={this.handleSubmit}>

                <input
                    type="text"
                    value={this.state.todoText}
                    onChange={this.handleChange}
                />

                <button type="submit">
                    Add TODO
                </button>

            </form>
        );
    }
}

export default CreateTodo;