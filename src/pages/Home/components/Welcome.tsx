import { ContentWrapper, Title, ActionBtn } from "../../../components/common";
import { Core } from "../../../assets";


const Home = () => {
  return (
    <>
      <span className="after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-muted-grad">
        <img src={Core} alt="connect programs" className="absolute top-0 bottom-0 left-0 right-0 min-w-full min-h-full object-center object-cover" />
      </span>
      <ContentWrapper id="home">
        <div className="w-full h-screen flex flex-col items-left md:items-center justify-center">
          <Title fontSize="text-6xl md:text-8xl" classNames="mb-10 z-10"><Title
            fontSize="text-6xl md:text-8xl"
            bgColor="bg-[#250c77]"
            fgColor="text-[#f9f9f9]"
            classNames="md:whitespace-nowrap"

          >connect</Title><br /> <span className="leading-relaxed text-[#f9f9f9]">lives with</span>
            <br /><Title
              fontSize="text-6xl md:text-8xl"
              bgColor="bg-[#ee632a]"
              fgColor="text-[#f3eded]"
              classNames="md:whitespace-nowrap"

            >Passion.</Title>
          </Title>
          <ActionBtn link="/join#top" classNames="w-fit z-10">
            Join now
          </ActionBtn>
        </div>
      </ContentWrapper>
    </>
  );
};

export default Home;
