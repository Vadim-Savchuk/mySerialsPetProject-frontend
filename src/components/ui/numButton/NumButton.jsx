import './NumButton.scss';

const NumButton = ({ active = false, func = () => { }, text }) => {

    return (
        <button className={active ? 'num-button active' : 'num-button'} onClick={func}>{text}</button>
    )
}

export default NumButton