import Empty  from '../../ui/empty/Empty';
import Title  from '../../ui/title/Title';
import Serial from '../serial/Serial';

import './HomeSectionSerials.scss';

const HomeSectionSerials = ({ serials, iswatching, showSerial }) => {
    return (
        <section className='section-serials'>

            {iswatching
                ? <Title text={'Watching'} />
                : <Title text={'My serials'} />
            }
            
            {showSerial.length <= 0 && <Empty />}

            <ul className='serials'>
                {serials.map(serial => {
                    return <Serial
                        key={serial._id}
                        serial={serial}
                    />
                })}
            </ul>
        </section>
    )
}

export default HomeSectionSerials