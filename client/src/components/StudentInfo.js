import React, { Component } from 'react'

export class StudentInfo extends Component {
    render() {
        const {posts}=this.props
    
        return (
            <div>
             <h2>   Student Info</h2>
         {
           posts.length?
             posts.map(post =><div key={post.id}>
                 <p>{post.name}{post.email}{post.age}{post.location}</p>
                 <p></p>
                 <p></p>
                 <p></p> </div>):
                 null
             }
            </div>
        )
    }
}

export default StudentInfo
