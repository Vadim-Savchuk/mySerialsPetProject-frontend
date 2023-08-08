import './FormInput.scss';

const FormInput = (props) => {
    const { id, value, changeFunc, title, type = 'text', placeholder = '...' } = props;
    
    return (
        <>
            <label htmlFor={id}>{title}</label>
            <input
                id={id}
                type={type}
                value={value}
                className='form-input'
                placeholder={placeholder}
                onChange={e => changeFunc(e.target.value)}

            />
        </>
    )
}

export default FormInput