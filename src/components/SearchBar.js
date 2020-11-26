import React from 'react';

class SearchBar extends React.Component {
    //instantiate state to make it a controlled component
    //means storing data for search term inside the component and not inside DOM
    state = { term: ''};

    //call back function for setting state for every value input in searchbar 
    //can be done inline in onChange property of input as well
    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        //call the callback function (onTermSubmit) passed into searchbar from the app component (parent) 
        //parameter will tell the parent component of the current term from the child component
        this.props.onTermSubmit(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input  value = {this.state.term} type="text" 
                            onChange={this.onInputChange}
                        />
                    </div>

                </form>
            </div>
        );
    }
}

export default SearchBar;  