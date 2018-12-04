import React from 'react';
import{View, StyleSheet} from 'react-native';

import ListItem from '../listitem/ListItem';

const placeList = props => {
    
    const placesOutput = props.places.map((place,index) => (
        <ListItem key={index} placeName={place}/>
      ));
    return placesOutput;
}

export default placeList;
