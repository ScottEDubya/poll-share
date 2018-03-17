import React from 'react';
import Button from './Button';
import UserItem from './UserItem';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data, fetchUsers } = this.props;
        return (
            <div className="container">
                <Button
                    onClick={fetchUsers}
                    text={"Fetch Users"}
                    className={"btn btn-blue"} 
                />
                <div id="users">
                    {data.users.map((user, i) => ( <UserItem key={i} user={user}/> ))}
                </div>
            </div>
        );
    }
}

export default Users;