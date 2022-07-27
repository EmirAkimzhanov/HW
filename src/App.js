import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const users = [
    {
      name: "emir",
      lastName: "akimzhanov",
      age: 21,
      id: 1,
    },
    {
      name: "sultan",
      lastName: "bekov",
      age: 25,
      id: 2,
    },
    {
      name: "islam",
      lastName: "suyunbaev",
      age: 22,
      id: 3,
    },
  ];
  // console.log(users);
  // console.log(users);
  return (
    <>
      <Header />
      <Section users={users} />
      <Footer />
    </>
  );
}

export default App;
