'use client'
import { Card, Layout, Typography } from 'antd';
import Image from 'next/image';
import Meta from 'antd/es/card/Meta';
import styles from './styles.module.css';

type ProjectContentProps = {
    post: any;
};

const ProjectContent: React.FC<ProjectContentProps> = ({ post }) => {

    return (
        <Layout style={{ margin: '70px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '100%', border: 'none' }}
                title={<Typography.Title style={{ fontSize: '32px', whiteSpace: 'pre-line' }}>{post.data.attributes.title}</Typography.Title>}
            >
                <Meta description={
                    <>
                        <div style={{ width: '100%', paddingTop: '66.66%', position: 'relative' }}>
                            <Image
                                layout="fill"
                                objectFit="cover"
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${post.data.attributes.image.data.attributes.url}`}
                                alt={post.data.attributes.Title}

                            />
                            src={
                                post.data.attributes.image.data && post.data.attributes.image.data.attributes.formats
                                    ? post.data.attributes.image.data.attributes.formats.medium
                                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.data.attributes.image.data.attributes.formats.medium.url}`
                                        : post.data.attributes.image.data.attributes.formats.large
                                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.data.attributes.image.data.attributes.formats.large.url}`
                                            : `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.data.attributes.image.data.attributes.url}`
                                    : "/img/place-holder.png"
                            }
                        </div>
                        <Typography.Paragraph style={{ fontSize: '17px', margin: 0 }}>
                            <div className={styles.myClass} dangerouslySetInnerHTML={{ __html: post.data.attributes.Content }} ></div>
                        </Typography.Paragraph>
                    </>
                }
                />
            </Card>



        </Layout>
    );
}

export default ProjectContent;