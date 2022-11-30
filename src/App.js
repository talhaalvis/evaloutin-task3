
import { Box } from '@mui/material';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import Login from './pages/Login'
import Identity from './pages/Identity'
import './App.css';
import { Provider } from 'react-redux';
import store from './store/Store'
import Profile from './pages/Profile'
import Protectes from './components/Protectes';

function App() {
  return (
  
    <Box>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path="/identity" element={<Protectes Component={Identity} />} />
         {/* <Route path="/profile" element={<Protectes Component={Profile} />} />   */}
       <Route path="/identity/profile" element={<Protectes Component={Profile} />} />  
       
     
      </Routes>
      </BrowserRouter>
      </Provider>

    </Box>
  );
}

export default App;
