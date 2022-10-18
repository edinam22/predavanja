import React, {useEffect} from "react";
import useDebounce from "../../../hooks/useDebounce";
import { Input } from 'antd';
const { Search } = Input;

const SearchField = () => {
    const [query, setQuery] = React.useState('');
    const debouncedQuery = useDebounce(query, 300)

    useEffect(() => {
        console.log(debouncedQuery)
    }, [debouncedQuery])

    return <div>
        {/*<input value={query} onChange={(e) => setQuery(e.target.value)}/>*/}
        <Search
            placeholder="input search text"
            size="large"
            allowClear
            onSearch={(value) => setQuery(value)}
            style={{
                width: 200,
            }}
        />
        <div>Search query: {query}</div>
    </div>
}

export default SearchField;