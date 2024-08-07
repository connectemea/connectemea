import {
  ActionBtn,
  ContentWrapper,
  Title,
  WhatsappBtn,
} from "../../../components/common";
const JoinUs = () => {
  return (
    <ContentWrapper id="join">
      <header className="text-center pb-16">
        <Title classNames="leading-[1.35]">
          Join us to{" "}
          <Title
            bgColor="bg-[#5BFFCD]"
            fgColor="text-[#095365]"
            classNames="md:whitespace-nowrap"
          >
            start your journey.
          </Title>
        </Title>
      </header>
      <section className="flex items-center justify-center">
        {/* whatsapp join button && turn off join form page */}
        <WhatsappBtn>Join now</WhatsappBtn>
        {/* <ActionBtn link="/join#top">
          Join now
        </ActionBtn> */}
      </section>
    </ContentWrapper>
  );
};
export default JoinUs;
