import Logo from "./Logo";

interface ThemeBarProps {
  logoSymbolColor: string;
  logoTextColor: string;
  themeHandler: React.MouseEventHandler<HTMLButtonElement>;
  themeIcon: string;
}

const ThemeBar = ({
  logoSymbolColor,
  logoTextColor,
  themeHandler,
  themeIcon,
}: ThemeBarProps) => {
  return (
    <div id="theme-bar">
      <Logo symbolColor={logoSymbolColor} textColor={logoTextColor} />
      <button id="theme-button" onClick={themeHandler}>
        <img src={themeIcon} alt="a theme icon" />
      </button>
    </div>
  );
};

export default ThemeBar;
