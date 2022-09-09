import { ContentWrapper, Title, ActionBtn } from "../../../components/common";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";


const Home = () => {
  return (
    <ContentWrapper id="home">
      <div className="w-full h-screen flex flex-col items-left md:items-center justify-center">
        <Title fontSize="text-6xl md:text-8xl" classNames="mb-10"><Title
          fontSize="text-6xl md:text-8xl"
          bgColor="bg-[#250c77]"
          fgColor="text-[#f9f9f9]"
          classNames="md:whitespace-nowrap"

        >connect</Title><br /> <span className="leading-relaxed">lives with</span>
          <br /><Title
            fontSize="text-6xl md:text-8xl"
            bgColor="bg-[#ee632a]"
            fgColor="text-[#f3eded]"
            classNames="md:whitespace-nowrap"

          >Passion.</Title>
        </Title>
        <ActionBtn link="/join#top" classNames="w-fit">
          Join now <ArrowRightAltIcon />
        </ActionBtn>
      </div>
    </ContentWrapper>
  );
};

export default Home;
