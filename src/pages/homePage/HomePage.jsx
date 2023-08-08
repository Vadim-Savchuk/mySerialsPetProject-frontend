import { useState, useEffect }      from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HomeSectionForm    from '../../components/logic/homeSectionForm/HomeSectionForm';
import HomeSectionSerials from '../../components/logic/homeSectionSerials/HomeSectionSerials';
import LoaderAndMessages  from '../../components/logic/loaderAndMessages/LoaderAndMessages';

import { getMySerials } from '../../redux/features/serialsSlice';

import { searching } from '../../utils/index';

import './HomePage.scss';

const HomePage = () => {
    const [inputSearch, setInputSearch] = useState('');
    const [showSerial, setShowSerial]   = useState([]);
    const [iswatching, setIsWatching]   = useState(false);

    const dispatch = useDispatch();

    const { serials, status, message } = useSelector(state => state.serials);
    const watchingSerials = serials.filter(serial => serial.watching === true);

    const searchSerials = searching(showSerial, inputSearch)

    const whoShowSerials = (e) => {
        if (e.target.closest('[data="watching"]')) {
            setShowSerial(watchingSerials);
            setIsWatching(true);
        } else {
            setShowSerial(serials);
            setIsWatching(false);
        }  
    }

    useEffect(() => {
        dispatch(getMySerials())
    }, [dispatch]);

    useEffect(() => {
        setShowSerial(serials);
    }, [serials]);

    return (
        <>
            <HomeSectionForm
                iswatching={iswatching}
                inputSearch={inputSearch}
                whoShowSerials={whoShowSerials}
                setInputSearch={setInputSearch}
            />
            <HomeSectionSerials
                iswatching={iswatching}
                serials={searchSerials}
                showSerial={showSerial}
            />

            <LoaderAndMessages
                message={message}
                isLoader={status}
            />
        </>
    )
}

export default HomePage;