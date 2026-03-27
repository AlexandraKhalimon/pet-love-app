import Image from "next/image";

interface Props {
  src: string;
  tablet: string;
  desktop: string;
  alt: string;
  className?: string;
}

export default function PetBlock({
  src,
  tablet,
  desktop,
  alt,
  className,
}: Props) {
  return (
    <div className={className}>
      <picture>
        <source media="(min-width: 1280px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <img src={src} alt={alt} loading="eager" />
      </picture>
    </div>
  );
}
