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



    async componentDidMount() {
        var data = await this.getJSON(globals.postAPI);
        this.setState({
          postList: data.reverse(),
        });
        console.log(this.state);
      }

      reload() {
        this.setState(this.state);
        this.forceUpdate();
        this.componentDidMount();
      }



      handleSubmit(event) {

        
        event.preventDefault();
      }



    render(){
        var renderPost = this.state.postList.map(item => {
            return <PostSingle secret={this.state.secret} reload={this.reload} title={item.title} author={item.author} date={item.createdAt} postID={item._id} />
          })
        return (
    <div className="post-form center-wrapper">    
    <h2>Delete Post</h2>
    <label>
        Secret<br />
        <input className="single-input" name="secret" type="text" value={this.state.secret || ""} onChange={this.handleChange} />
      </label>
    {renderPost}
    </div>

        );
    }
}

export default DeletePost; 