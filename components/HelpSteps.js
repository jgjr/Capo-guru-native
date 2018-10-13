import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';
import Section from './Section';

const styles = StyleSheet.create({
    Outer: {
        zIndex: 3
    },
    Inner: {
        flexDirection: 'row',
        marginHorizontal: -5
    },
    ButtonContainer: {
        flex: 1,
        marginHorizontal: 5
    },
});

class HelpSteps extends Component {

    render() {
        const steps = ['Add chords', 'View sequence', 'Capo positions', 'Possible keys'];
        return (
            <View style={styles.Outer}>
                <Section title='Steps'>
                    <View style={styles.Inner}>
                        {steps.map((label, index) => (
                            <View style={styles.ButtonContainer} key={index}>
                                <Button
                                    primary={(index == this.props.activeStep)}
                                    raised
                                    onPress={() => this.props.changeStep(index)}
                                    text={(index + 1).toString()}
                                />
                            </View>
                        ))}
                        <View style={styles.ButtonContainer}>
                            <Button
                                raised
                                onPress={() => this.props.toggleHelp()}
                                text='✓'
                            />
                        </View>
                    </View>
                </Section>
            </View>
        );
    }

}

export default HelpSteps;
