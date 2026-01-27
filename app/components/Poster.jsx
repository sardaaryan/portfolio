import Image from "next/image";

const Poster = () => {
  return (
    <div>
      <Image src="/poster.png" alt="poster" width={737} height={678} className="translate-z-0 w-full h-full" />
    </div>
  );
};

export default Poster;
