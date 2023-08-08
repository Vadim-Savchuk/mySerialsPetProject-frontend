import { useState } from 'react';

import Colections    from '../../ui/colections/Colections';
import Search        from '../../ui/search/Search';
import FormAddSerial from '../formAddSerial/FormAddSerial';

import './HomeSectionForm.scss';

const HomeSectionForm = ({ setInputSearch, inputSearch, whoShowSerials, iswatching }) => {
    const [activeAddForm, setActiveAddForm] = useState(false);

    return (
        <section className='section-form'>
            <Colections
                iswatching={iswatching}
                whoShowSerials={whoShowSerials}
            />

            <Search
                inputSearch={inputSearch}
                activeAddForm={activeAddForm}
                setInputSearch={setInputSearch}
                setActiveAddForm={setActiveAddForm}
            />

            <FormAddSerial
                activeAddForm={activeAddForm}
                setActiveAddForm={setActiveAddForm}
            />
        </section>
    )
}

export default HomeSectionForm;