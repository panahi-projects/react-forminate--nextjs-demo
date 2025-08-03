import Image, { ImageProps } from "next/image";

interface LogoProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  imageProps?: Omit<ImageProps, "src" | "width" | "height" | "alt">;
}

const Logo: React.FC<LogoProps> = ({
  src = "/images/React-Forminate-Logo-128x128-bg-transparent.webp",
  width = 26,
  height = 26,
  alt = "React-Forminate-Logo",
  className = "",
  imageProps = {},
}) => {
  return (
    <div className={className}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        {...imageProps}
      />
    </div>
  );
};

export default Logo;
