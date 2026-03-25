import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function PetBlock({ src, alt, className }: Props) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={335} height={280} priority />
    </div>
  );
}
