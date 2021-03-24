import React from 'react';
import Parser from 'html-react-parser'

import Post from './post.component'


import globals from '../const';


class PostView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data: []
        }

        this.componentDidMount.bind(this);
    }

    async getJSON(url) {
      return fetch(url)
          .then((response)=>response.json())
          .then((responseJson)=>{return responseJson});
  }


  async componentDidMount() {
    const data = await this.getJSON(globals.postAPI);
    this.setState({
      data: data.reverse(),
    });
    console.log(this.state);
  }

    render(){

        var renderPost = this.state.data.map(item => {
          return <Post title={item.title} author={item.author} date={item.createdAt} category={item.category}
          content={Parser(item.content)} />
        })
        return (
        
      <div className="main-posts boxed">
        {renderPost}
      </div>
  
  
        

        );
    }
}

export default PostView; 