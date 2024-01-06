import Navbar from './Components/Navbar';
import './App.css';
import Header from './Header/Header';
import ContactForm from './ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <main className='main_container'>
    <Header />
    <ContactForm />
    </main>
    </div>
  );
}

export default App;
