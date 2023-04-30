import { FC } from 'react';

export interface NavigatorProps {
  collectionName: string;
}

const Navigator: FC<NavigatorProps> = ({ collectionName }) => {
  return <div>{collectionName}</div>;
};

export default Navigator;
