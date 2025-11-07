import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import Publications from './components/Publications.tsx';
import Teaching from './components/Teaching.tsx';
import Footer from './components/Footer.tsx';
import { useLanguage } from './i18n.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const { language } = useLanguage();

  return (
    <div className={`bg-white text-slate-800 leading-relaxed ${language === 'en' ? 'font-roboto-custom' : 'font-sans'}`}>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Home id="home" />
        <Publications id="publications" />
        <Teaching id="teaching" />
      </main>
      <Footer />
    </div>
  );
};

export default App;