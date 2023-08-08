import { Link } from 'react-router-dom';

import { avatars } from '../../../data/img';

import './Avatar.scss';

const Avatar = ({ avatar, setUpdatAvatar, isUpdate }) => {

    return (
        <div className='avatar-wrapper'>

            <Link to={'/user'} className='avatar'>
                <img src={avatar} alt="Avatar" />
            </Link>

            <div className={isUpdate ? 'avatars-list active' : 'avatars-list'}>
                {avatars.map(avatar => {
                    return (
                        <button onClick={() => setUpdatAvatar(avatar)} key={avatar}>
                            <img src={avatar} alt="Avatar" />
                        </button>
                    )
                })}
            </div>
        </div>

    )
}

export default Avatar