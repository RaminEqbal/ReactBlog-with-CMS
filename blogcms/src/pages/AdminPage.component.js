import React from 'react';



import AddPost from '../components/AddPost.component'
import DeletePost from '../components/DeletePost.component'

class AdminPage extends React.Component {
    constructor(props){
        super(props);

        
    }

    

   
    render(){

        return (
        
        <div>
        <DeletePost />
        <AddPost />
        </div>
  
        
        

        );
    }
}

export default AdminPage; 