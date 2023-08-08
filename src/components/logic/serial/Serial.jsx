import { useCallback, useEffect, useState } from 'react';
import { useDispatch }                      from 'react-redux';

import { removeSerial, editSerial } from '../../../redux/features/serialsSlice';

import MiniButton from '../../ui/miniButton/MiniButton';
import NumButton  from '../../ui/numButton/NumButton';

import { miniSaveButton, miniEditButton, miniDelateButton, miniPinButton, miniPinActiveButton } from '../../../data/img';

import './Serial.scss';

const Serial = ({ serial }) => {
    const [editTitle, setEditTitle]       = useState(serial.title);
    const [editSeason, setEditSeason]     = useState(serial.season);
    const [editSeries, setEditSeries]     = useState(serial.series);
    const [editWatching, setEditWatching] = useState(serial.watching);

    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();

    const deleteSerial = () => {
        try {
            dispatch(removeSerial(serial._id));
        } catch (error) {
            console.log(error);
        }
    }

    const updateSerial = useCallback(() => {
        try {
            const updatedSerial = {
                id: serial._id,
                title: editTitle,
                season: editSeason,
                series: editSeries,
                watching: editWatching,
            }

            dispatch(editSerial(updatedSerial));
            setIsEdit(false);
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, editSeason, editSeries, editTitle, serial._id, editWatching])

    useEffect(() => {
        updateSerial()
        // eslint-disable-next-line
    }, [editSeason, editSeries, editWatching])

    return (
        <li className='serial'>
            {/* Series */}
            <div className='serial-row'>
                <h4 className='serial-subtitle'>Series {editSeries}</h4>
                <div className="serial-buttons">
                    <NumButton
                        text={'+'}
                        func={() => setEditSeries(prev => prev + 1)}
                    />
                    <NumButton
                        text={'-'}
                        func={() => setEditSeries(prev => prev - 1)}
                    />
                </div>
            </div>

            {/* Season */}
            <div className='serial-row'>
                <h4 className='serial-subtitle'>Season {editSeason}</h4>
                <div className="serial-buttons">
                    <NumButton
                        text={'+'}
                        func={() => setEditSeason(prev => prev + 1)}
                    />
                    <NumButton
                        text={'-'}
                        func={() => setEditSeason(prev => prev - 1)}
                    />
                </div>
            </div>

            {/* Name */}
            <div className='serial-row'>
                {isEdit
                    ?
                    <input
                        autoFocus
                        type='text'
                        value={editTitle}
                        className='edit_input'
                        onChange={e => setEditTitle(e.target.value)}
                    />
                    :
                    <h3 className='serial-title'>{editTitle}</h3>

                }
                <div className="serial-buttons">

                    {isEdit && (
                        <MiniButton
                            func={updateSerial}
                            img={miniSaveButton.img}
                            alt={miniSaveButton.alt}
                        />
                    )}

                    {!isEdit && (
                        <>
                            <MiniButton
                                img={miniEditButton.img}
                                alt={miniEditButton.alt}
                                func={() => setIsEdit(true)}
                            />
                            <MiniButton
                                func={() => setEditWatching(!editWatching)}
                                img={miniPinButton.img}
                                alt={miniPinButton.alt}
                                active={serial.watching}
                            />
                            <MiniButton
                                func={deleteSerial}
                                img={miniDelateButton.img}
                                alt={miniDelateButton.alt}
                            />
                        </>
                    )}

                </div>
            </div>
        </li>
    )
}

export default Serial