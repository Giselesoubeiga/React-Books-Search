import React from "react";

class HomePage extends React.Component {

  searchItem(book){
    return  (
       <div className="searchItem">
    <div className="media">
      <img src="https://picsum.photos/200/300" className="mr-3" alt="..." />
      <div className="media-body">
        <div className="">
          <h5 className="mt-0">Media heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in
            faucibus.
          </p>
        </div>
        <div className="searchItemButton">
          <button className="btn btn-outline-success">View</button>
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
        <form methode="POST">
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
        </div>
  
       
  
        
    );


  }
  
}

export default HomePage;
