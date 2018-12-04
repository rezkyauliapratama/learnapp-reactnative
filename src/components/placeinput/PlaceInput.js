import React,{Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName:''
    };

    placeNameChangeHandler = textVal => {
        this.setState({
          placeName: textVal
        })
    };
    
    placeSubmitHandler = () =>{
        if (this.state.placeName.trim() === ""){
            return;
        }

        this.props.onPlaceAdded(this.state.placeName)
    };

    
    render() {
        return (
            <View style={styles.inputContainer}>
            <TextInput 
                style={styles.placeInput}
                placeholder="An awesome place"
                value={this.state.placeName}
                onChangeText={this.placeNameChangeHandler}
                />

            <Button
                style={styles.placeButton}
                title="Add"
                onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputContainer: {
      // flex: 1,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    placeInput: {
      width:"70%",
      padding: 5,
      borderWidth: 1,
      borderColor: "black"
    },
    placeButton: {
      width:"30%",
    }
  });
  

export default PlaceInput;