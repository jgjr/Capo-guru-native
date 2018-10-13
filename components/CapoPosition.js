import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChordChip from './ChordChip';
import ChordDiagram from './ChordDiagram';
import Popup from './Popup';
import Stepper from './Stepper';


const styles = StyleSheet.create({
    fret: {
        fontSize: 16,
        paddingHorizontal: 12,
        top: 6,
        color: '#000000'
    },
    capoPositionContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        marginVertical: 5
    },
    chordDiagram: {
        flex: 1,
    },
    stepper: {
        height: 36,
    }
});

class CapoPosition extends Component {

    state = {
        modalVisible: false,
        activeStep: 0,
        windowWidth: Dimensions.get('window').width
    };
    
    toggleModal() {
        this.setState({
            activeStep: 0,
            modalVisible: !this.state.modalVisible
        });
    }

    changeStep(change) {
        this.setState({activeStep: this.state.activeStep + change});
    }


    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.toggleModal()}>
                    <View style={styles.capoPositionContainer} >
                        <Text style={styles.fret}>Fret {this.props.fret}</Text>
                        {this.props.sequence.map((chord, index) => {
                            return (
                                <ChordChip key={index} chord={chord.string}  />
                            )
                        })}
                    </View>
                </TouchableOpacity>
                <Popup title={'Capo on fret ' + this.props.fret} visible={this.state.modalVisible} toggle={() => this.toggleModal()}>
                    <View style={styles.chordDiagram} >
                        <ChordDiagram chord={this.props.sequence[this.state.activeStep]} />
                    </View>
                    <View style={styles.stepper}>
                        <Stepper 
                            numSteps={this.props.sequence.length} 
                            currentStep={this.state.activeStep} 
                            changeStep={(change) => this.changeStep(change)}
                        />
                    </View>
                </Popup>
            </View>
        );
    }

}

export default CapoPosition;
