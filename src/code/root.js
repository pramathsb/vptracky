import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeTemplate from './templates/Home';
import Vehicles from './pages/Vehicles';
import VehicleInfo from './components/VehicleInfo';
import './styles/global.scss';
import Home from './pages/Home';
import axios from 'axios';
import { rootReducer } from './state/reducer';
import Loader from './components/common/Loader';

function Vptracky() {
  const [store, dispatch] = React.useReducer(rootReducer, {});
  React.useEffect(() => {
    (async () => {
      dispatch({ type: 'SHOW_LOADER' });
      await axios.get('/content/global.json').then(({ data }) => {
        console.debug('API: Content');
        dispatch({ type: 'ADD_CONTENT', payload: data });
      });
      dispatch({ type: 'HIDE_LOADER' });
    })();
  }, []);

  const { TXT } = store;

  return (
    <>
      {store.loader && <Loader />}
      {TXT && (
        <Routes>
          <Route element={<HomeTemplate store={store} dispatch={dispatch} />}>
            <Route index element={<Home store={store} dispatch={dispatch} />} />
            <Route path='vehicles' element={<Vehicles store={store} dispatch={dispatch} />} />
            <Route path='vehicles'>
              <Route path=':vehicleId/*' element={<VehicleInfo store={store} dispatch={dispatch} />}>
                <Route path=':view' element={<VehicleInfo store={store} dispatch={dispatch} />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default Vptracky;
