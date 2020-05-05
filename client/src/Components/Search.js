import React from "react";


function Search(props){
   
        return(
            <div>
           <input className="form-control" name="searchTerm" onChange={props.searchHandleInput}  type="text" placeholder="Search" value={props.value}></input>
           <button type="submit" className="btn btn-primary">Submit</button>
           </div>
           
        )

 
}

export default Search;