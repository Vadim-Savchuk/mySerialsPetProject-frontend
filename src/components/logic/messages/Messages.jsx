import { useDispatch, useSelector } from 'react-redux';

import MiniButton from '../../ui/miniButton/MiniButton';

import { removeMessageHandler } from '../../../redux/features/messageSlice';

import { buttonsImages } from '../../../data/img';

import './Messages.scss';

const Messages = () => {
    const { messages } = useSelector(state => state.messages);
    const dispatch     = useDispatch();

    return (
        <ul className='messages'>
            {messages.map((message, index) => {
                return (
                    <li key={index} className='message'>
                        <p className='message_text'>{message}</p>

                        <div className='message-offer'>
                            <MiniButton
                                img={buttonsImages.close}
                                alt={'Remove'}
                                func={() => dispatch(removeMessageHandler(index))}
                            />
                        </div>
                    </li>
                )
            }).slice(-5)}
        </ul>
    )
}

export default Messages