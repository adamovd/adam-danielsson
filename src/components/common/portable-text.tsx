import { PortableText, type PortableTextComponents } from 'next-sanity';

import ResolvedLink from './resolved-link';

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: any[]; // Accept any array for flexibility with Sanity data
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children, value }) => (
        // Add an anchor to the h1
        <h1 className="group relative">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute bottom-0 left-0 top-0 -ml-6 flex items-center opacity-0 transition-opacity group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </h1>
      ),
      h2: ({ children, value }) => {
        // Add an anchor to the h2
        return (
          <h2 className="group relative">
            {children}
            <a
              href={`#${value?._key}`}
              className="absolute bottom-0 left-0 top-0 -ml-6 flex items-center opacity-0 transition-opacity group-hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </a>
          </h2>
        );
      },
      h3: ({ children }) => <h3 className="text-5xl font-bold">{children}</h3>,
      ul: ({ children }) => (
        <ul className="my-4 list-disc space-y-2 pl-6 marker:text-primary">
          {children}
        </ul>
      ),
      ol: ({ children }) => (
        <ol className="my-4 list-decimal space-y-2 pl-6 marker:text-primary">
          {children}
        </ol>
      ),
    },

    marks: {
      link: ({ children, value: link }) => {
        return <ResolvedLink link={link}>{children}</ResolvedLink>;
      },
      textColor: ({ children, value }) => (
        <span style={{ color: value?.value || value?.hex || value?.color }}>
          {children}
        </span>
      ),
      highlightColor: ({ children, value }) => (
        <span
          style={{
            backgroundColor: value?.value || value?.hex || value?.color,
          }}
        >
          {children}
        </span>
      ),
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
    },
  };

  return (
    <div className={['prose', className].filter(Boolean).join(' ')}>
      <PortableText components={components} value={value} />
    </div>
  );
}
