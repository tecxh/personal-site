import { AtIcon, FilePdfIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";

interface ContactChipProps {
  href: string;
  text: string;
  iconVariant: 'github' | 'email' | 'linkedin' | 'pdf';
}

export const ContactChip = (props: ContactChipProps) => {
  const { href, text, iconVariant } = props;

  const Icon = (() => {
    switch (iconVariant) {
      case 'github':
        return <GithubLogoIcon />
      case 'linkedin':
        return <LinkedinLogoIcon />
      case 'pdf':
        return <FilePdfIcon />
      case 'email':
      default:
        return <AtIcon />
    }
  })()

  return (
    <div className="text-md lg:text-2xl border-2 rounded-4xl my-4 px-4 w-fit text-fuchsia-300 border-fuchsia-300 hover:text-fuchsia-200 hover:border-fuchsia-200">
      <a href={href} target="_blank" rel="noopener">
        <div className="flex flex-row items-center gap-2">
          {Icon}
          {text}
        </div>
      </a>
    </div>
  )
}