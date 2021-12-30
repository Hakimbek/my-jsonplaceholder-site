import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "reactstrap";

function Comments() {

    const [comments, setComments] = useState([])

    useEffect(() => {
        axios({
            url:'https://jsonplaceholder.typicode.com/comments',
            method:'get'
        }).then((response) => (
            setComments(response.data)
        ))
    },[])

    return (
        <div className={"col-md-12"}>
            <Table>
                <thead>
                <tr>
                    <th>PostId</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>
                {
                    comments.map((value, index) => (
                        <tr key={index}>
                            <td>{value.postId}</td>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.body}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
}

export default Comments