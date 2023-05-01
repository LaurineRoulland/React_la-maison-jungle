import {Banner} from './Banner';
import '../styles/banner.css'
import {Cart} from './Cart';
import { ShoppingList } from './ShoppingList';


function App() {
  return (
    <div className="App">
      <Banner />
      <Cart />
      <ShoppingList />
    </div>
  );
}

export default App;
