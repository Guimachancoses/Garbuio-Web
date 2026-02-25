import { source } from "@/src/lib/source";
import { Suspense, useState } from "react";
import { BlogCard } from "@/src/components/blog-card";
import { TagFilter } from "@/src/components/tag-filter";
import { FlickeringGrid } from "@/src/components/magicui/flickering-grid";
import { HeroHeader } from "@/src/components/header";
import FooterSection from "@/src/components/footer";
import { AuroraText } from "@/src/components/ui/aurora-text";
import { AnimatedGroup } from '@/src/components/ui/animated-group'
import { formatDate } from "@/src/lib/utils"

interface BlogData {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  author?: string;
  authorImage?: string;
  thumbnail?: string;
}

interface BlogPageData {
  url: string;
  data: BlogData;
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tag?: string }>;
}) {

  const { locale } = await params;
  const { tag } = await searchParams;
  const [screen, setScreen] = useState<'login' | 'forgot' | 'create'>('login')

  const selectedTag = tag ?? "Todos";

  const allPages = source.getPages() as BlogPageData[];

  // remove rotas duplicadas geradas pelo fumadocs
  const uniquePages = Array.from(
    new Map(
      allPages.map((page) => {
        const cleanUrl = page.url
          .replace("/[locale]", "")
          .replace(/\/index$/, "");

        return [cleanUrl, { ...page, url: cleanUrl }];
      })
    ).values()
  );

  const sortedBlogs = [...uniquePages].sort(
    (a, b) =>
      new Date(b.data.date).getTime() -
      new Date(a.data.date).getTime()
  );

  const allTags = [
    "Todos",
    ...Array.from(
      new Set(sortedBlogs.flatMap((b) => b.data.tags ?? []))
    ).sort(),
  ];

  const filteredBlogs =
    selectedTag === "Todos"
      ? sortedBlogs
      : sortedBlogs.filter((blog) =>
        blog.data.tags?.includes(selectedTag)
      );

  const tagCounts = allTags.reduce((acc, tag) => {
    if (tag === "Todos") {
      acc[tag] = sortedBlogs.length;
    } else {
      acc[tag] = sortedBlogs.filter((blog) =>
        blog.data.tags?.includes(tag)
      ).length;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      <HeroHeader onCreate={() => setScreen('create')} onLogin={() => setScreen('login')} />
      <div className="pt-15 min-h-screen bg-background relative border-b border-border">
        {/* Background */}
        <div className="absolute top-0 left-0 z-0 w-full h-[350px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
          <FlickeringGrid
            className="absolute top-0 left-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.2}
            flickerChance={0.05}
          />
        </div>

        {/* Header */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  delayChildren: 1,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 1.5,
                },
              },
            },
          }}
        >
          <div className="p-6 border-b border-border flex flex-col gap-6 min-h-[250px] justify-center relative z-10">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex flex-col gap-2">
                <h1 className="flex items-center gap-3 text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                  Blog <AuroraText
                    colors={[
                      "#54CF61", // verde principal (Garbuio)
                      "#22c55e", // verde claro
                      "#16a34a", // verde médio
                      "#15803d", // verde escuro
                    ]}
                  >
                    Garbuio!
                  </AuroraText>
                </h1>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-4">
                  Acompanhe as novidades, conteúdos e atualizações da Transportadora Garbuio, referência em logística e transporte.
                </p>
              </div>

              {allTags.length > 0 && (
                <div className="max-w-7xl mx-auto w-full">
                  <TagFilter
                    tags={allTags}
                    selectedTag={selectedTag}
                    tagCounts={tagCounts}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Grid */}
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-0">
            <Suspense fallback={<div>Carregando...</div>}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative overflow-hidden border-x border-border
                ${filteredBlogs.length < 4 ? "border-b" : "border-b-0"
                  }`}
              >

                {filteredBlogs.map((blog) => {
                  const formattedDate = formatDate(
                    new Date(blog.data.date)
                  );

                  const cleanUrl = blog.url.replace("/[locale]", "");
                  const href = `/${locale}${cleanUrl}`;

                  return (
                    <BlogCard
                      key={blog.url}
                      url={href}
                      title={blog.data.title}
                      description={blog.data.description}
                      date={formattedDate}
                      thumbnail={blog.data.thumbnail}
                      tag={blog.data.tags}
                      showRightBorder={filteredBlogs.length < 3}
                    />
                  );
                })}
              </div>
            </Suspense>

          </div>
        </AnimatedGroup>
      </div>

      <FooterSection />
    </>
  );
}
