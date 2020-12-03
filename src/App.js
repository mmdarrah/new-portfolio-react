import './App.scss';
import Layout from './components/Layout';
import DarkMode from './components/DarkMode';
function App() {
  return (
    <div className='App'>
      <DarkMode>
        <Layout />
      </DarkMode>
    </div>
  );
}

export default App;
