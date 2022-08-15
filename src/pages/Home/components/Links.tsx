import { ReactNode } from "react";
import { ContentWrapper } from "../../../components/common";
import socialLink from "../../../const/socialLinks";
import navLinks from "../../../const/navLinks";
import { HashLink } from "react-router-hash-link";

const NavLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <HashLink
      smooth
      to={href}
      className="text-xl font-normal mb-4 text-black cursor-pointer"
    >
      {name}
    </HashLink>
  );
};
const SocialLink = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-black text-xl mr-2 cursor-pointer transition-transform hover:scale-105"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

const Links = () => {
  return (
    <ContentWrapper id="social">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4 text-black">Connect</h2>
          {navLinks.map(({ label, href }) => (
            <NavLink name={label} href={href} />
          ))}
        </div>
        <div className="flex justify-around">
          {socialLink.map(({ label, Icon, href }) => (
            <SocialLink key={label} href={href}>
              <Icon className="!text-4xl" />
            </SocialLink>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Links;
