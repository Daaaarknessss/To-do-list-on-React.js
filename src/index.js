import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdnb.artstation.com%2Fp%2Fassets%2Fimages%2Fimages%2F019%2F674%2F733%2Fmedium%2Fsun-haiyang-.jpg%3F1564537570&imgrefurl=https%3A%2F%2Fwww.artstation.com%2Fartwork%2F58RXyA&tbnid=BIKfxp0boEOnHM&vet=12ahUKEwi81vrOi4v0AhV5xDgGHZUWAl0QMygBegUIARDKAQ..i&docid=8dM4xiY4TwahKM&w=1600&h=932&itg=1&q=miss%20fortune&ved=2ahUKEwi81vrOi4v0AhV5xDgGHZUWAl0QMygBegUIARDKAQ" alt="" />
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text,
        }
        this.setState(prev => ({
            items: prev.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}


// ========================================

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
);
