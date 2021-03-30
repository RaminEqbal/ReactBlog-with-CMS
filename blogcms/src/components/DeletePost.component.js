import React from 'react';

import globals from '../const';


import PostSingle from './postSingle.component'

class DeletePost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            postList: [],
            secret: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reload = this.reload.bind(this);
    }


    handleChange(event) {
      const name = event.target.name;
      this.setState({
          [name]: event.target.value,
      });
    }


    async getJSON(url) {
        return fetch(url)
            .then((response)=>response.json())
            .then((responseJson)=>{return responseJson});
    }







      async handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
          secret: this.state.secret,
          })
          
      };
        var data = await fetch(globals.postAPI+"/all/get", requestOptions).then((response)=>response.json())
          .then((responseJson)=>{return responseJson});
      console.log(data);

          if(Array.isArray(data)){
            this.setState({
              postList: data.reverse(),
            });
          }
          
          console.log(this.state);
         
      }

  
        reload() {
          this.setState(this.state);
          this.forceUpdate();


        
        
      }

    



    render(){
        var renderPost = this.state.postList.map(item => {
            return <PostSingle secret={this.state.secret} reload={this.reload} title={item.title} content={item.content} author={item.author} category={item.category} date={item.createdAt} release={item.release} postID={item._id} />
          })
        return (
    <div className="post-form center-wrapper">    
    <h2>Delete Post</h2>
    <form onSubmit={this.handleSubmit}>
    <label>
        Secret<br />
        <input className="single-input dark-input" name="secret" type="text" value={this.state.secret || ""} onChange={this.handleChange} />
      </label>
      <div className="center-wrapper"><input className="bottom-margin button-submit" type="submit" value="Load Posts" /></div>
    </form>
    {renderPost}
    </div>

        );
    }
}

export default DeletePost; 