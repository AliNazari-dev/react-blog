import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindows from "./hooks/useWindows";

const Header = ({ title }) => {
  const { width } = useWindows();
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
    </header>
  );
};

export default Header;
