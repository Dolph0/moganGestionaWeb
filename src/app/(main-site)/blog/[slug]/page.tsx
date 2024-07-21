import Caraousal from "@/components/HomePage/Caraousal.1";
import Image from "next/image";
import blog from '../../../../../blogs.json';

interface BlogDetailedProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: BlogDetailedProps) {
  const { slug } = params;
  const blogData = blog.find((b) => b.slug === slug);

  if (!blogData) {
    return <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-6 md:pt-12">Blog post not found</div>;
  }

  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-6 md:pt-12">
      <Caraousal />

      <article className="prose max-w-full prose-p:text-sm md:prose-p:text-lg py-14 prose-h2:text-center prose-h2:text-xl prose-h2:font-extrabold md:prose-h2:text-[42px]">
        <h2 className="font-extrabold text-center text-xl sm:text-3xl lg:text-[42px] text-brand-blue">
          {blogData.title}
        </h2>
        <Image
          src={blogData.image}
          alt="Blog Image"
          className="rounded-3xl mx-auto"
          height="500"
          width="600"
        />
        <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
      </article>
    </div>
  );
}
