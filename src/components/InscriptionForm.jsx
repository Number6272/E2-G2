import { useState } from 'react'
import PropTypes from 'prop-types'
import { validerInscription } from '../utils/validation.js'

function InscriptionForm({ formations, idFormation }) {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    formation: idFormation || '',
  })
  const [erreurs, setErreurs] = useState([])
  const [envoye, setEnvoye] = useState(false)

  function changerChamp(e) {
    setFormulaire({ ...formulaire, [e.target.name]: e.target.value })
  }

  function envoyerFormulaire(e) {
    e.preventDefault()

    const tmp = validerInscription(formulaire)
    setErreurs(tmp)

    if (tmp.length === 0) {
      setEnvoye(true)
    }
  }

  if (envoye) {
    return (
      <p className="alert alert-success">
        Inscription enregistrée, merci {formulaire.prenom} !
      </p>
    )
  }

  return (
    <form
      id="inscription-form"
      onSubmit={envoyerFormulaire}
    >
      {erreurs.length > 0 && (
        <ul className="alert alert-danger">
          {erreurs.map((erreur) => <li key={erreur}>{erreur}</li>)}
        </ul>
      )}

      <fieldset>
        <legend>Informations</legend>

        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          className="form-control"
          value={formulaire.nom}
          onChange={changerChamp}
          required
        />

        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          className="form-control"
          value={formulaire.prenom}
          onChange={changerChamp}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={formulaire.email}
          onChange={changerChamp}
          required
        />

        <label htmlFor="telephone">Téléphone</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          className="form-control"
          pattern="0[1-9][0-9]{8}"
          placeholder="0612345678"
          value={formulaire.telephone}
          onChange={changerChamp}
          required
        />
      </fieldset>

      <fieldset>
        <legend>Formation</legend>

        <label htmlFor="formation">Formation choisie</label>
        <select
          id="formation"
          name="formation"
          className="form-select"
          value={formulaire.formation}
          onChange={changerChamp}
          required
        >
          <option value="">Choisir une formation</option>
          {formations.map((f) => (
            <option
              key={f.id}
              value={f.id}
            >
              {f.title}
            </option>
          ))}
        </select>
      </fieldset>

      <button
        type="submit"
        className="btn btn-primary"
      >
        S'inscrire
      </button>
    </form>
  )
}

InscriptionForm.propTypes = {
  formations: PropTypes.array.isRequired,
  idFormation: PropTypes.string,
}

export default InscriptionForm