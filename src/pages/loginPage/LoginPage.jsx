import { useState }                 from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link }                     from 'react-router-dom';

import { loginUser } from '../../redux/features/authSlice';

import Title             from '../../components/ui/title/Title';
import FormInput         from '../../components/ui/formInput/FormInput';
import LoaderAndMessages from '../../components/logic/loaderAndMessages/LoaderAndMessages';

import './LoginPage.scss';

const LoginPage = () => {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword]   = useState('');

    const dispatch = useDispatch();
    const { message, status }  = useSelector(state => state.auth);

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ useremail, password }));
            setUseremail('');
            setPassword('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='authorization-offer'>
            <div className='authorization'>
                <Title text={'Authorization'} />

                <form className='auth-form' onSubmit={e => e.preventDefault()}>
                    <FormInput
                        id={'email'}
                        type={'email'}
                        title={'Email'}
                        value={useremail}
                        changeFunc={setUseremail}
                        placeholder={'jonsnow@gmail.com'}
                    />
                    <FormInput
                        id={'password'}
                        type={'password'}
                        title={'Password'}
                        value={password}
                        changeFunc={setPassword}
                        placeholder={'********'}
                    />
                    <div className='auth-form_buttons'>
                        <button onClick={handleSubmit}>Go</button>
                        <Link to="/register">Registration</Link>
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

export default LoginPage