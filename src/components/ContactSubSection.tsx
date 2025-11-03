import { ContactChip } from "./HomeSections/ui/ContactChip"

export const ContactSubSection = () => {
    return (
        <div className="mt-10 mb-10 lg:mb-30">
            {/* <h3 className="text-2xl lg:text-5xl mb-2 lg:mb-10 text-fuchsia-400">Contact</h3> */}
            {/* <p className="text-md lg:text-2xl mb-2 lg:mb-10">Got a project you think I&apos;d fit into or need some help with WCAG compliance? Live around Indy and want to grab coffee? Let&apos;s do it.</p> */}
            <ContactChip href="mailto:alecxmoritz@gmail.com" text="Email" iconVariant="email" />
            <ContactChip href="https://github.com/tecxh" text="Github" iconVariant="github" />
            <ContactChip href="https://drive.google.com/file/d/1XSTpnI2jB0x7fSbQonK3RxqsteZ8vqnq/view" text="Resume" iconVariant="pdf" />
            <ContactChip href="https://www.linkedin.com/in/alecx-moritz-81a1b615a/" text="Linkedin" iconVariant="linkedin" />
        </div>
    )
}
