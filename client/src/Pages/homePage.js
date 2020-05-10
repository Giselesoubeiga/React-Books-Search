import React from "react";
import API from "./../helpers/api"

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books:[],
      value:"",
      loading:true
    }
  }
  submitSearch=(event)=>{
    event.preventDefault()
    API.getBook(this.state.value).then((result)=>{
    this.setState({books:result.data.items.map(item=>this.makeBook(item))})
    console.log(this.state.books)
    this.setState({loading:false})
    })

  
  }

  displayLoading=()=>{
    return(this.state.loading?<h3>Searching Books</h3>:"")
  }

  handleInputSearch=(event)=>{
    this.setState({value:event.target.value})
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


  savebook = (book)=>{
    console.log(book)
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
          <button onClick={()=>this.savebook(book)} className="btn btn-outline-primary">save</button>
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
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search"
              onChange={this.handleInputSearch}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
       <div>

         {/* {this.displayLoading()} */}
       {this.state.books.map(book=>{return this.searchItem(book)})}
       </div>
        </div>
  
       
  
        
    );


  }
  
}

export default HomePage;
