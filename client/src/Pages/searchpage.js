import React from "react";
import Search from "../Components/Search"


class SearchPage extends React.Component {

    state = {
        searchTerm: "",
      }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render(){
        console.log('search', this.state.searchTerm);
        return(
            <div>
           
           <Search searchHandleInput={this.handleChange} value={this.state.searchTerm} />

           </div>
           
        )
    }
 
}




export default SearchPage;