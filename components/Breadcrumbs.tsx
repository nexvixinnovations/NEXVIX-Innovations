import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#8E92A4]">
        <li>
          <Link href="/" className="hover:text-[#0066FF] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              <span className="text-[#5B6070]" aria-hidden="true">
                /
              </span>
              {isLast ? (
                <span className="text-[#F5F6FA] font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-[#0066FF] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
