import React from 'react';
import * as axios from 'axios';
import styles from './style.module.scss'
const malePic = 'https://toppng.com/uploads/preview/login-icons-user-flat-icon-115534363917nmr24mjcm.png';
const femalePic = 'https://www.pinclipart.com/picdir/middle/164-1640717_free-user-icon-flat-189024-download-user-icon.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`http://127.0.0.1:4000/api/users?page=${this.props.currentPage}&limit=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.result)
                this.props.seTotalUsersCount(response.data.totalCount)
        });
    }
    
    validatePic = (gender) => {
        return gender === 'male' ? malePic : femalePic
    };

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

        const {totalUsersCount, pageSize, currentPage} = this.props;

        const pagesCount = Math.ceil(totalUsersCount / pageSize);

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => {this.onPageChanged(p)}} className={currentPage === p && styles.selectedPage}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => 
                        <div key={u.id}>
                            <div>
                            <div>
                                <img
                                    src={u.img === 'no' || undefined || null ?
                                        this.validatePic(u.gender)
                                        : u.img}
                                    width='100px'
                                    alt='avatar' />
                            </div>
                                { !u.followed ?
                                    <button onClick={() => this.onFollowClick(u.id)}>Follow</button>
                                    :
                                    <button onClick={() => this.onUnfollowClick(u.id)}>Unfollow</button>
                                }
                            </div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                                <div>
                                <span>{u.location.city}, </span>
                                <span>{u.location.country}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
} 

export default Users;
