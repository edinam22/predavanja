import React, {useEffect} from "react";
// import useDebounce from "../../hooks/useDebounce";
import { Input } from 'antd';
const { Search } = Input;

const SearchField = ({placeholder, onSearch}) => {
    const [query, setQuery] = React.useState('');
    // const debouncedQuery = useDebounce(query, 300)

    useEffect(() => {
        onSearch(query)
    }, [query])

    return <div>
        {/*<input value={query} onChange={(e) => setQuery(e.target.value)}/>*/}
        <Search
            placeholder={placeholder}
            size="large"
            allowClear
            onSearch={(value) => setQuery(value)}
        />
    </div>
}

export default SearchField;