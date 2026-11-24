import PropTypes from 'prop-types'

function Modal({ titre, fermer, children }) {
  return (
    <div className="modal modal-ouverte">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{titre}</h2>
            <button
              type="button"
              className="btn-close"
              onClick={fermer}
            />
          </div>

          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  titre: PropTypes.string.isRequired,
  fermer: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Modal