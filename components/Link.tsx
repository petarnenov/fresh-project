export type LinkProps = {
  href: string;
  children: string;
};

const Link = ({ href, children }: LinkProps) => {
  return (
    <a href={href} className="text-blue-500 hover:text-blue-700 underline">
      {children}
    </a>
  );
};

export default Link;
