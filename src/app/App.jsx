import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter }            from 'react-router-dom';

import { getUser } from '../redux/features/authSlice';

import AppRouter from '../components/hoc/appRouter/AppRouter';

const App = () => {
    const dispatch = useDispatch();
    const { thema } = useSelector(state => state.thema)

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]);

    useEffect(() => {
        document.body.setAttribute('data-thema', thema)
    }, [thema])

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
