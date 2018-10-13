import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-material-ui';

const styles = StyleSheet.create({
    stepperContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        height: 36,
    },
    stepperDots: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    activeStepDot: {
        color: '#2196f3',
        marginHorizontal: 3,
        lineHeight: 36
    },
    stepDot: {
        color: '#bfbfbf',
        marginHorizontal: 3,
        lineHeight: 36
    },
    stepperButton: {
        flex: 1
    }
});

class Stepper extends Component {

    dots() {
        let dots = [];
        for (let i = 0; i < this.props.numSteps; i++) {
            if (i == this.props.currentStep) {
                dots.push(<Text key={i} style={styles.activeStepDot}>●</Text>);
            } else {
                dots.push(<Text key={i} style={styles.stepDot}>●</Text>);
            }
        }
        return dots;
    }

    render() {
        return (
            <View style={styles.stepperContainer}>
                <View style={styles.stepperButton}>
                    <Button
                        raised primary
                        onPress={() => this.props.changeStep(-1)}
                        text='Back'
                        disabled={this.props.currentStep <= 0}
                    />
                </View>
                <View style={styles.stepperDots}>
                    {this.dots().map(dot => dot)}
                </View>
                <View style={styles.stepperButton}>
                    <Button
                        raised primary
                        onPress={() => this.props.changeStep(1)}
                        text='Next'
                        disabled={this.props.currentStep >= this.props.numSteps - 1}
                    />
                </View>
            </View>
        );
    }

}

export default Stepper;
