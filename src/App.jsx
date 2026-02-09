
// import WithThree from './components/WithThree/WithThree'
// function App() {


//   return (
//     <>
//       <WithThree/>
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WithThree from "./components/WithThree/WithThree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cekamo-vas" element={<WithThree maxGuests={0} />} />
        <Route path="/vidimo-se" element={<WithThree maxGuests={1} />} />
        <Route path="/vidimo-se-plus2" element={<WithThree maxGuests={2} />} />
        <Route path="/vidimo-se-plus3" element={<WithThree maxGuests={3} />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
