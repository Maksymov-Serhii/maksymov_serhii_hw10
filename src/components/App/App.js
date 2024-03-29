import { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorExamples from '../ErrorExamples/ErrorExamples';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AgeConfirmationPage from '../AgeConfirmationPage/AgeConfirmationPage';
import PrivatePage from '../PrivatePage/PrivatePage';
import Products from '../Products/Products';
import Contacts from '../Contacts/Contacts';
import MainPage from '../MainPage/MainPage';
import ProductItem from '../ProductItem/ProductItem';
import Menu from '../Menu/Menu';

function App() {

  const [isUserOver18, setIsUserOver18] = useState(false);

  const handleUserAgeConfirmation = () => {
    setIsUserOver18(true);
  };

  return (
    <div className="App">
      <h2>Error App</h2>
      <ErrorBoundary>
        <ErrorExamples />
      </ErrorBoundary>

      <div className='shop'>
        <h3>Internet Shop</h3>
        <p>WARNING! This App has some errors in ProductItems Component</p>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<ErrorBoundary><ProductItem /></ErrorBoundary>} />
            {!isUserOver18 && (
              <Route
                path="/private"
                element={<Navigate to="/age-confirmation" replace />}
              />
            )}
            {isUserOver18 && (
              <Route path="/private" element={<ErrorBoundary><PrivatePage /></ErrorBoundary>} />
            )}
            <Route
              path="/age-confirmation"
              element={
                <ErrorBoundary>
                  <AgeConfirmationPage
                  onAgeConfirmation={handleUserAgeConfirmation}
                  />
                </ErrorBoundary>                
              }
            />
          </Routes>
          </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
