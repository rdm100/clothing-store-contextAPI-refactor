import React, { useContext } from 'react';
import CollectionsContext from '../../contexts/collections/collections-context';
import CollectionItem from '../../components/collection-item/collection-item';

import './collection.scss';

const Collection = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

export default Collection;