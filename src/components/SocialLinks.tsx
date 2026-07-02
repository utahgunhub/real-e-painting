import { Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/socialLinks";
import { cn } from "@/lib/utils";

type SocialIconType = (typeof SOCIAL_LINKS)[number]["icon"];

const SocialIcon = ({ icon, className }: { icon: SocialIconType; className?: string }) => {
  if (icon === "instagram") {
    return <Instagram className={cn("w-5 h-5", className)} />;
  }

  return (
    <svg className={cn("w-5 h-5", className)} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
};

interface SocialLinksProps {
  variant?: "icons" | "list" | "inline";
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
}

export const SocialLinks = ({
  variant = "icons",
  className,
  iconClassName,
  linkClassName,
}: SocialLinksProps) => {
  if (variant === "list") {
    return (
      <ul className={cn("space-y-3", className)}>
        {SOCIAL_LINKS.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group",
                linkClassName
              )}
            >
              <span className="w-10 h-10 rounded-xl icon-accent flex items-center justify-center shrink-0 group-hover:opacity-90">
                <SocialIcon icon={social.icon} />
              </span>
              <span>
                <span className="block font-medium text-foreground">{social.name}</span>
                <span className="text-sm">{social.handle}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  if (variant === "inline") {
    return (
      <div className={cn("flex flex-wrap gap-4", className)}>
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 text-sm hover:text-primary transition-colors",
              linkClassName
            )}
          >
            <SocialIcon icon={social.icon} className={iconClassName} />
            <span>
              {social.name} <span className="text-muted-foreground">({social.handle})</span>
            </span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex gap-4", className)}>
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow Real E Painting on ${social.name} (${social.handle})`}
          className={cn(
            "w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors",
            linkClassName
          )}
        >
          <SocialIcon icon={social.icon} className={iconClassName} />
        </a>
      ))}
    </div>
  );
};

export { SocialIcon };
