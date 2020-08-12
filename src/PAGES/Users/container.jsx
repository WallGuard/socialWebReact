import React from 'react';
import * as axios from 'axios';
import Users from './index';
import { connect } from 'react-redux';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC
} from '../../Redux/reducers/users-reducer';
import Preloader from '../common/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`http://127.0.0.1:4000/api/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.result)
                this.props.seTotalUsersCount(response.data.totalCount)
        });
    }
    
    

    onFollowClick = (id) => this.props.follow(id);
    onUnfollowClick = (id) => this.props.unfollow(id);

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`http://127.0.0.1:4000/api/users?page=${pageNumber}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.result)
                this.props.toggleIsFetching(false)
                this.props.seTotalUsersCount(response.data.totalCount)
        });
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
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);