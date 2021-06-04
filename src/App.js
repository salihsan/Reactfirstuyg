import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const baslikStil = {
  color: "purple",
  marginTop: "40px",
  fontFamily: "Tahoma",
  border: "2px solid blue",
  textAlign: "center",
  padding: "40px",
  marginTop: "0"

};
function App() {
  return (
    <div className="App">
      <h1 style={baslikStil}>Web Sayfasi Template'ine Hosgeldiniz</h1>
      <Header />
      <Aside />
      <Content />
      <Footer />
    </div>
  );
}
export default App;
