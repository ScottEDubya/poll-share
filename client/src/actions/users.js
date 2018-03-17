import * as AJAX from 'superagent';

export default function fetchUsers() {
    return { 
        type: 'FETCH_USER',
        payload: AJAX.get("https://randomuser.me/api/?results=10")
    };
};