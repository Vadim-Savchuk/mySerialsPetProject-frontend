import { useState }                 from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link }                     from 'react-router-dom';

import { registerUser } from '../../redux/features/authSlice';

import Title     from '../../components/ui/title/Title';
import FormInput from '../../components/ui/formInput/FormInput';

import './RegisterPage.scss';
import LoaderAndMessages from '../../components/logic/loaderAndMessages/LoaderAndMessages';

const RegisterPage = () => {
    const [username, setUsername]   = useState('');
    const [useremail, setUseremail] = useState('');
    const [password, setPassword]   = useState('');

    const dispatch            = useDispatch();
    const { message, status } = useSelector(state => state.auth);

    const handleSubmit = () => {
        try {
            dispatch(registerUser({ username, password, useremail }));
            setUsername('');
            setPassword('');
            setUseremail('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='authorization-offer'>
            <div className='authorization'>
                <Title text={'Registration'} />
                <form className='auth-form' onSubmit={e => e.preventDefault()}>
                    <FormInput
                        id={'name'}
                        title={'Name'}
                        value={username}
                        placeholder={'Julia'}
                        changeFunc={setUsername}
                    />
                    <FormInput
                        id={'email'}
                        title={'Email'}
                        value={useremail}
                        placeholder={'jonsnow@gmail.com'}
                        changeFunc={setUseremail}
                    />
                    <FormInput
                        id={'password'}
                        title={'Password'}
                        value={password}
                        placeholder={'********'}
                        changeFunc={setPassword}
                    />
                    <div className='auth-form_buttons'>
                        <button onClick={handleSubmit}>Save</button>
                        <Link to="/login">I have an account</Link>
                    </div>
                </form>
            </div>

            <LoaderAndMessages
                message={message}
                isLoader={status}
            />
        </section>
    )
}

export default RegisterPage