import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');
    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        // Todo : Make sure to call callback from parent component
        onFormSubmit(term);
    }
    return(
        <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
            <div className="field">
                <label>Video Search</label>
                <input 
                    className="search-input" 
                    value={term} 
                    onChange={onInputChange}>
                </input>
            </div>
        </form>
    </div>
    );
};


export default SearchBar;