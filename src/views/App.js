import './scss/App.scss';
import background from '../img/website-development.jpg'
import Header from '../components/header'
import PlayerCard from '../components/player_card';

function App() {
  return (
    <>
      <Header />
      <main id='home' style={{ background: `url(${background})` }}>
        <PlayerCard />   
      </main>
    </>
  );
}

export default App;
