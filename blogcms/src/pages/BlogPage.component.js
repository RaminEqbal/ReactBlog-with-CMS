import React from 'react';

import PostView from '../components/blogpostview.component';
import CollectionView from "../components/collectionview.component"








class BlogPage extends React.Component {
    constructor(props){
        super(props);
    }

   
    render(){

        return (
        
            <div className="main-grid">
            <CollectionView />
            <PostView />
          </div>
  
  
        

        );
    }
}

export default BlogPage; 