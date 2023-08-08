import './Colections.scss';

const Colections = ({ whoShowSerials, iswatching }) => {
    return (
        <div className='colections' onClick={(e) => whoShowSerials(e)}>
            <button
                data='all'
                className={ !iswatching ? 'active' : ''}
            >All</button>

            <button
                data='watching'
                className={iswatching ? 'active' : ''}
            >Watching</button>
        </div>
    )
}

export default Colections