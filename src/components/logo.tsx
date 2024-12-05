import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="relative flex items-center justify-center py-4">
      <Image src={"/logo.svg"} alt="Logo" width={164} height={58} />
    </Link>
  );
};

export default Logo;
