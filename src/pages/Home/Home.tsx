import { ReactElement, ReactNode, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineDocumentText, HiOutlineLocationMarker, HiOutlineAcademicCap, HiChevronDown } from "react-icons/hi";
import { TbCloudComputing, TbSitemap, TbBrandDocker, TbDatabase, TbCode, TbActivityHeartbeat, TbMilitaryRank, TbBabyCarriage, TbCross } from "react-icons/tb";
import me from '../../assets/me.png';

const RESUME_VIEW = "https://drive.google.com/file/d/15KlnEtZpA4P9gc6Cc9xVRYxyiIAp_n4L/view?usp=sharing";
const RESUME_PREVIEW = "https://drive.google.com/file/d/15KlnEtZpA4P9gc6Cc9xVRYxyiIAp_n4L/preview";
const GITHUB = "https://github.com/tochy97";
const LINKEDIN = "https://www.linkedin.com/in/tochukwu-egeonu-6b3600424/";

type Card = {
    icon: IconType,
    title: string,
    text: string,
};

type Job = {
    icon: IconType,
    role: string,
    org: string,
    tag?: string,
    summary: string,
    points: string[],
};

const focusAreas: Card[] = [
    {
        icon: TbSitemap,
        title: "System Architecture",
        text: "Designing service boundaries, contracts and data flow so systems stay understandable as they grow.",
    },
    {
        icon: TbCloudComputing,
        title: "Cloud-Native Platforms",
        text: "Building cloud-based ecosystems with automated CI/CD, from commit to production.",
    },
    {
        icon: TbBrandDocker,
        title: "Containers & Orchestration",
        text: "Packaging and running workloads with Docker, Kubernetes and OpenShift.",
    },
    {
        icon: TbDatabase,
        title: "APIs & Data",
        text: "Enterprise APIs backed by relational and document stores, tuned for scale and reliability.",
    },
];

const experience: Job[] = [
    {
        icon: TbCode,
        role: "Software Developer",
        org: "Argo",
        tag: "Current",
        summary: "Building the services and APIs behind enterprise platforms, with an eye on architecture that scales.",
        points: [
            "Design and implement features within an enterprise API built on a microservices architecture.",
            "Drive scalability and reliability of services running on containerized platforms.",
            "Optimize algorithms and data access across SQL and NoSQL stores.",
        ],
    },
    {
        icon: TbActivityHeartbeat,
        role: "NOC Technician",
        org: "Provision Data Services",
        summary: "Kept customer networks and infrastructure healthy from the Network Operations Center, where uptime is the job.",
        points: [
            "Monitored network, server and circuit health around the clock, triaging alerts before they became outages.",
            "Led first response on incidents: isolating the fault, restoring service and escalating to engineering, carriers or vendors when needed.",
            "Set up local networks for data servers and crypto miners, and ran daily checks and maintenance on the hardware.",
            "Managed tickets from open to close with clear notes, so every hand-off and shift change kept its context.",
        ],
    },
    {
        icon: TbMilitaryRank,
        role: "Team Leader (E-4)",
        org: "U.S. Army",
        summary: "Led soldiers as a junior leader, where the mission and the people carrying it out both came first.",
        points: [
            "Responsible for the training, readiness, accountability and welfare of the soldiers on my team.",
            "Turned orders from leadership into clear tasks, delegated to each soldier's strengths and saw them through to completion.",
            "Mentored and counseled team members, holding them to standard while helping them grow toward their own goals.",
            "Made decisions under pressure and owned the outcome, lessons in discipline and composure I bring to every production incident.",
        ],
    },
];

const personal: Card[] = [
    {
        icon: TbBabyCarriage,
        title: "Father",
        text: "I recently became a father, and it is the greatest gift of my life. Everything I build now, I build with my child in mind, and it has made me more patient, more present and more driven than ever.",
    },
    {
        icon: TbCross,
        title: "Faith & Service",
        text: "My Catholic faith is the foundation of who I am, and I am a proud member of the Knights of Columbus. Charity, unity and fraternity guide how I serve my family, my parish, my community and my team.",
    },
];

const skills = [
    { group: "Languages", items: ["Python", "Java", "Go", "Node.js", "TypeScript", "SQL"] },
    { group: "Architecture", items: ["Microservices", "REST APIs", "GraphQL", "Distributed Systems", "AI Development"] },
    { group: "Cloud & Platform", items: ["Docker", "Kubernetes", "OpenShift", "Firebase", "GitHub Actions"] },
    { group: "Data", items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"] },
    { group: "Operations", items: ["Network Monitoring", "Incident Response", "Root Cause Analysis", "Runbooks"] },
    { group: "Leadership", items: ["Team Leadership", "Mentoring", "Delegation", "Decision-Making Under Pressure"] },
];

const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: "easeOut" },
} as const;

const card = "pointer-events-auto rounded-2xl border border-white/10 bg-slate-900 shadow-xl shadow-black/20";

type SectionProps = {
    id: string,
    eyebrow: string,
    title: string,
    defaultOpen?: boolean,
    children: ReactNode,
};

function Section({ id, eyebrow, title, defaultOpen = true, children }: SectionProps): ReactElement {
    const [open, setOpen] = useState<boolean>(defaultOpen);
    return (
        <motion.section id={id} className="w-full scroll-mt-24" {...reveal}>
            <h2>
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls={`${id}-panel`}
                    className={`${card} group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:border-sky-400/40 sm:px-6 sm:py-5`}
                >
                    <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">{eyebrow}</span>
                        <span className="mt-1 block text-xl font-bold text-white sm:text-2xl">{title}</span>
                    </span>
                    <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                        <HiChevronDown className="text-2xl text-slate-400 transition group-hover:text-sky-300" />
                    </motion.span>
                </button>
            </h2>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        id={`${id}-panel`}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}

export default function Home(): ReactElement {
    return (
        <main className="pointer-events-none relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 pb-16 pt-28 sm:gap-6 sm:px-6 sm:pt-32">
            {/* Hero */}
            <motion.header
                className={`${card} mb-8 flex flex-col-reverse items-center gap-8 p-6 sm:mb-12 sm:p-10 md:flex-row md:items-center md:justify-between`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <div className="text-center md:text-left">
                    <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Software Engineer · Architecture &amp; Cloud
                    </p>
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Tochy{" "}
                        <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Egeonu</span>
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        I design and build scalable, reliable systems — enterprise APIs, microservice
                        architectures and cloud-native platforms that hold up in production.
                    </p>
                    <p className="mt-3 inline-flex items-center gap-1 text-sm text-slate-400">
                        <HiOutlineLocationMarker /> Texas, USA
                    </p>
                    <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                        <a href={RESUME_VIEW} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-sky-400">
                            <HiOutlineDocumentText className="text-lg" /> Resume
                        </a>
                        <a href={GITHUB} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:border-sky-400 hover:text-sky-300">
                            <VscGithub className="text-lg" /> GitHub
                        </a>
                    </div>
                </div>
                <div className="relative shrink-0">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 opacity-60 blur-lg" />
                    <img src={me} alt="Tochy Egeonu"
                        className="relative h-36 w-36 rounded-full border-4 border-slate-900 object-cover sm:h-44 sm:w-44" />
                </div>
            </motion.header>

            {/* Focus */}
            <Section id="focus" eyebrow="What I do" title="Focus areas">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {focusAreas.map(({ icon: Icon, title, text }) => (
                        <div key={title} className={`${card} p-6 transition hover:-translate-y-1 hover:border-sky-400/40`}>
                            <Icon className="text-3xl text-sky-400" />
                            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Experience */}
            <Section id="experience" eyebrow="Where I've been" title="Experience">
                <div className="flex flex-col gap-4">
                    {experience.map(({ icon: Icon, role, org, tag, summary, points }) => (
                        <div key={org} className={`${card} p-6 sm:p-8`}>
                            <div className="flex items-start gap-4">
                                <Icon className="mt-1 hidden shrink-0 text-3xl text-sky-400 sm:block" />
                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                        <h3 className="text-lg font-semibold text-white sm:text-xl">{role} · {org}</h3>
                                        {tag && <span className="text-sm font-medium text-sky-300">{tag}</span>}
                                    </div>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{summary}</p>
                                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-sky-400">
                                        {points.map((point) => <li key={point}>{point}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`${card} mt-4 flex items-center gap-4 p-6 sm:p-8`}>
                    <HiOutlineAcademicCap className="shrink-0 text-3xl text-sky-400" />
                    <div>
                        <h3 className="font-semibold text-white">B.S. Computer Science</h3>
                        <p className="text-sm text-slate-400">University of Texas at Arlington</p>
                    </div>
                </div>
            </Section>

            {/* Skills */}
            <Section id="skills" eyebrow="Toolbox" title="Skills">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {skills.map(({ group, items }) => (
                        <div key={group} className={`${card} p-6`}>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">{group}</h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <span key={item} className="rounded-lg border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm text-sky-200">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Personal */}
            <Section id="beyond" eyebrow="Beyond the code" title="What matters most">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {personal.map(({ icon: Icon, title, text }) => (
                        <div key={title} className={`${card} p-6 sm:p-8`}>
                            <Icon className="text-3xl text-sky-400" />
                            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                            <p className="mt-2 leading-relaxed text-slate-300">{text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Resume */}
            <Section id="resume" eyebrow="The details" title="Resume" defaultOpen={false}>
                <div className={`${card} overflow-hidden p-2`}>
                    <iframe title="Resume" src={RESUME_PREVIEW} allow="autoplay"
                        className="aspect-[8.5/11] max-h-[80vh] w-full rounded-xl bg-white" />
                </div>
                <a href={RESUME_VIEW} target="_blank" rel="noreferrer"
                    className="pointer-events-auto mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200">
                    <HiOutlineDocumentText /> Open in a new tab
                </a>
            </Section>
        </main>
    );
}
