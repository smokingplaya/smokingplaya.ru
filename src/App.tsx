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

const githubUrl = "https://github.com/smokingplaya/"

function App() {
  return (
    <>
      <PageBackground/>
      <main className="w-screen h-screen flex items-center justify-center">
        <Page>
          {/* model */}
          <PageModel/>
          {/* page content */}
          <PageContent>
            <PageContentTitle textUnderline={true}>smokingplaya</PageContentTitle>
            <PageContentText>16yo software engineer based in Russia 🇷🇺</PageContentText>
            <PageContentSubtitle>Skills</PageContentSubtitle>
            <PageSkills>
              <PageSkill>Rust</PageSkill>
              <PageSkill>TypeScript</PageSkill>
              <PageSkill>Lua</PageSkill>
              <PageContentText>You can see my other skills on my <PageLink href={githubUrl}><GithubIcon className="w-5"/> GitHub</PageLink></PageContentText>
            </PageSkills>

            <PageContentSubtitle>Try <PageLink className="text-stone-300" href={githubUrl + "uki"}>uki</PageLink>!</PageContentSubtitle>
            <PageContentText>Makefile-like utility based on YAML</PageContentText>
            <CodeBlock language="bash" text={'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/smokingplaya/uki/HEAD/misc/install.sh)"'} theme={noctisViola} showLineNumbers={true} />

            <PageSpaceBetween/>

            <PageFooter>
              <PageContentSubtitle>Other helpful links</PageContentSubtitle>
              <PageFooterLinks>
                <PageFooterLink href={githubUrl}>GitHub</PageFooterLink>
                <PageFooterLink href="https://contract.gosuslugi.ru/">Хочешь помочь родине? Запишись на конткрактную службу!</PageFooterLink>
              </PageFooterLinks>
            </PageFooter>
          </PageContent>
        </Page>
      </main>
    </>
  )
}

export default App;