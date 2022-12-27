import { Title, Content, ContentWrapper } from "../../../components/common";
import { Tinkerhub, SheHike, Iedc } from "../../../assets";

interface CommunityCardProps {
  title: string;
  body: string;
  image: string;
}
const CommunityCard = ({ title, body, image }: CommunityCardProps) => {
  return (
    <div className="mb-8 p-6 md:p-12 flex bg-[#e7f7ff] flex-col md:flex-row rounded-xl">
      <img
        alt={title}
        src={image}
        className="p-3 w-[70px] md:w-[95px] h-[70px] md:h-[95px] rounded-[20px] bg-[#ffffff] mb-3 md:mr-10"
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
        title="SheHike"
        body="‘SheHike’ is a women's wing under CONNECT EMEA which is open to all the girl students in the college.The purpose of this initiative is to empower women with relevant knowledge
        and skills, thereby encouraging peer-to-peer learning among them."
        image={SheHike}
      />
      <CommunityCard
        title="IEDC EMEA"
        body="The Innovation and Entrepreneurship Development Centres (IEDC) are platforms set up in Engineering, Management, Arts & Science Colleges and Polytechnics with an aim to provide students an opportunity to experiment and innovate."
        image={Iedc}
      />
    </ContentWrapper>
  );
};

export default Communities;
