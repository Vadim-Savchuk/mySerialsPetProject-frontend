import './NameInput.scss';

const NameInput = (props) => {
    const {
        value,
        changeFunc,
        type = 'text',
        placeholder = '...',
    } = props;

    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={e => changeFunc(e.target.value)}
            className='input-name'
        />
    )
}

export default NameInput