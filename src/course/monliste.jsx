import React, { useState } from "react";
import '../ajout.css'
const Monliste = () => {
  const [listes, setListe] = useState([
    { id: 1, Nom: 'glose', prix: 200, couleur: 'rouge' },
    { id: 2, Nom: 'cil', prix: 500, couleur: 'noir' },
    { id: 3, Nom: 'consileur', prix: 6000, couleur: 'maron' },
    { id: 4, Nom: 'ongle', prix: 3500, couleur: 'bleu' },
    { id: 5, Nom: 'font de teint', prix: 10000, couleur: 'blanc' }
  ]);

  const [inputValues, setInputValues] = useState({ id: 0, Nom: '', prix: 0, couleur: '' });

  const Ajoutliste = e => {
    e.preventDefault();
    if (inputValues.id && inputValues.Nom && inputValues.prix && inputValues.couleur) {
      setListe([...listes, inputValues]);
      setInputValues({ id: 0, Nom: '', prix: 0, couleur: '' });
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="ajout">
      <div className="form">
        <form onSubmit={Ajoutliste}>
          <label htmlFor="id">id</label>
          <input type="number" name="id" value={inputValues.id} onChange={handleInputChange} />

          <label htmlFor="nom">Nom</label>
          <input type="text" name="Nom" value={inputValues.Nom} onChange={handleInputChange} />

          <label htmlFor="prix">prix</label>
          <input type="number" name="prix" value={inputValues.prix} onChange={handleInputChange} />

          <label htmlFor="couleur">couleur</label>
          <input type="text" name="couleur" value={inputValues.couleur} onChange={handleInputChange} /><br /><br />
          <input type="submit" value="ajouter" />
        </form>
      </div>
      <div className="tablee">
        <table className="table">
          <thead>
            <tr scope="row">
              <th scope="col">id</th><th scope="col">Nom</th><th scope="col">prix</th><th scope="col">couleur</th><th>action</th>
            </tr>
          </thead>
          <tbody>
            {listes.map((item) => (
              <tr key={item.id} scope="row">
                <td>{item.id}</td>
                <td>{item.Nom}</td>
                <td>{item.prix}</td>
                <td>{item.couleur}</td>
                 <td><button>acheter</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Monliste;
