'use client'

import { Card, Col, Row, Skeleton, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import Meta from 'antd/es/card/Meta';
import { Layout } from 'antd';
const { Content } = Layout;

type PostCardProps = {
    post: any;

};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <>
            <Content style={{ padding: '20px 15px 0px' }}>
                <Card
                    style={{ width: '100%', height: '100%', position: 'relative', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}
                    cover={
                        <Link href={`/blog/${post?.attributes.slug}`}>
                            <div style={{ padding: '10px', width: '100%', paddingTop: '66.66%', position: 'relative' }}>
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    src={
                                        post.attributes.image.data && post.attributes.image.data.attributes.formats
                                            ? post.attributes.image.data.attributes.formats.medium
                                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.image.data.attributes.formats.medium.url}`
                                                : post.attributes.image.data.attributes.formats.large
                                                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.image.data.attributes.formats.large.url}`
                                                    : `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.image.data.attributes.url}`
                                            : "/img/place-holder.png"
                                    }
                                    alt={post.attributes.title}
                                />
                            </div>
                        </Link>
                    }
                >
                    <Meta
                        description={
                            <Link href={`/blog/${post?.attributes.slug}`}>
                                <Typography.Title style={{ margin: '10px 20px', fontSize: '14px' }} level={5}>
                                    <div style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: post?.attributes?.title }} />
                                </Typography.Title>
                            </Link>
                        }
                    />
                </Card>
            </Content>
        </>
    );

}

export default PostCard;