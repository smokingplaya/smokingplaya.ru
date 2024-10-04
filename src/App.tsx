import { GithubIcon } from "lucide-react";
import {
  PageContent,
  PageContentText,
  PageContentTitle,
  PageContentSubtitle,
  PageModel,
  PageFooter,
  PageFooterLink,
  PageSkills,
  PageSkill,
  PageLink,
  PageSpaceBetween,
  PageFooterLinks,
  PageBackground,
  Page
} from "./components/page";

import {
  CodeBlock,
  noctisViola
} from "react-code-blocks";

const links = {
  github: "https://github.com/smokingplaya",
  telegram: "https://t.me/smokingplaya"
}

function App() {
  return (
    <>
      <PageBackground/>
      <main className="w-screen h-screen flex items-center justify-center overflow-hidden">
        <Page>
          <PageModel/>
          <PageContent>
            <PageContentTitle textUnderline={true}>smokingplaya</PageContentTitle>
            <PageContentText>16yo software engineer based in Russia 🇷🇺</PageContentText>
            <PageContentSubtitle>The languages I use</PageContentSubtitle>

            <PageSkills>
              <PageSkill>❤ Rust</PageSkill>
              <PageSkill>TypeScript</PageSkill>
              <PageSkill>Lua</PageSkill>
              <PageContentText>You can see my other skills on my <PageLink href={links.github}><GithubIcon className="w-5"/> GitHub</PageLink></PageContentText>
            </PageSkills>

            <PageContentSubtitle>Try <PageLink className="text-violet-300" href={links.github + "uki"}>uki</PageLink>!</PageContentSubtitle>
            <PageContentText>Makefile-like utility based on YAML</PageContentText>

            <div className="w-72 md:w-96 xl:w-auto">
              <CodeBlock language="bash" text={'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/smokingplaya/uki/HEAD/misc/install.sh)"'} theme={noctisViola} showLineNumbers={true} />
            </div>

            <PageSpaceBetween/>

            <PageFooter>
              <PageContentSubtitle>Other helpful links</PageContentSubtitle>
              <PageFooterLinks>
                <PageFooterLink href={links.github}>GitHub</PageFooterLink>
                <PageFooterLink href={links.telegram}>Telegram</PageFooterLink>
                <PageFooterLink href="https://contract.gosuslugi.ru/">Помочь родине 🇷🇺</PageFooterLink>
              </PageFooterLinks>
            </PageFooter>
          </PageContent>
        </Page>
      </main>
    </>
  )
}

export default App;