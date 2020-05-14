import React from "react";
import API from "./../helpers/api"


class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      savedBooks:[],
      books:[],
      value:"",
      loading:false
    }
  }
  submitSearch=(event)=>{
    event.preventDefault()
    this.setState({loading:true})
    API.getBook(this.state.value).then((result)=>{
    this.setState({books:result.data.items.map(item=>this.makeBook(item))})
    console.log(this.state.books)
    this.setState({loading:false})
    })

  
  }
   
   componentDidMount(){
     API.savedBooks()
     .then(books=>this.setState({savedBooks:books}))
     .catch(err=>console.log (err))
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


  loader = ()=>{
    console.log(this.state.loading )
    return(

        this.state.loading ? <div className="myLoader">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> :null
    )
  }



  savebook = (event,book)=>{
    event.preventDefault()
    console.log(book)
    if (this.state.savedBooks.map(book => book.title).includes(book.title)) {
      API.deleteBook(book._id)
          .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book.title !== deletedBook.title) }))
          .catch(err => console.error(err));
  } else {
      API.saveBook(book)
          .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) }))
          .catch(err => console.error(err));
  }
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
          {this.state.savedBooks.map(savebook => savebook.title).includes(book.title) ? "Unsave" : "Save"}
          </button>
        </div>
      </div>
    </div>
  </div>
)
  }
  render(){
    return (
      <div>
        {this.loader()}
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
