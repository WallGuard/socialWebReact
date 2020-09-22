import React from 'react';
import { connect } from 'react-redux';
import Users from './index';
import {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers
} from '../../Redux/reducers/users-reducer';
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {

    getUsersFromDB = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    componentDidMount() {
        this.getUsersFromDB(this.props.currentPage)
    }

    onFollowClick = (id) => {
        this.props.follow(id)
    };

    onUnfollowClick = (id) => {
        this.props.unfollow(id)
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.getUsersFromDB(pageNumber)
    }

    render() {
        return <>
        {this.props.isFetching && <Preloader />}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                onFollowClick={this.onFollowClick}
                onUnfollowClick={this.onUnfollowClick}
                arrayOfFollowingUsers={this.props.arrayOfFollowingUsers}
            />
        </>
    }
} 

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         arrayOfFollowingUsers: state.usersPage.followingInProgress,
//     };
// };

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        arrayOfFollowingUsers: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers: requestUsers,
        }),
)(UsersContainer)
