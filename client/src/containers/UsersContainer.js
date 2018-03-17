import { connect } from 'react-redux';
import Users from '../components/Users';
import fetchUsers from '../actions/users';

const mapStateToProps = (state) => ({
    data: state
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => {
        dispatch(fetchUsers())
    }
});

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export default UsersContainer;