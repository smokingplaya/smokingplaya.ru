import { Container } from "./components/container";
import { Background } from "./components/background";
import { Page } from "./components/page";
import { Skills, Badge } from "./components/skills";
import { HeaderWithContent } from "./components/text";
import { Version } from "./components/version";
import { Database } from "lucide-react";

const links = {
  background: "/icons/background.gif",
  heart: "/icons/heart.gif",
  github: "https://github.com/smokingplaya",
  telegram: "https://t.me/smokingplaya",

  projects: {
    serenity: "https://t.me/serenitymcru",
    uki: "https://github.com/smokingplaya/uki"
  }
}

function App() {
  return (
    <Page>
      <Background src={links.background}/>
      <Version version="0.2"/>
      <Container className="justify-center items-center">
        <div className="size-auto bg-neutral-900 rounded-xl flex">
          <div className="p-6">
            {/* Content */}
            <div className="space-y-2">
              <div>
                <h1 className="text-white text-2xl font-bold flex gap-x-1 items-center">smokingplaya <img className="h-6" src={links.heart}/></h1>
                <h3 className="text-white/80 leading-5">16 y.o software engineer<br/>based in mother Russia</h3>
              </div>

            <Skills>
              <Badge icon={<img src="/icons/rust.svg"/>} name="Rust">
                <Badge icon={<img src="/icons/tauri.png"/>} name="Tauri" href="https://tauri.app/"/>
                <Badge icon={<img src="/icons/actix.png"/>} name="Actix" href="https://actix.rs/"/>
              </Badge>
              <Badge icon={<img src="/icons/css.svg"/>} name="Web">
                <Badge icon={<img src="/icons/fastifyjs.png"/>} name="Fastify" href="https://fastify.dev/"/>
                <Badge icon={<img src="/icons/expressjs.png"/>} name="Express" href="https://fastify.dev/"/>
                <Badge icon={<img src="/icons/nestjs.svg"/>} name="Nest" href="https://nestjs.com/"/>
                <Badge icon={<img src="/icons/nextjs.svg"/>} name="Next" href="https://nextjs.org/"/>
                <Badge icon={<img src="/icons/vitejs.png"/>} name="Vite" href="https://vite.dev/"/>
                <Badge icon={<img src="/icons/prismajs.png"/>} name="Prisma" href="https://www.prisma.io/"/>
                <Badge icon={<img src="/icons/reactjs.svg"/>} name="React" href="https://react.dev/"/>
                <Badge icon={<img src="/icons/tailwind.png"/>} name="Tailwind CSS" href="https://tailwindcss.com/"/>
              </Badge>

              <Badge icon={<img src="/icons/lua.svg"/>} name="Lua">
                <Badge icon={<img src="/icons/gmod.png"/>} name="Garry's Mod" href="https://garrysmod.com/"/>
              </Badge>

              <Badge icon={<Database/>} name="Databases">
                <Badge icon={<img src="/icons/redis.svg"/>} name="Redis" href="https://redis.io/"/>
                <Badge icon={<img src="/icons/sqlite.png"/>} name="SQLite" href="https://www.sqlite.org/"/>
                <Badge icon={<img src="/icons/mysql.svg"/>} name="MySQL" href="https://www.mysql.com/"/>
                <Badge icon={<img src="/icons/postgres.png"/>} name="PostgreSQL" href="https://www.postgresql.org/"/>
              </Badge>
            </Skills>

            <HeaderWithContent header="Проекты">
              <div className="flex space-x-2">
                <Badge icon={<img src="/icons/serenity.png"/>} name="серенити" href={links.projects.serenity}/>
              </div>
            </HeaderWithContent>

            <HeaderWithContent header="Контакты">
              <div className="flex space-x-2">
                <Badge icon={<img src="/icons/github.svg"/>} name="GitHub" href={links.github}/>
                <Badge icon={<img src="/icons/telegram.png"/>} name="Telegram" href={links.telegram}/>
              </div>
            </HeaderWithContent>
            </div>
          </div>

          <div>
            <img className="w-80 h-full rounded-tr-xl rounded-br-xl object-cover" src="https://openseauserdata.com/files/2a4860c5fff2240d66c8f4f20ae3eb31.jpg"/>
          </div>
        </div>
      </Container>
    </Page>
  )
}

export default App;