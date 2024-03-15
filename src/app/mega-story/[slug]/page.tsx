
import PostContent from '@/app/component/post.content';

type Params = {
  slug: string;
};

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}slugify/slugs/blog/${slug}?populate=*`,
    { next: { revalidate: 7200 } }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

const SingleBlogPage = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <>

      <PostContent post={post} />
    </>

  );
}

export default SingleBlogPage;

