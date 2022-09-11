import { Title, Content, ContentWrapper } from "../../../components/common";
import { Tinkerhub, Creative } from "../../../assets";

interface CommunityCardProps {
  title: string;
  body: string;
  image: string;
}
const CommunityCard = ({ title, body, image }: CommunityCardProps) => {
  return (
    <div className="mb-8 p-6 md:p-12 flex bg-[#F3F7F9] flex-col md:flex-row rounded-xl">
      <img
        alt={title}
        src={image}
        className="p-3 w-[70px] md:w-[95px] h-[70px] md:h-[95px] rounded-[20px] bg-[#B3C3E2] mb-3 md:mr-10"
      />
      <section>
        <Title fontSize="text-2xl md:text-4xl" fontWeight="font-medium" classNames="px-0">
          {title}
        </Title>
        <Content classNames="pt-4">{body}</Content>
      </section>
    </div>
  );
};
const Communities = () => {
  return (
    <ContentWrapper id="community">
      <header className="text-center pb-16">
        <Title
          bgColor="bg-[#FFD440]"
          fgColor="text-[#5d114c]"
          classNames="leading-[1.35]"
        >
          Communities for joy
        </Title>
      </header>
      <CommunityCard
        title="TinkerHub EMEA"
        body="TinkerHub EMEA is a Campus Community Initiative of TinkerHub Foundation, a non profit organization registered in 2016. TinkerHub aims to reduce the gap between technology and its effective employment in lives of tech enthusiasts."
        image={Tinkerhub}
      />
      <CommunityCard
        title="Creative Club"
        body="Creative club is founded on the idea of guiding and inspiring students to build creative careers by instilling a feeling of passion and interest for creative and digital skills."
        image={Creative}
      />
    </ContentWrapper>
  );
};

export default Communities;
