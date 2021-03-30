import React from 'react';

import globals from '../const';



class PostSingle extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          release: this.props.release,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdateButton = this.handleUpdateButton.bind(this);
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


    handleUpdateButton() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        secret: this.props.secret,
        title: this.props.title,
        author: this.props.author,
        content: this.props.content,
        category: this.props.category,
        release: !this.state.release,
        })
    };
      this.setState({
        release: !this.state.release,
      })
      fetch(globals.postAPI+"/update/"+this.props.postID, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
      console.log(this.state);
      this.props.reload();
    }

    render(){

        return (
          
      <div className="post post-delete-grid">
        <div>
        <span className="post-title">{this.props.title} ||</span>
        <span className="post-author">{this.props.author} ||</span>
        <span className="post-date">{this.props.date}</span> || 
        <span className="post-date">Released?={this.props.release ? "Yes" : "No"}</span>
        </div>
        <div>
          <button onClick={this.handleSubmit}>Delete</button>
          <button onClick={this.handleUpdateButton}>Toggle Release</button>
        </div>
        <hr />
      </div>
  
  
        

        );
    }
}

export default PostSingle; 