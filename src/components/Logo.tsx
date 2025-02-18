import Image from "next/image"
import Logo from "../assets/logo.svg"

export default function LogoComponent() {
  return <Image src={Logo} alt="logo" width={108.5} height={30} />
}
