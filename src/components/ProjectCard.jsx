import PropTypes from 'prop-types'

function ProjectCard({ projet, ouvrirDetails }) {
  return (
    <article className="card">
      <img
        src={projet.image}
        alt={projet.title}
        className="carte-image"
      />

      <div className="card-body">
        <h3>{projet.title}</h3>
        <p>{projet.client} - {projet.year}</p>
        <p>{projet.category}</p>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => ouvrirDetails(projet)}
        >
          Voir le détail
        </button>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
  projet: PropTypes.object.isRequired,
  ouvrirDetails: PropTypes.func.isRequired,
}

export default ProjectCard