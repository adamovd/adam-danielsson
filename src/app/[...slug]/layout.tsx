export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* You can add a header, sidebar, etc. here */}
      {children}
    </section>
  );
}
