import './App.css';
import { Hero, Header, NftCreate, NftExplore,TopCollections,Collectors} from "./components/import";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <NftCreate />
      <NftExplore />
      <TopCollections/>
      <Collectors />
    </>
  );
}

export default App;
