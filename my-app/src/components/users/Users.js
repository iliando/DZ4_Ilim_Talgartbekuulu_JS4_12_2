function Users (props) {
    return (
        <ul>
            {props.users.map((user, key) => {
                return (
                    <ul style={{margin: "30px 0"}} key={key}>
                        <li>name: {user.name}</li>
                        <li>age: {user.age}</li>
                        <li>position: {user.position}</li>
                    </ul>
                )
            })}
        </ul>
    )
}

export default Users;