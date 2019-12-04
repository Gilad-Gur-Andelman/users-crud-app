import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const user = this.state.value;
        const { addUser } = this.props;

        addUser(user);

        this.setState({ value: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Add User:
                    <div>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form;