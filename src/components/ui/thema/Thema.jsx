import { useDispatch, useSelector } from 'react-redux';

import { thameImages } from '../../../data/img';
import { handlerThema } from '../../../redux/features/themaSlice';

import './Thema.scss';

const Thema = () => {
    const { thema } = useSelector(state => state.thema);
    const dispatch = useDispatch()

    const editThema = () => {
        if (thema === 'light') {
            return dispatch(handlerThema('dark'))
        } else {
            return dispatch(handlerThema('light'))
        }
    }

    return (
        <button className='thema' onClick={editThema}>
            <img src={thema === 'light' ? thameImages.light : thameImages.dark} alt='Thema' />
        </button>
    )
}

export default Thema