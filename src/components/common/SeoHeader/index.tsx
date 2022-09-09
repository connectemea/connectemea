import { Helmet } from "react-helmet-async";
import { SeoHeaderProps } from "./types";

const SeoHeader = ({ title = "", children }: SeoHeaderProps) => {
  return (
    <Helmet>
      <title>{`${title} ${title ? "-" : ""} connectemea`}</title>
      {children}
    </Helmet>
  );
};

export default SeoHeader;
