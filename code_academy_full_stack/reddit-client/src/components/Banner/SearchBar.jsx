import React, {useEffect, useState} from 'react';

const SearchBar = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const handleChage = (e) => {
        setValue(e.target.value);
    }

    return (
        <div data-testid='search-box'>
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={handleChage}
                    placeholder='Search Reddit...'
                    data-testid='search-input'
                />
                <button type="submit" data-testid="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default SearchBar;