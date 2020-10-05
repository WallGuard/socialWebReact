import React from 'react';
import styles from './style.module.scss'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator';

const malePic = 'https://toppng.com/uploads/preview/login-icons-user-flat-icon-115534363917nmr24mjcm.png';
const femalePic = 'https://www.pinclipart.com/picdir/middle/164-1640717_free-user-icon-flat-189024-download-user-icon.png';

const Users = (props) => {
  const { totalUsersCount, pageSize, onPageChanged, currentPage, arrayOfFollowingUsers } = props;
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  };

  const validatePic = (gender) => {
    return !gender ? malePic : femalePic
  };

  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {
        props.users.map(u =>
          <div key={u.id}>
            <div>
              <div>
                <NavLink to={`/profile/` + u.id}>
                  <img
                    src={!u.photos.small ?
                      validatePic(u.gender)
                      : u.photos.small}
                    width='100px'
                    alt='avatar'
                  />
                </NavLink>
              </div>
              {!u.followed ?
                <button disabled={arrayOfFollowingUsers.some(id => id === u.id)} onClick={() => props.onFollowClick(u.id)}>Follow</button>
                :
                <button disabled={arrayOfFollowingUsers.some(id => id === u.id)} onClick={() => props.onUnfollowClick(u.id)}>Unfollow</button>
              }
            </div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
              {/* <div>
                            <span>{u.location.city}, </span>
                            <span>{u.location.country}</span>
                            </div> */}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Users;
