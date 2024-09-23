import './App.css';
import RouterData from './routes/index';
import { RouterProvider } from 'react-router-dom';

function App() {
  const route = RouterData();
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
