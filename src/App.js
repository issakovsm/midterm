import './App.css';
import SideBar from './components/sidebar/sidebar';
import Feed from './components/feed/feed';

function App() {
  return (
    <div className="MainApp">
      <SideBar />
      <Feed />
    </div>
  );
}

export default App;
