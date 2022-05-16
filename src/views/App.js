import './scss/App.scss';
import background from '../img/website-development.jpg'
import Header from '../components/header'

function App() {
  return (
    <>
      <Header />
      <main style={{ background: `cover url(${background})` }}>
        
      </main>
    </>
  );
}

export default App;
