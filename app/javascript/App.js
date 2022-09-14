import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyStore from './redux/MyStore';
import GetAPI from './redux/getAPI';
import Greeting from './Greeting';

export default function App() {
  MyStore.dispatch(GetAPI());
  return (
    <Provider store={MyStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
