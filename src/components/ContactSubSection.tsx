import { GithubLogoIcon } from "@phosphor-icons/react/ssr"
import { ContactChip } from "./HomeSections/ui/ContactChip"

export const ContactSubSection = () => {
    return (
        <div>
            <h3 className="text-5xl mb-10 text-fuchsia-400">Contact</h3>
            <p className="text-2xl mb-10">Got a project you think I&apos;d fit into or need some help with WCAG compliance? Live around Indy and want to grab coffee? Let&apos;s do it.</p>
            <ContactChip href="https://github.com/tecxh" text="tecxh" iconVariant="github" />
            <ContactChip href="https://www.linkedin.com/in/alecx-moritz-81a1b615a/" text="Alecx Moritz" iconVariant="linkedin" />
            <ContactChip href="mailto:alecxmoritz@gmail.com" text="alecxmoritz@gmail.com" iconVariant="email" />
        </div>
    )
}