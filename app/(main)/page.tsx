import Feed from "@/components/feed";

export default async function Home() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh_-_58px)] max-w-[1300px] grid-cols-1 px-4 md:grid-cols-[1fr_352px] md:gap-8 md:px-8 lg:gap-12">
      <div className="relative flex h-full w-full max-w-full flex-col pt-2">
        <Feed active={""} />
      </div>

      <div className="hidden h-full w-full border-l border-border pl-8 md:flex"></div>
    </main>
  );
}
