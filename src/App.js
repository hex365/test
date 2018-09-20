import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './table';
import Form from './form';

class App extends Component {
    state = {
        characters: []
    };  
    
    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleChange = event => {
        const {name, value} = event.target;
    
        this.setState({
            [name] : value
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        return (
            <div className="container">
                <Table 
                    characterData={this.state.characters} 
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;
