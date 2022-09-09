import SeoHeader from "../../components/common/SeoHeader";
import { About, Communities, JoinUs, Welcome } from "./components";
const Home = () => {
  return (
    <div>
      <SeoHeader />
      <Welcome />
      <About />
      <Communities />
      <JoinUs />
    </div>
  );
};
export default Home;
