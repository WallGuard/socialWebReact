import React from 'react';
import * as axios from 'axios';
import Users from './index';
import { connect } from 'react-redux';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC
} from '../../Redux/reducers/users-reducer';

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`http://127.0.0.1:4000/api/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.result)
                this.props.seTotalUsersCount(response.data.totalCount)
        });
    }
    
    

    onFollowClick = (id) => this.props.follow(id);
    onUnfollowClick = (id) => this.props.unfollow(id);

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://127.0.0.1:4000/api/users?page=${pageNumber}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.result)
                this.props.seTotalUsersCount(response.data.totalCount)
        });
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            onFollowClick={this.onFollowClick}
            onUnfollowClick={this.onUnfollowClick}
         />
    }
} 

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        seTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);