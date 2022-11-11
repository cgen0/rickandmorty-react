import { StyledFooter } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer-container">developed by Claudio Genovese</div>
      <div className="footer-container">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/57324/rick-sanchez"
        >
          Rick Sanchez
        </a>
        <span> icon by </span>
        <a target="_blank" rel="noreferrer" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;
