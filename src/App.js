
import InputComponent from './components/InputComponent';
import OutputComponent from './components/OutputComponent';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <Header />
        <h1>Input Component Example</h1>
        <InputComponent />
        <h1>Output Component Example</h1>
        <OutputComponent />
        <Footer />
    </div>
  );
};

export default App;
