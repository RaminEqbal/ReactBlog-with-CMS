import React from 'react';
import Parser from 'html-react-parser'

import Post from './post.component'


import globals from '../const';


class AddPost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            secret: '',
            title: '',
            author: '',
            content: '',
            category:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    clearForm(){
      this.setState({
        title: '',
            author: '',
            content: '',
            category:'',
      })
    }


    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
      }


      handleSubmit(event) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                secret: this.state.secret,
                title: this.state.title,
                author:  this.state.author,
                content: this.state.content,
                category: this.state.category.split(",")
            })
        };
        fetch(globals.postAPI+"/add", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));

        this.clearForm();
        event.preventDefault();
      }



    render(){

        return (
      <div className="post-form center-wrapper">    
      <h2>Add Post</h2>
      <form onSubmit={this.handleSubmit}>
      <div>
      <label>
        Secret<br />
        <input className="single-input" name="secret" type="text" value={this.state.secret || ""} onChange={this.handleChange} />
      </label>
      </div>
      <div>
      <label>
        Title<br />
        <input className="single-input" name="title" type="text" value={this.state.title || ""} onChange={this.handleChange} />
      </label>
      </div>
      <div>
      <label>
        Author<br />
        <input className="single-input" name="author" type="text" value={this.state.author || ""} onChange={this.handleChange} />
      </label>
      </div>

      <div>
      <label>
        Category<br />
        <input className="single-input" name="category" type="text" value={this.state.category || ""} onChange={this.handleChange} />
      </label>
      </div>

      <div className="even-grid">
      <div>
      <label>
        ContentHTML<br />
        <textarea name="content" type="text" value={this.state.content || ""} onChange={this.handleChange} />
      </label>
      </div>

      <div className="post-add-preview">
      <Post title={this.state.title} category={this.state.category} author={this.state.author} date={new Date().toDateString()}
      content={Parser(this.state.content)} />
      </div>
      </div>
      
      
      <div className="center-wrapper"><input className="bottom-margin button-submit" type="submit" value="Submit" /></div>
      
    </form>    
    </div>

        );
    }
}

export default AddPost; 