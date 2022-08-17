import SeoHeader from "../../SeoHeader";
import { About, Communities, JoinUs, Welcome } from "./components";
const Home = () => {
  return (
    <div>
      <SeoHeader title="connect | Home" />
      <Welcome />
      <About />
      <Communities />
      <JoinUs />
    </div>
  );
};
export default Home;
