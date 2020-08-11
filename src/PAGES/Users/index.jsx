import React from 'react';
import styles from './style.module.scss'

const malePic = 'https://toppng.com/uploads/preview/login-icons-user-flat-icon-115534363917nmr24mjcm.png';
const femalePic = 'https://www.pinclipart.com/picdir/middle/164-1640717_free-user-icon-flat-189024-download-user-icon.png';

const Users = (props) => {
    const {totalUsersCount, pageSize, currentPage} = props;

        const pagesCount = Math.ceil(totalUsersCount / pageSize);

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

        const validatePic = (gender) => {
            return gender === 'male' ? malePic : femalePic
        };

    return (
        <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e) => {props.onPageChanged(p)}} className={currentPage === p && styles.selectedPage}>{p}</span>
                    })}
                </div>
                {
                    props.users.map(u => 
                        <div key={u.id}>
                            <div>
                            <div>
                                <img
                                    src={u.img === 'no' || undefined || null ?
                                        validatePic(u.gender)
                                        : u.img}
                                    width='100px'
                                    alt='avatar' />
                            </div>
                                { !u.followed ?
                                    <button onClick={() => props.onFollowClick(u.id)}>Follow</button>
                                    :
                                    <button onClick={() => props.onUnfollowClick(u.id)}>Unfollow</button>
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

export default Users;