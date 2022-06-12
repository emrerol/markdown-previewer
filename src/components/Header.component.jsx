const Header = () => {
  return (
    <div className="bg-lime-100 w-full h-11 flex justify-evenly">
      <a
        href="https://github.com/emrerol"
        target="_blank"
        className="text-zinc-900 m-auto font-semibold text-lg"
      >
        Github Profile
      </a>
      <a
        href="https://www.markdownguide.org/"
        target="_blank"
        className="text-zinc-900 m-auto font-semibold text-lg"
      >
        About Markdown
      </a>
    </div>
  );
};

export default Header;
