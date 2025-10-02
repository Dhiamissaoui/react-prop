import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlayersList from './component/PlayersList';

function App() {
  return (
    <div className="container-fluid" style={{
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      padding: '30px 20px'
    }}>
      <div className="container">
        <PlayersList />
      </div>
    </div>
  );
}

export default App;
