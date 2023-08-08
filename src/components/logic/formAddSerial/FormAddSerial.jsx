import { useState }    from 'react';
import { useDispatch } from 'react-redux';

import { addSerial } from '../../../redux/features/serialsSlice';

import Title      from '../../ui/title/Title';
import MiniButton from '../../ui/miniButton/MiniButton';
import NumButton  from '../../ui/numButton/NumButton';
import NameInput  from '../../ui/nameInput/NameInput';

import axios from 'axios';

import { miniSaveButton, miniCloseButton } from '../../../data/img';

import './FormAddSerial.scss';

const FormAddSerial = ({ activeAddForm, setActiveAddForm }) => {
    const [nameSerial, setNameSerial]     = useState('');
    const [numberSeason, setNumberSeason] = useState(1);
    const [numberSeries, setNumberSeries] = useState(1);

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            dispatch(addSerial({
                title: nameSerial,
                season: numberSeason,
                series: numberSeries,
            }));

            setNameSerial('');
            setNumberSeason(1);
            setNumberSeries(1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={`add-serial-box ${activeAddForm && 'active'}`}>
            <Title text={'Add serial'}/>
            
            <form className='add-serial-form' onSubmit={e => e.preventDefault()}>

                {/* Add series */}
                <div className='add-serial-form-row'>
                    <h4>Series {numberSeries}</h4>
                    <div className="add-serial-form-buttons">
                        <NumButton
                            text={'+'}
                            func={() => setNumberSeries(prev => prev + 1)}
                        />
                        <NumButton
                            text={'-'}
                            func={() => setNumberSeries(prev => prev - 1)}
                        />
                    </div>
                </div>

                {/* Add Season */}
                <div className='add-serial-form-row'>
                    <h4>Season {numberSeason}</h4>
                    <div className="add-serial-form-buttons">
                        <NumButton
                            text={'+'}
                            func={() => setNumberSeason(prev => prev + 1)}
                        />
                        <NumButton
                            text={'-'}
                            func={() => setNumberSeason(prev => prev - 1)}
                        />
                    </div>
                </div>

                {/* Add name */}
                <div className='add-serial-form-row'>

                    <NameInput
                        value={nameSerial}
                        placeholder={'Name'}
                        changeFunc={setNameSerial}
                    />

                    <div className="add-serial-form-buttons">
                        <MiniButton
                            img={miniSaveButton.img}
                            alt={miniSaveButton.alt}
                            func={handleSubmit}
                        />
                        <MiniButton
                            img={miniCloseButton.img}
                            alt={miniCloseButton.alt}
                            func={() => setActiveAddForm(false)}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormAddSerial