import React from 'react';
import './styles/Filters.css';

function Filters(props: { searchResults: (search: string) => void, filterResults: (country: string) => void, sortResults: (order: string[]) => void, changePage: (page: number) => void, }) {
    const { searchResults, filterResults, sortResults, changePage } = props;
    return (
        <div className="Filters">
            <input placeholder="Search" onChange={e => { searchResults(e.target.value.toLowerCase()); changePage(1); }} />
            <select onChange={e => { filterResults(e.target.value); changePage(1); }}>
                <option value="">Filter by Country</option>
                <option value="BE">Belgium</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="GB">United Kingdom</option>
                <option value="NL">The Netherlands</option>
            </select>
            <select onChange={e => { sortResults(e.target.value.split(", ")); changePage(1); }}>
                <option value="0, 0">Sort</option>
                <option value="1, -1">A-Z</option>
                <option value="-1, 1">Z-A</option>
            </select>
        </div>
    )
}

export default Filters;
