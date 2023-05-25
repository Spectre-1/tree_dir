import ParentComponent from './components/ParentComponent';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ParentComponent />
      <Footer />
    </div>
  );
};

export default App;