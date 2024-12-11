import Landing from './screens/Landing';
import Main from './screens/Main';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/home" element={<Main></Main>}></Route>
      </Routes>
  );
}

export default App;
