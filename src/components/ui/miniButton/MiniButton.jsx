import './MiniButton.scss';

const MiniButton = ({ img, func = () => { }, alt, active = false }) => {
    return (
        <button className={active ? 'mini-button active' : 'mini-button'} onClick={func}>
            <img src={img} alt={alt} />
        </button>
    )
}

export default MiniButton