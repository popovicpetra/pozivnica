import { useState } from 'react';
import styles from '../Form/Form.module.css'
function Form(){

    const [dodatnaPolja, setDodatnaPolja] = useState(0); 
    const [selektovanoDugme, setSelektovanoDugme] = useState(null);

  const dodajOsobe = (broj) => {
       if (selektovanoDugme === broj) {
      // ako je dugme već selektovano → unselect
      setDodatnaPolja(0);
      setSelektovanoDugme(null);
    } else {
      // inače selektuj i dodaj polja
      setDodatnaPolja(broj);
      setSelektovanoDugme(broj);
    }
  };
    return (
        <div className={styles.container}>
            <div className={styles.potvrda}>
                <p className={styles.potvrdj}>Potvrđujem dolazak:</p>
                <div className={styles.ratio}>
                    <label className={styles.labelal}>
                        <input className={styles.inputl} type="radio" name="prisustvo" value="DA"/>
                            DA
                    </label>

                    <label className={styles.labelad}>
                        <input className={styles.inputd} type="radio" name="prisustvo" value="NE"/>
                        NE
                    </label>
                </div>
            </div>
            <div className={styles.potvrda}>
                <p className={styles.imeP}>Ime i prezime:</p>
             <input className={styles.textInput}  type="text" />
             </div>

             <div className={styles.plus}>
                <p className={styles.imeP}>Izaberite opciju:</p>
                <div className={styles.dugmici}>
                {/* <button className={styles.dugme}>+1 osoba</button>
                <button className={styles.dugme}>+2 osobe</button>
                <button className={styles.dugme}>+3 osobe</button> */}

                 {[1, 2, 3].map((broj) => (
            <button
              key={broj}
              className={`${styles.dugme} ${selektovanoDugme === broj ? styles.dugmeSelektovano : ''}`}
              onClick={() => dodajOsobe(broj)}
            >
              +{broj} {broj === 1 ? 'osoba' : 'osobe'}
            </button>
          ))}
                </div>
             </div>
           
                {Array.from({ length: dodatnaPolja }, (_, i) => (
                      <div className={styles.plus} key={i}>
                    <div className={styles.potvrda} >
                    <p className={styles.imeP}>Ime i prezime:</p>
                    <input className={styles.textInput} type="text" />
                    </div>
                     </div>
                ))}
            
             <div className={styles.plus}>
                <p className={styles.imeP}>Napomena:</p>
                <textarea className={styles.napomenaInput}/>
             </div>
            <div className={styles.centriraj}>
             <button className={styles.dugmePotvrdi}>Potvrdi</button>
            </div>
        </div>
    )
}

export default Form;