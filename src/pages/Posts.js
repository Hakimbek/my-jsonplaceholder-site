import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "reactstrap";

function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'get'
        }).then((response) => {
            setPosts(response.data)
        })
    },[])

    return (
        <div className="col-md-12">
            <Table hover>
                <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((value, index) => (
                    <tr key={index}>
                        <td>{value.userId}</td>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.body}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Posts;