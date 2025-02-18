import IconButton from "@/components/IconButton"
import { InputField, InputIcon, InputRoot } from "@/components/Input"
import { Copy, Link } from "lucide-react"

export default function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={"https://devstage.com.br"} />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
