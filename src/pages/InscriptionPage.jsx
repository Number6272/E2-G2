import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch.jsx'
import Loader from '../components/Loader.jsx'
import InscriptionForm from '../components/InscriptionForm.jsx'
import { API_FORMATIONS } from '../constantes.js'

function InscriptionPage() {
  const { idFormation } = useParams()
  const { donnees, chargement, erreur } = useFetch(API_FORMATIONS)

  return (
    <section>
      <h1>Inscription</h1>

      {chargement && <Loader />}
      {erreur && <p className="alert alert-danger">{erreur}</p>}

      {donnees && (
        <InscriptionForm
          formations={donnees.courses}
          idFormation={idFormation}
        />
      )}
    </section>
  )
}

export default InscriptionPage