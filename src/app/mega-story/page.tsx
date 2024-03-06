'use client';
import { useEffect, useState } from 'react';
import PostCard from "../component/post.card";
import { Row, Col, Layout, Pagination, Typography } from 'antd';

type Post = {
  id: number;
};

type Meta = {
  total: number;
  pagination: any;
};

type PostsData = {
  data: Post[];
  meta: Meta;
};

const MegaStoryPage = () => {
  const [posts, setPosts] = useState<PostsData | null>(null);


  const [meta, setMeta] = useState({
    current: 1,
    pageSize: 20,
    total: 0,
    pages: 0,
  });

  useEffect(() => {

    getData();
  }, []);


  const getData = async () => {

    const res = await fetch(`/mega-story/api?current=${meta.current}&pagesize=${meta.pageSize}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setPosts(data);
    setMeta({
      current: data.meta.pagination.page,
      pageSize: data.meta.pagination.pageSize,
      pages: data.meta.pagination.pageCount,
      total: data.meta.pagination.total,
    })

  }






  if (!posts) {
    return <div>Loading...</div>;
  }

  const handleOnChange = async (page: number, pageSize: number) => {

    const res = await fetch(`/mega-story/api?current=${page}&pagesize=${pageSize}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setPosts(data);

    setMeta({
      current: page,
      pageSize: pageSize,
      pages: meta.pages,
      total: meta.total,
    })


  }

  return (
    <>
      <Row style={{ position: 'relative' }}>

        <Col style={{
          width: '100%', height: '90px', margin: '50px 0px 0 0px', padding: '0px', textAlign: 'center', position: 'relative'
        }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', translate: '-50% 0%', width: '100%', height: '600px' }}>
            <Typography.Title style={{ textAlign: 'left', margin: '30px 0 0px 20px', fontSize: '30px', fontWeight: '600' }} >Mega Story</Typography.Title>
          </div>
        </Col>
      </Row>
      <Layout style={{ backgroundColor: '#fff', maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Row gutter={3}>

          {posts && posts.data && posts.data.map((post: Post) => (
            <Col key={post.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
        <Pagination
          current={meta.current}
          pageSize={meta.pageSize}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          total={meta.total}
          onChange={handleOnChange}
          showSizeChanger={true}
          style={{ margin: '20px 0' }}
        />
      </Layout>
    </>
  );
}

export default MegaStoryPage;