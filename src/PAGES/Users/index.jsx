import React from 'react';
import * as axios from 'axios';
const malePic = 'https://toppng.com/uploads/preview/login-icons-user-flat-icon-115534363917nmr24mjcm.png';
const femalePic = 'https://www.pinclipart.com/picdir/middle/164-1640717_free-user-icon-flat-189024-download-user-icon.png';

const Users = (props) => {
    const getUSers = () => {
    props.users.length === 0 &&
        axios.get('http://localhost:4000/api/users')
            .then(response => {
                debugger;
                props.setUsers(response.data)
        });
    }

    const validatePic = (gender) => {
        return gender === 'male' ? malePic : femalePic
    };

    return (
        <div>
            <button onClick={getUSers}>Get Users</button>
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
                                <button onClick={() => props.follow(u.id)}>Follow</button>
                                :
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
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
};

export default Users;
