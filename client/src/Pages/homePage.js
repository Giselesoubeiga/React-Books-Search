import React from "react";
import API from "./../helpers/api"

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books:[],
      value:""
    }
  }
  submitSearch=(event)=>{
    event.preventDefault()
    API.getBook("becoming").then((result)=>{
    this.setState({books:result.data.items.map(item=>this.makeBook(item))})
    console.log(this.state.books)
    })

  
  }


  makeBook = bookData => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink
    }
  }


  searchItem(book){
    return  (
       <div className="searchItem">
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
          <button className="btn btn-outline-primary">save</button>
        </div>
      </div>
    </div>
  </div>
)
  }
  render(){
    return (
      <div>
        <form methode="POST" onSubmit={this.submitSearch}>
          <div className="searchform">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>


       <div>
       {this.state.books.map(book=>{return this.searchItem(book)})}
       </div>
        </div>
  
       
  
        
    );


  }
  
}

export default HomePage;
