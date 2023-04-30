import { FC } from 'react';

export interface ContentProps {
  imageUrl: string;
  name: string;
  description: string;
  permalink: string;
}

const Content: FC<ContentProps> = ({ imageUrl, name, description, permalink }) => {
  return (
    <>
      <div>{imageUrl}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{permalink}</div>
    </>
  );
};

export default Content;
