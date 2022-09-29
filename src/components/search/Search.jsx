import React from "react";

const Search = () => {
    const [query, setQuery] = React.useState('')

    return <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)}/>
        <div>Search query: {query}</div>
    </div>
}

export default Search;