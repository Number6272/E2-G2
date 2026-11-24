import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch.jsx'
import { filtrerListe } from '../utils/filtres.js'
import { API_PROJETS, API_FORMATIONS } from '../constantes.js'
import Hero from '../components/Hero.jsx'
import SearchBar from '../components/SearchBar.jsx'
import FilterBar from '../components/FilterBar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CourseCard from '../components/CourseCard.jsx'
import Modal from '../components/Modal.jsx'
import Loader from '../components/Loader.jsx'

const filtresVides = { categorie: '', niveau: '', techno: '' }

function Home() {
  const projets = useFetch(API_PROJETS)
  const formations = useFetch(API_FORMATIONS)

  const [rechercheProjet, setRechercheProjet] = useState('')
  const [filtresProjet, setFiltresProjet] = useState(filtresVides)
  const [projetChoisi, setProjetChoisi] = useState(null)

  const [rechercheFormation, setRechercheFormation] = useState('')
  const [filtresFormation, setFiltresFormation] = useState(filtresVides)
  const [formationChoisie, setFormationChoisie] = useState(null)

  let projetsFiltres = []
  if (projets.donnees) {
    projetsFiltres = filtrerListe(projets.donnees.projects, rechercheProjet, filtresProjet)
  }

  let formationsFiltrees = []
  if (formations.donnees) {
    const liste = formations.donnees.courses
    formationsFiltrees = filtrerListe(liste, rechercheFormation, filtresFormation)
  }

  return (
    <>
      <Hero />

      <section id="projets">
        <h2>Nos projets</h2>

        {projets.chargement && <Loader />}
        {projets.erreur && <p className="alert alert-danger">{projets.erreur}</p>}

        {projets.donnees && (
          <>
            <div className="d-flex">
              <SearchBar
                recherche={rechercheProjet}
                changerRecherche={setRechercheProjet}
              />
              <FilterBar
                technologies={projets.donnees.technologies}
                categories={projets.donnees.categories}
                filtres={filtresProjet}
                changerFiltres={setFiltresProjet}
              />
            </div>

            <div className="row">
              {projetsFiltres.map((projet) => (
                <div
                  key={projet.id}
                  className="col-md-4"
                >
                  <ProjectCard
                    projet={projet}
                    ouvrirDetails={setProjetChoisi}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      <section id="formations">
        <h2>Nos formations</h2>

        {formations.chargement && <Loader />}
        {formations.erreur && <p className="alert alert-danger">{formations.erreur}</p>}

        {formations.donnees && (
          <>
            <div className="d-flex">
              <SearchBar
                recherche={rechercheFormation}
                changerRecherche={setRechercheFormation}
              />
              <FilterBar
                categories={formations.donnees.categories}
                levels={formations.donnees.levels}
                technologies={formations.donnees.technologies}
                filtres={filtresFormation}
                changerFiltres={setFiltresFormation}
              />
            </div>

            <div className="row">
              {formationsFiltrees.map((formation) => (
                <div
                  key={formation.id}
                  className="col-md-4"
                >
                  <CourseCard
                    formation={formation}
                    ouvrirDetails={setFormationChoisie}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {projetChoisi && (
        <Modal
          titre={projetChoisi.title}
          fermer={() => setProjetChoisi(null)}
        >
          <p>
            {projetChoisi.description}
          </p>
          <p>Durée : {projetChoisi.duration}</p>
          <p>Technologies : {projetChoisi.technologies.join(', ')}</p>
        </Modal>
      )}

      {formationChoisie && (
        <Modal
          titre={formationChoisie.title}
          fermer={() => setFormationChoisie(null)}
        >
          <p>
            {formationChoisie.description}
          </p>
          <p>Formateur : {formationChoisie.instructor}</p>
          <p>Technologies : {formationChoisie.technologies.join(', ')}</p>

          <Link
            to={'/inscription/' + formationChoisie.id}
            className="btn btn-primary"
          >
            S'inscrire
          </Link>
        </Modal>
      )}
    </>
  )
}

export default Home