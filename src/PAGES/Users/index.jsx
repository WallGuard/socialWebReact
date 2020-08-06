import React from 'react';
const malePic = 'https://toppng.com/uploads/preview/login-icons-user-flat-icon-115534363917nmr24mjcm.png';
const femalePic = 'https://www.pinclipart.com/picdir/middle/164-1640717_free-user-icon-flat-189024-download-user-icon.png';

const Users = (props) => {

    props.users.length === 0 &&
    props.setUsers( [
        {
            id: 1,
            fullName: 'Mikhail',
            gender: 'male',
            status: 'ok',
            img: malePic,
            followed: true,
            location: {
                city: 'Taganrog',
                country: 'Russia',
            },
            
        },
        {
            id: 2,
            fullName: 'Constantine',
            gender: 'male',
            status: 'ok',
            img: malePic,
            followed: false,
            location: {
                city: 'Volgograd',
                country: 'Russia',
            },
        },
        {
            id: 3,
            fullName: 'Simona',
            gender: 'female',
            status: 'ok',
            img: femalePic,
            followed: true,
            location: {
                city: 'Novosibirsk',
                country: 'Russia',
            },
        },
        ],
    );

    return (
        <div>
            {
                props.users.map(u => 
                    <div key={u.id}>
                        <div>
                        <div>
                            <img src={u.img} width='100px' alt='avatar' />
                        </div>
                            { !u.followed ?
                                <button onClick={() => props.follow(u.id)}>Follow</button> :
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