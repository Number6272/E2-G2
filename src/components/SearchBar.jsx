import PropTypes from 'prop-types'

function SearchBar({ recherche, changerRecherche }) {
  return (
    <input
      type="search"
      className="form-control"
      placeholder="Rechercher..."
      value={recherche}
      onChange={(e) => changerRecherche(e.target.value)}
    />
  )
}

SearchBar.propTypes = {
  recherche: PropTypes.string.isRequired,
  changerRecherche: PropTypes.func.isRequired,
}

export default SearchBar