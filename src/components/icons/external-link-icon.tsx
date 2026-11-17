export default function ExternalLinkIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 13 15 5" />
      <path d="M8.5 5H15v6.5" />
    </svg>
  );
}
