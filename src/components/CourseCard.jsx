import PropTypes from 'prop-types'

function CourseCard({ formation, ouvrirDetails }) {
  return (
    <article className="card">
      <img
        src={formation.image}
        alt={formation.title}
        className="carte-image"
      />

      <div className="card-body">
        <h3>{formation.title}</h3>
        <p>{formation.duration} - {formation.price} €</p>
        <p>{formation.category} - {formation.level}</p>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => ouvrirDetails(formation)}
        >
          Voir le détail
        </button>
      </div>
    </article>
  )
}

CourseCard.propTypes = {
  formation: PropTypes.object.isRequired,
  ouvrirDetails: PropTypes.func.isRequired,
}

export default CourseCard