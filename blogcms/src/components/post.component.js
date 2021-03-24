import React from 'react';




class Post extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return (
          
      <div className="post">
        <div className="post-heading">
        <h3 className="post-title">{this.props.title}</h3>
        <div className="post-author">by {this.props.author}</div>
        <div className="post-date">{new Date(this.props.date).toDateString()}</div>
        <div className="post-category">[{this.props.category.toString()}]</div>
        </div>
        <div className="post-content">
            {this.props.content}
        </div>
        <hr />
      </div>
  
  
        

        );
    }
}

export default Post; 