import { Title, Content,ContentWrapper } from "../../../components/common";

interface WrapperProps {
  title: string;
  content: string;
}
const Wrapper = ({ title, content }: WrapperProps) => {
  return (
    <div className="text-left mb-6">
      <Title fontSize="text-2xl md:text-4xl" classNames="px-0">
        {title}
      </Title>
      <Content classNames="pt-4">{content}</Content>
    </div>
  );
};

const About = () => {
  return (
    <ContentWrapper id="about">
      <header className="text-center pb-16">
        <Title classNames="md:leading-[1.35]">
          Get your skill{" "}
          <Title
            bgColor="bg-sky-500/75"
            fgColor="text-white"
            classNames="md:whitespace-nowrap"
          >
            going & growing
          </Title>
          with Connect.
        </Title>
      </header>
      <Wrapper
        title="Our Mission"
        content="Connect tries to nourish the latent talents and creative abilities of
          students by providing a platform to learn emerging skill sets and
          equip them to be the faces of the future. The initiative imbibes
          leadership quality, eloquence and entrepreneurship skills, encouraging
          peer-to-peer learning and provides internship programs. By organizing
          talks, fests, job fairs, hackathons, workshops and webinars, Connect
          aims at creating a focused platform to hasten the learning process,
          thereby creating an incentive for student engagement in the
          exploration of the world that's rapidly evolving."
      />
      <Wrapper
        title="Our Vision"
        content="We paint a larger picture of the student community to create a network with clusters of their area of interests and thus creating a potent workforce capable of unlocking the vast reservoir of untapped potential. By improving specific learning outcomes, it essentially places people first by empowering them with technical and creative skills to make sustainable choices and multi-dimensional solutions that the complex new world needs."
      />
    </ContentWrapper>
  );
};
export default About;
