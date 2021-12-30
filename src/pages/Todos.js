import {Table} from "reactstrap";
import {useEffect, useState} from "react";
import axios from "axios";

function Todos() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios({
            url:'https://jsonplaceholder.typicode.com/todos',
            method:'get'
        }).then((response) => {
            setTodos(response.data)
        })
    },[])

    return (
        <div className={"col-md-12"}>
            <Table>
                <thead>
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map((value, index) => (
                        <tr key={index}>
                            <td>{value.userId}</td>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.completed + ''}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
}

export default Todos