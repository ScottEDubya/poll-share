import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
    return (
        <div className="box">
            <img src={props.user.picture.thumbnail} alt="user"/>
            <span>{props.user.login.username}</span>
        </div>
    )
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem;