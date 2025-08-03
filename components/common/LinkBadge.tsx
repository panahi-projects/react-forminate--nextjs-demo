interface LinkBadgeProps {
  text?: string;
  linkText?: string;
  href?: string;
  target?: string;
  containerClassName?: string;
  textClassName?: string;
  linkClassName?: string;
  icon?: React.ReactNode;
}

const LinkBadge: React.FC<LinkBadgeProps> = ({
  text = "Code on",
  linkText = "Github",
  href = "#",
  target = "_blank",
  containerClassName = "my-2 inline-block rounded-lg bg-gray-900 px-2 py-1 font-mono text-sm",
  textClassName = "",
  linkClassName = "underline underline-offset-2",
  icon = null,
}) => {
  return (
    <div className={containerClassName}>
      <div className="flex gap-2">
        {text && <span className={textClassName}>{text}</span>}
        {icon}
        <a
          target={target}
          className={linkClassName}
          href={href}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default LinkBadge;
