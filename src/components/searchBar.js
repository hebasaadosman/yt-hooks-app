import React,{useState,useEffect} from 'react';

const SearchBar=(props)=>{
 const [query,setQuery]=useState('');
 const [debounced,setDebounced]=useState(query);
 useEffect(()=>{
     const timeId=setTimeout(() => {
        setDebounced(query)
     }, 1000);
    return()=>{
        clearTimeout(timeId);
    }
 },[query])
 
     const onFormSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit(debounced);
     }
        return (
            <div  className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={query}
                        onChange={(e)=>{setQuery(e.target.value)}}
                    />
                </div>
            </form>
       </div>
        )
}
 

export default SearchBar
