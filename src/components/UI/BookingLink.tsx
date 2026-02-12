"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type BookingLinkProps = {
  locale: string;
  tourValue: string;
  buttonText: string;
  className?: string;
};

const BookingLinkContent = ({ locale, tourValue, buttonText, className }: BookingLinkProps) => {
  const searchParams = useSearchParams();
  const tab = searchParams?.get("tab");
  const isStandard = tab === "normal";
  
  const href = `/${locale}/contacts?tour=${tourValue}${isStandard ? '&standard=true' : ''}#targetBlock`;
  
  return (
    <Link href={href} className={className}>
      {buttonText}
    </Link>
  );
};

const BookingLink = (props: BookingLinkProps) => {
  return (
    <Suspense fallback={<Link href={`/${props.locale}/contacts?tour=${props.tourValue}#targetBlock`} className={props.className}>{props.buttonText}</Link>}>
      <BookingLinkContent {...props} />
    </Suspense>
  );
};

export default BookingLink;
