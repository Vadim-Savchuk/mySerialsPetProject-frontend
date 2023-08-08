import { useState }                 from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar   from '../../ui/avatar/Avatar';
import Username from '../../ui/username/Username';
import Thema    from '../../ui/thema/Thema';

import { updateUser } from '../../../redux/features/authSlice';

import { hello } from '../../../utils';

import './Header.scss';
import LoaderAndMessages from '../loaderAndMessages/LoaderAndMessages';

const Header = () => {
    const {message, status} = useSelector(state => state.auth);
    const user = useSelector(state => state.auth.user);

    const time = hello();
    const dispatch = useDispatch()

    const [isUpdate, setIsUpdate]             = useState(false);
    const [updateAvatar, setUpdatAvatar]      = useState(user?.avatar);
    const [updateUsername, setUpdateUsername] = useState(user?.username);

    const updateHandlerUser = () => {
        try {
            dispatch(updateUser({
                avatar: updateAvatar,
                username: updateUsername
            }))

            setIsUpdate(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <header className='header'>

            <div className="left">
                <Avatar
                    isUpdate={isUpdate}
                    avatar={updateAvatar}
                    setIsUpdate={setIsUpdate}
                    setUpdatAvatar={setUpdatAvatar}
                />

                <Username
                    time={time}
                    isUpdate={isUpdate}
                    value={updateUsername}
                    username={user?.username}
                    setIsUpdate={setIsUpdate}
                    updateHandlerUser={updateHandlerUser}
                    setUpdateUsername={setUpdateUsername}
                />
            </div>
            <div className="right">
                <Thema />
            </div>

            <LoaderAndMessages
                message={message}
                isLoader={status}
            />
        </header>
    )
}

export default Header