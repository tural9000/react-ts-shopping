import Footer from "./components/footer/Footer";
import MyNavbar from "./components/navbar/MyNavbar";
import BasketContextProvider from "./context-api/basket-context/BasketContext";
import MyRouter from "./my-routers/MyRouter";

import "./App.scss";

function App() {
  return (
    <BasketContextProvider>
      <MyNavbar />
      <MyRouter />
      <footer>
      <Footer/>
      </footer>
    </BasketContextProvider>
  );
}

export default App;
