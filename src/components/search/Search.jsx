import React, {useEffect} from "react";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
    const [query, setQuery] = React.useState('');
    const debouncedQuery = useDebounce(query, 300)

    useEffect(() => {
        console.log(debouncedQuery)
    }, [debouncedQuery])

    return <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)}/>
        <div>Search query: {query}</div>
    </div>
}

export default Search;