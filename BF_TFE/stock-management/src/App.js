import { useRoutes } from 'react-router-dom';
import './App.css';
import Header from './containers/header/header';
import NavBar from './containers/navbar/nav-bar';
import appRoute from './routes/app.route';

//MUI IMPORT
// import { Button, TextField, Typography } from '@mui/material';
// import { Save as SaveIcon } from '@mui/icons-material';


function App() {

  const routes = useRoutes(appRoute)

  return (
    <div className="App">
      {/* <NavBar />
      <div>
        <main>{routes}</main>
      </div> */}
      <Header />
    </div>
  );
}

export default App;
