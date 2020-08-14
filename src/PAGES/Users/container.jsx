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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                //debugger
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        this.getUsersFromDB(this.props.currentPage)
    }

    onFollowClick = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "2de7d40c-568a-4e03-9c88-c47a2bb27ca9"
                },
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(id)
                };
        });
    };
    onUnfollowClick = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "2de7d40c-568a-4e03-9c88-c47a2bb27ca9"
                },
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unfollow(id)
                };
        });
    };

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
