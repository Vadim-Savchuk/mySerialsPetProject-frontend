import MiniButton from '../miniButton/MiniButton';

import { buttonsImages } from '../../../data/img';

import './Username.scss';

const Username = (props) => {
    const { time, username, isUpdate, setUpdateUsername, value, setIsUpdate, updateHandlerUser } = props;

    return (
        <div className='name'>
            <p>{time}</p>

            {isUpdate
                ? (
                    <div className='updated-box'>
                        <input
                            type='text'
                            value={value}
                            onChange={e => setUpdateUsername(e.target.value)}
                        />

                        <MiniButton
                            img={buttonsImages.save}
                            alt={'Save'}
                            func={updateHandlerUser}
                        />
                    </div>
                )
                : (
                    <p onClick={() => setIsUpdate(true)}>{username}</p>
                )
            }

        </div>
    )
}

export default Username