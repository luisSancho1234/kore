import Image from "next/image";
import Logo from "../../../../public/kore-logo-text.svg";
import { Kontainer } from "./Kontainer";

interface FooterProps {
  publicRoute?: boolean;
}

export default function Header(props: FooterProps) {
  return (
    <Kontainer>
      {props.publicRoute == true ? (
        <Image src={Logo} alt="Logo" className="w-20" />
      ) : (
        <></>
      )}
    </Kontainer>
  );
}
