import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";



export function App() {
  return (
    <div className="w-screen h-screen bg-gray-600  flex flex-col items-center justify-center text-gray-400">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">Ignite Lab React</Heading>
        <Text size="lg" className="mt-1">Faça seu Login</Text>
      </header>

      <form action="" className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3 ">
          <Text className="text-gray-400 font-semibold">Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu Email" />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="text-gray-400 font-semibold">Digite sua Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="***********" />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-700">Lembrar senha</Text>
        </label>
        <Button type='submit' className="mt-4">Enviar</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="/" className="text-gray-700 underline hover:text-white">
            Esqueceu a Senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a href="/" className="text-gray-700 underline hover:text-white">
            Não tem conta? Crie uma agora!!!
          </a>
        </Text>
      </footer>
    </div>
  )
}

