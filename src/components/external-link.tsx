import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children" | "target" | "rel"
> & {
  href: string;
  children: ReactNode;
  showIcon?: boolean;
};

export function ExternalLink({
  href,
  children,
  showIcon = false,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {showIcon ? <ArrowUpRight aria-hidden="true" weight="bold" /> : null}
    </a>
  );
}
