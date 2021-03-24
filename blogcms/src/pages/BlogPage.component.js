import React from 'react';

import PostView from '../components/blogpostview.component';
import CollectionView from "../components/collectionview.component"
import TopBar from '../components/TopBar.component'







class BlogPage extends React.Component {
    constructor(props){
        super(props);
    }

   
    render(){

        return (
        <div>

        <TopBar />
        <div>
            <PostView />
        </div>
        </div>
  
        

        );
    }
}

export default BlogPage; 