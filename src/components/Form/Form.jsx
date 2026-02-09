import { useState } from 'react';
import styles from '../Form/Form.module.css'
import Swal from "sweetalert2";
function Form({maxGuests}){
  console.log(import.meta.env.VITE_API_URL);
  const [dolazi, setDolazi] = useState('');
  const [ime, setIme] = useState('');
  const [dodatniGosti, setDodatniGosti] = useState([]);
  const [napomena, setNapomena] = useState('');

  const [dodatnaPolja, setDodatnaPolja] = useState(0); 
  const [selektovanoDugme, setSelektovanoDugme] = useState(null);

  const dodajOsobe = (broj) => {
       if (selektovanoDugme === broj) {
      setDodatnaPolja(0);
      setSelektovanoDugme(null);
       setDodatniGosti([]);
    } else {
      setDodatnaPolja(broj);
      setSelektovanoDugme(broj);
      setDodatniGosti(Array(broj).fill(''));
    }
  };

   const handleDodatniGostiChange = (index, value) => {
    const novi = [...dodatniGosti];
    novi[index] = value;
    setDodatniGosti(novi);
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

  if (!dolazi) {
    Swal.fire({
    title: "Greška!",
    text: "Izaberite da li dolazite ili ne",
    icon: "error",
    confirmButtonColor: "rgba(121,0,0,1)",
    confirmButtonText: "Pokušaj ponovo",
});
    return;
  }

  if (!ime.trim()) {
    Swal.fire({
  title: "Greška!",
  text: "Unesite ime i prezime.",
  icon: "error",
  confirmButtonColor: "rgba(121,0,0,1)",
  confirmButtonText: "Pokušaj ponovo",
});
    return;
  }

  // opcionalno: validacija dodatnih gostiju
  if (dodatnaPolja > 0 && dodatniGosti.some(g => !g.trim())) {
    Swal.fire({
  title: "Greška!",
  text: "Unesite imena svih dodatnih gostiju.",
  icon: "error",
  confirmButtonColor: "rgba(121,0,0,1)",
  confirmButtonText: "Pokušaj ponovo",
});
    return;
  }

    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/gosti`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dolazi,
        ime,
        dodatniGosti,
        napomena
      })
    });

    if (!response.ok) {
      throw new Error("Došlo je do greške");
    }
    Swal.fire({
  title: "Hvala na odgovoru!",
  text: "Vaš odgovor je uspešno zabeležen!",
  icon: "success",
  confirmButtonColor: "rgba(121,0,0,1)", // boja dugmeta
  confirmButtonText: "OK",
});
  } catch(err){
      Swal.fire({
  title: "Greška!",
  text: "Došlo je do greške prilikom slanja odgovora.",
  icon: "error",
  confirmButtonColor: "rgba(121,0,0,1)",
  confirmButtonText: "Pokušaj ponovo",
});
  }
  };


    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className={styles.potvrda}>
                <p className={styles.potvrdj}>Potvrđujem dolazak:</p>
                <div className={styles.ratio}>
                    <label className={styles.labelal}>
                        <input className={styles.inputl} type="radio" name="prisustvo" value="DA" onChange={e => setDolazi(e.target.value)}/>
                            DA
                    </label>

                    <label className={styles.labelad}>
                        <input className={styles.inputd} type="radio" name="prisustvo" value="NE" onChange={e => setDolazi(e.target.value)}/>
                        NE
                    </label>
                </div>
            </div>
            <div className={styles.potvrda}>
                <p className={styles.imeP}>Ime i prezime:</p>
             <input className={styles.textInput}  type="text" onChange={e => setIme(e.target.value)} />
             </div>

             {/* <div className={styles.plus}>
                <p className={styles.imeP}>Izaberite opciju:</p>
                <div className={styles.dugmici}>
                {/* <button className={styles.dugme}>+1 osoba</button>
                <button className={styles.dugme}>+2 osobe</button>
                <button className={styles.dugme}>+3 osobe</button> */}

                 {/* {[1, 2, 3].map((broj) => (
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
             */}

                 {maxGuests > 0 && (
                  <div className={styles.plus}>
                    <p className={styles.imeP}>Izaberite opciju:</p>
                    <div className={maxGuests === 1 ? styles.dugmiciSpecial : styles.dugmici}>
                      {[1, 2, 3].filter((broj) => broj <= maxGuests).map((broj) => (
                        <button
                         type="button" 
                          key={broj}
                          className={`${styles.dugme} ${selektovanoDugme === broj ? styles.dugmeSelektovano : ''}`}
                          onClick={() => dodajOsobe(broj)}
                        >
                          +{broj} {broj === 1 ? 'osoba' : 'osobe'}
                        </button>
              ))
            }
          </div>
        </div>
      )}

      {Array.from({ length: dodatnaPolja }, (_, i) => (
        <div className={styles.plus} key={i}>
          <div className={styles.potvrda}>
            <p className={styles.imeP}>Ime i prezime:</p>
            <input className={styles.textInput} type="text" onChange={e => handleDodatniGostiChange(i, e.target.value)}/>
          </div>
        </div>
      ))}
             <div className={styles.plus}>
                <p className={styles.imeP}>Napomena:</p>
                <textarea className={styles.napomenaInput} onChange={e => setNapomena(e.target.value)}/>
             </div>
            <div className={styles.centriraj}>
             <button type = "submit" className={styles.dugmePotvrdi}>Potvrdi</button>
            </div>
        </form>
    )
}

export default Form;