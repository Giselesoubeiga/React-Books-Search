import React from "react"
const bookitem=({book})=>{
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

export default bookitem;