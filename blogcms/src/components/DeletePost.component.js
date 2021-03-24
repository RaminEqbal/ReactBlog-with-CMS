import React from 'react';

import globals from '../const';


import PostSingle from './postSingle.component'

class DeletePost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            postList: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.reload = this.reload.bind(this);
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
        console.log("Reload called")
        this.setState(this.state);
        this.forceUpdate();
        this.componentDidMount();
      }



      handleSubmit(event) {

        
        event.preventDefault();
      }



    render(){
        var renderPost = this.state.postList.map(item => {
            return <PostSingle reload={this.reload} title={item.title} author={item.author} date={item.createdAt} postID={item._id} />
          })
        return (
    <div className="post-form center-wrapper">    
    <h2>Delete Post</h2>
    {renderPost}
    </div>

        );
    }
}

export default DeletePost; 