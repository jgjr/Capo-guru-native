import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    chordDiagramContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chordName: {
        fontSize: 25,
        paddingBottom: 10,
    },
});

const chordImages = {
    'A 7': require('./../assets/images/A7.png'),
    'A#/Bb min': require('./../assets/images/ABbmin.png'),
    'A maj7': require('./../assets/images/Amaj7.png'),
    'A min7': require('./../assets/images/Amin7.png'),
    'A min': require('./../assets/images/Amin.png'),
    'A': require('./../assets/images/A.png'),
    'B min': require('./../assets/images/Bmin.png'),
    'C 7': require('./../assets/images/C7.png'),
    'C': require('./../assets/images/C.png'),
    'D 7': require('./../assets/images/D7.png'),
    'D maj7': require('./../assets/images/Dmaj7.png'),
    'D min7': require('./../assets/images/Dmin7.png'),
    'D min': require('./../assets/images/Dmin.png'),
    'D': require('./../assets/images/D.png'),
    'E 7': require('./../assets/images/E7.png'),
    'E maj7': require('./../assets/images/Emaj7.png'),
    'E min7': require('./../assets/images/Emin7.png'),
    'E min': require('./../assets/images/Emin.png'),
    'E': require('./../assets/images/E.png'),
    'F': require('./../assets/images/F.png'),
    'G 7': require('./../assets/images/G7.png'),
    'G': require('./../assets/images/G.png'),
};

class ChordDiagram extends Component {

    constructor(props) {
        super(props);
        const dimensions = this.getDiagramDimensions();
        this.state = {
            diagramWidth: dimensions.width,
            diagramHeight: dimensions.height,
        }
    }

    getDiagramDimensions() {
        const viewWidth = Dimensions.get('window').width - 30;
        const viewHeight = Dimensions.get('window').height - 165;
        const imageWidth = 597;
        const imageHeight = 695;
        let diagramWidth;
        let diagramHeight;
        const widthRatio = viewWidth / imageWidth; 
        const heightRatio = viewHeight / imageHeight; 
        if (widthRatio >= 1 && heightRatio >= 1) {
            diagramWidth = imageWidth;
            diagramHeight = imageHeight;
        } else if (widthRatio >= 1) {
            diagramWidth = imageWidth * heightRatio;
            diagramHeight = viewHeight;
        } else if (heightRatio >= 1) {
            diagramWidth = viewWidth;
            diagramHeight = viewHeight * widthRatio;
        } else {
            diagramWidth = imageWidth * Math.min(widthRatio, heightRatio);
            diagramHeight = imageHeight * Math.min(widthRatio, heightRatio);
        }
        return {width: diagramWidth, height: diagramHeight};
    }

    handleLayoutChange(event) {
        const dimensions = this.getDiagramDimensions();
        this.setState({
            diagramWidth: dimensions.width,
            diagramHeight: dimensions.height,
        });
    }

    render() {
        return (
            <View style={styles.chordDiagramContainer} onLayout={() => this.handleLayoutChange()}>
                <Text style={styles.chordName}>{this.props.chord.string}</Text>
                <Image
                    style={{resizeMode: 'contain', width: this.state.diagramWidth, height: this.state.diagramHeight}}
                    source={chordImages[this.props.chord.string]}
                />
            </View>
        );
    }

}

export default ChordDiagram;
