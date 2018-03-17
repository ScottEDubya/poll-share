import { render } from 'react-dom';
import React from 'react';
import Users from './containers/UsersContainer';
import { Provider } from 'react-redux';
import UsersStore from './store';

render(
    <Provider store={UsersStore}>
        <Users />
    </Provider>,
    document.getElementById("root")
);

{/* <div>
</div>, */}