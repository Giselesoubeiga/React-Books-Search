import React from "react";
import API from "./../helpers/api"

class  SavedBook extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          savedBooks:[],
        }
      }

      componentDidMount(){
        API.savedBooks()
        .then(books=>this.setState({savedBooks:books}))
        .catch(err=>console.log (err))
      }

      
      searchItem(book){
        return  (
           <div className="searchItem" key={book._id}>
        <div className="media">
          <img src={book.image} className="mr-3" alt="..." />
          <div className="media-body">
            <div className="">
              <h5 className="mt-0">{book.title}</h5>
              <p>
              {book.description}
              </p>
            </div>
            <div className="searchItemButton">
              <a href={book.link} className="btn btn-outline-success">View</a>
              <button onClick={(event)=>this.savebook(event,book)} className="btn btn-outline-primary">
              {this.state.savedBooks.map(savebook => savebook._id).includes(book._id) ? "Unsave" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
      }

      savebook = (event,book)=>{
        event.preventDefault()
        console.log(book)
        if (this.state.savedBooks.map(book => book._id).includes(book._id)) {
          API.deleteBook(book._id)
              .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
              .catch(err => console.error(err));
      } else {
          API.saveBook(book)
              .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
              .catch(err => console.error(err));
      }
      }


    render(){
        return(
            <div>
                 {this.state.savedBooks.map(book=>{return this.searchItem(book)})}
            </div>
        )
    }
 
}




export default SavedBook;