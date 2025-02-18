import Button from "@/components/Button"
import IconButton from "@/components/IconButton"
import { InputField, InputIcon, InputRoot } from "@/components/Input"
import { ArrowRight, Mail } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton />

      <InputRoot>
        <InputIcon>
          <Mail />
        </InputIcon>
        <InputField />
      </InputRoot>
    </main>
  )
}
