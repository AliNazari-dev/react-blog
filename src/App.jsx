import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import EditPost from "./EditPosts";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className='App'>
      <Header title={"react js Blog"} />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/post' Component={NewPost} />
          <Route path='/edit/:id' Component={EditPost} />
          <Route path='/post/:id' Component={PostPage} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
};

export default App;
