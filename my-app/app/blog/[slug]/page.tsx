import React from 'react'
import { client } from '../../lib/sanity'
import { blogArticle } from '@/app/lib/interface';
import SectionHeader from '@/app/components/sectionHeader';
import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';
import { PortableText } from 'next-sanity';

export const revalidate = 60;

async function getBlogData(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage,
    }[0]`;

  const data = await client.fetch(query);

  return data;
}

const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-"></div>
  </div>
);

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: blogArticle = await getBlogData(params.slug);
  return (
    <div className='w-full  flex flex-col items-center text-center p-section'>
      <SectionHeader topper='Blog' title={data.title} text='' />
      <Image src={urlFor(data.titleImage).url()} alt={data.title} width={600} height={400} priority className='mt-8 rounded-lg' />
      <div className='mt-16 w-full md:w-3/5 prose-stone prose-lg md:prose-xl 2xl:prose-2xl text-white text-left prose-li:text-secondary  prose-headings:font-bold prose-p:text-gray-200 '>
        <PortableText value={data.content} />
      </div>
    </div>
  )
}

export default BlogArticle