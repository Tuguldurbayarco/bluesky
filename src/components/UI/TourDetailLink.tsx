"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type TourDetailLinkProps = {
  locale: string;
  tourHref: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const TourDetailLinkContent = ({ locale, tourHref, className, style, children }: TourDetailLinkProps) => {
  const searchParams = useSearchParams();
  const tab = searchParams?.get("tab");
  const queryString = tab === "normal" ? "?tab=normal" : "";
  const href = `/${locale}${tourHref}${queryString}`;
  
  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
};

const TourDetailLink = (props: TourDetailLinkProps) => {
  const fallbackHref = `/${props.locale}${props.tourHref}`;
  
  return (
    <Suspense fallback={<Link href={fallbackHref} className={props.className} style={props.style}>{props.children}</Link>}>
      <TourDetailLinkContent {...props} />
    </Suspense>
  );
};

export default TourDetailLink;
