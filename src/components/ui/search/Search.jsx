import './Search.scss';

const Search = ({ activeAddForm, setActiveAddForm, inputSearch, setInputSearch }) => {

    return (
        <form className='search-form' onSubmit={e => e.preventDefault()}>
            <input
                type="text"
                value={inputSearch}
                placeholder='Search'
                className='search-form_input'
                onChange={e => setInputSearch(e.target.value)}
            />

            {!activeAddForm && <button className='search-form_add-serial' onClick={() => setActiveAddForm(true)}>&#43;</button>}
        </form>
    )
}

export default Search