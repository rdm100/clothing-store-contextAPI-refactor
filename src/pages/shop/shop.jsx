import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collection-overview/collection-overview';
import Collection from '../collection/collection';

const Shop = ({ match }) => {
  return ( 
    <div className='shop'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection}/>
    </div>
    );
};
 
export default Shop;