
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

const App = () => {
  return (
    <div >
      <CharacterCounter minWords={25} maxWords={100} />
    </div>
  );
};

export default App;