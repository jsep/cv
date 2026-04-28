import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA, WorkExperience } from "@/data/resume-data";
import { track as trackEvent } from "@vercel/analytics/server";
export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary[0],
};

function withSource(url: string, sendTo: string | undefined): string {
  if (!sendTo) return url;
  const u = new URL(url);
  u.searchParams.set("source", sendTo);
  return u.toString();
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ sendTo?: string; source?: string }>;
}) {
  const { sendTo, source } = await searchParams;
  if (source) {
    await trackEvent("source_visit", { source });
  }
  const track = (url: string) => withSource(url, sendTo);
  return (
    <main className="relative min-h-screen bg-background">
      {/* Hero */}
      <header className="border-b border-border/60 bg-card print:border-none">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 px-6 py-12 print:px-12 print:py-8 md:px-10">
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="font-display text-4xl font-black tracking-tight text-foreground print:text-3xl">
                {RESUME_DATA.name}
              </h1>
              <p className="mt-1.5 text-lg text-muted-foreground">
                {RESUME_DATA.about}
              </p>
            </div>
            <div className="flex items-center gap-2 print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button className="size-9" variant="outline" size="icon" asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button className="size-9" variant="outline" size="icon" asChild>
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button key={social.name} className="size-9" variant="outline" size="icon" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden text-sm text-muted-foreground print:block">
              {RESUME_DATA.contact.email && (
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="text-primary underline underline-offset-2"
                >
                  {RESUME_DATA.contact.email}
                </a>
              )}
              {RESUME_DATA.personalWebsiteUrl && (
                <a
                  href={track(RESUME_DATA.personalWebsiteUrl)}
                  className="ml-3 text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {RESUME_DATA.personalWebsiteUrl}
                </a>
              )}
            </div>
          </div>
          <Avatar className="size-28 ring-2 ring-primary/20 ring-offset-2 ring-offset-background print:size-24">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-3xl space-y-10 px-6 py-10 print:space-y-7 print:px-12 print:py-6 md:px-10">
        {/* About */}
        <section>
          <SectionHeading>About</SectionHeading>
          {RESUME_DATA.summary.map((paragraph, i) => (
            <p key={i} className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Skills */}
        <section>
          <SectionHeading>Skills</SectionHeading>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {RESUME_DATA.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-4 space-y-0">
            {RESUME_DATA.work.map((work, i) => (
              <WorkExperienceCard
                key={work.company}
                work={work as unknown as WorkExperience}
                isFirst={i === 0}
                isLast={i === RESUME_DATA.work.length - 1}
                printHidden={i >= 3}
              />
            ))}
          </div>
          <p className="mt-4 hidden text-center text-sm text-muted-foreground print:block">
            Full experience and earlier roles at <a href={track("https://cv.juan.do")} className="text-primary underline">cv.juan.do</a>
          </p>
        </section>

        {/* Education */}
        <section>
          <SectionHeading>Education</SectionHeading>
          {RESUME_DATA.education.map((education) => (
            <div key={education.school} className="mt-3 flex items-baseline justify-between gap-4">
              <div>
                <h3 className="font-display font-semibold">{education.school}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{education.degree}</p>
              </div>
              <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                {education.start} - {education.end}
              </span>
            </div>
          ))}
        </section>
      </div>

      <CommandMenu
        links={[
          {
            url: track(RESUME_DATA.personalWebsiteUrl),
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((s) => ({
            url: s.url,
            title: s.name,
          })),
        ]}
      />
    </main>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-primary" />
      <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
        {children}
      </h2>
    </div>
  );
}

function WorkExperienceCard({
  work,
  isFirst,
  isLast,
  printHidden = false,
}: {
  work: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
  printHidden?: boolean;
}) {
  return (
    <div className={`group relative flex gap-5 ${work.forceNewPrintPage ? "print-force-new-page" : ""} ${printHidden ? "print:hidden" : ""}`}>
      {/* Timeline */}
      <div className="flex w-3 shrink-0 flex-col items-center print:hidden">
        <div className={`w-px grow ${isFirst ? "bg-transparent" : "bg-border"}`} />
        <div className="z-10 size-3 shrink-0 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />
        <div className={`w-px grow ${isLast ? "bg-transparent" : "bg-border"}`} />
      </div>

      {/* Card */}
      <div className="flex-1 pb-8 print:pb-4">
        <div className="rounded-lg border border-border/50 bg-card p-5 shadow-sm transition-shadow hover:shadow-md print:border-none print:p-0 print:shadow-none">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-semibold leading-tight">
                {work.link ? (
                  <a href={work.link} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                    {work.company}
                  </a>
                ) : (
                  work.company
                )}
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{work.title}</p>
            </div>
            <span className="shrink-0 rounded-md bg-secondary px-2.5 py-1 text-xs tabular-nums text-muted-foreground">
              {work.start} - {work.end}
            </span>
          </div>

          {Array.isArray(work.shortDescription) ? (
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-muted-foreground print:space-y-1 print:pl-4 [&_strong]:font-semibold [&_strong]:text-foreground">
              {work.shortDescription.map((item, i) => (
                <li key={i} className="pl-0.5">
                  {item}
                </li>
              ))}
            </ul>
          ) : work.shortDescription ? (
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              {work.shortDescription}
            </p>
          ) : null}

          {work.longDescription?.length > 0 && (
            <div className="mt-2">
              {work.longDescription.map((desc, i) => (
                <p key={i} className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{desc}</p>
              ))}
            </div>
          )}

          {work.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {work.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

