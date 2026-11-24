import PropTypes from 'prop-types'

function FilterBar({ categories, levels, technologies, filtres, changerFiltres }) {
  function changerSelect(e) {
    changerFiltres({ ...filtres, [e.target.name]: e.target.value })
  }

  function afficherSelect(nom, options, texte) {
    if (!options) {
      return null
    }

    return (
      <select
        name={nom}
        className="form-select"
        value={filtres[nom]}
        onChange={changerSelect}
      >
        <option value="">{texte}</option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    )
  }

  return (
    <div className="d-flex">
      {afficherSelect('categorie', categories, 'Catégorie')}
      {afficherSelect('niveau', levels, 'Niveau')}
      {afficherSelect('techno', technologies, 'Technologie')}
    </div>
  )
}

FilterBar.propTypes = {
  categories: PropTypes.array,
  levels: PropTypes.array,
  technologies: PropTypes.array,
  filtres: PropTypes.object.isRequired,
  changerFiltres: PropTypes.func.isRequired,
}

export default FilterBar