
import ProjectContent from '@/app/component/project.content';

type Params = {
  slug: string;
};

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}slugify/slugs/project/${slug}?populate=*`,
    { next: { revalidate: 7200 } }
  );
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

const SingleProjectPage = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <>

      <ProjectContent post={post} />
    </>

  );
}

export default SingleProjectPage;

