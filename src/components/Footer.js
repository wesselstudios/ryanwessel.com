import { useRouter } from "next/router";
import StyledFooter from "./StyledFooter";
import Icons from "../icons";

const Footer = ({ linkedin, twitter }) => {
  const router = useRouter();
  console.log(linkedin, twitter);
  return (
    <StyledFooter>
      <div className="left">
        <Icons.Folder />
        <span>~{router.asPath}</span>
      </div>
      <div className="right">
        <a
          className="icon-link"
          href={linkedin}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.LinkedIn />
        </a>
        <a
          className="icon-link"
          href={twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icons.Twitter />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
