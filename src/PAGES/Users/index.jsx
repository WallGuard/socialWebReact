import React from 'react';
import * as axios from 'axios';
const malePic = 'https://toppng.com/uploads/preview/login-icons-user-flat-icon-115534363917nmr24mjcm.png';
const femalePic = 'https://www.pinclipart.com/picdir/middle/164-1640717_free-user-icon-flat-189024-download-user-icon.png';

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.getUsers()
    };

    getUsers = () => {
        axios.get('http://localhost:4000/api/users')
            .then(response => {
                this.props.setUsers(response.data)
        });
    };
    
    validatePic = (gender) => {
        return gender === 'male' ? malePic : femalePic
    };

    onFollowClick = (id) => this.props.follow(id);
    onUnfollowClick = (id) => this.props.unfollow(id);

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
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
