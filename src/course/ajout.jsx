import { useState } from "react";

const Ajoutliste = () => {
  const [listes , setListe] = useState([]);
  
  function Ajouter() {
    
  }

  return ( 
    <form action="">
      <label htmlFor="id">id</label>
      <input type="number" name="id"/>

      <label htmlFor="nom">id</label>
      <input type="text" name="nom"/>

      <label htmlFor="prix">prix</label>
      <input type="number" name="prix"/>

      <label htmlFor="couleur">couleur</label>
      <input type="text" name="couleur"/>
      <input type="button" value="ajouter" />

    </form>
   );
}
 
export default Ajoutliste;