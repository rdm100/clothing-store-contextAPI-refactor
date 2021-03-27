import React, { useContext } from 'react';
import CollectionsContext from '../../contexts/collections/collections-context';
import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview.scss';

const CollectionOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(key => collectionsMap[key]);
  return (
    <div className='collections-overview'>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
      ))
    }
    </div>
  );
};

export default CollectionOverview;