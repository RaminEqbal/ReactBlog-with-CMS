import React from 'react';

import globals from '../const';



class PostSingle extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit() {
      console.log(this.props.reload)
      
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        secret: this.props.secret, 
        })
    };
      fetch(globals.postAPI+"/"+this.props.postID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
      this.props.reload();
      
    }

    render(){

        return (
          
      <div className="post post-delete-grid">
        <div>
        <span className="post-title">{this.props.title} ||</span>
        <span className="post-author">{this.props.author} ||</span>
        <span className="post-date">{this.props.date}</span>
        </div>
        <div>
          <button onClick={this.handleSubmit}>Delete</button>
        </div>
        <hr />
      </div>
  
  
        

        );
    }
}

export default PostSingle; 