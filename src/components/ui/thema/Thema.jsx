import { useDispatch, useSelector }    from 'react-redux';

import { themaLightImg, themaDarkImg } from '../../../data/img';
import { handlerThema }                from '../../../redux/features/themaSlice';

import './Thema.scss';

const Thema = () => {
    const { thema } = useSelector(state => state.thema);
    const dispatch  = useDispatch()

    const editThema = () => {
        if(thema === 'light') {
            return dispatch(handlerThema('dark'))
        } else {
            return dispatch(handlerThema('light'))
        }
    }

    return (
        <button className='thema' onClick={editThema}>
            <img src={thema === 'light' ? themaLightImg.img : themaDarkImg.img} alt='Thema' />
        </button>
    )
}

export default Thema