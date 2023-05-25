
import InputComponent from './components/InputComponent';
import OutputComponent from './components/OutputComponent';
import ParentComponent from './components/ParentComponent';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1>Input Component Example</h1>
        <InputComponent />
        <h1>Output Component Example</h1>
        <OutputComponent />
      </main>
      <Footer />
    </div>
  );
};

export default App;