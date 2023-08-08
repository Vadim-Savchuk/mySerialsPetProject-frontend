import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { logout } from '../../redux/features/authSlice';

import Title from '../../components/ui/title/Title';

import './UserPage.scss';

const UserPage = () => {
    const { serials } = useSelector(state => state.serials);
    const { user } = useSelector(state => state.auth);

    const dateRegistration = user?.createdAt;
    const [date] = dateRegistration.split('T');

    const watchingSerials = serials.filter(serial => serial.watching === true)

    const exitApp = () => {
        logout();
        window.localStorage.removeItem('token');
        window.location.replace('/login');
    }

    return (
        <section className='user'>
            <Link to={'/'} className='button-beck'>&#8249;&#8212;</Link>

            <div className="info">
                <Title text={'Info'} />
                <ul className='list'>
                    <li>
                        <p>All serias: {serials.length}</p>
                    </li>
                    <li>
                        <p>Watching serials: {watchingSerials.length}</p>
                    </li>
                    <li>
                        <p>Registration: {dateRegistration && date}</p>
                    </li>
                </ul>
            </div>
            
            <button className='logout' onClick={exitApp}>Exit</button>
        </section>
    )
}

export default UserPage