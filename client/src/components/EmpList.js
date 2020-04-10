import React, { Component } from 'react'
import '../App.css'
export class EmpForm extends Component {
    render() {

        const {posts}=this.props
        return (
            <div >
                <h2>List of Employee Info</h2>

                {
                    posts.length?
                    posts.map(post =>(<div key={post.id}>
                       <table >
                       <thead>
                          <tr>
                          <th>Name</th>
                           <th>Position</th>
                           <th>Office</th>
                           <th>Salary</th>
                          </tr>
                       </thead>
                    <tbody>
                    <tr>
                    <td>{post.name}</td>
                    <td>{post.position}</td>
                    <td>{post.office}</td>
                    <td>{post.salary}</td>
                        </tr>
                    
                    </tbody>
                       </table>
                    </div>)) : null
                }
            </div>
        )
    }
}

export default EmpForm
