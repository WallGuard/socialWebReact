import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Users from './index';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
} from '../../Redux/reducers/users-reducer';
import Preloader from '../common/Preloader';

class UsersContainer extends React.Component {

    getUsersFromDB = (page) => {
        axios.get(`http://127.0.0.1:4000/api/users?page=${page}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.result)
                this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        this.getUsersFromDB(this.props.currentPage)
    }

    onFollowClick = (id) => this.props.follow(id);
    onUnfollowClick = (id) => this.props.unfollow(id);

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
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
            />
        </>
    }
} 

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    })(UsersContainer);
