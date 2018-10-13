import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChordChip from './ChordChip';
import HelperText from './HelperText';
import Overlay from './Overlay';
import Section from './Section';

const styles = StyleSheet.create({
    chipContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
    }
});

class PossibleKeys extends Component {

    title() {
        if (this.props.keys.length === 0) {                 
            return 'No possible keys';
        } else if (this.props.keys.length === 1) {
            return 'Possible key';          
        } else {
            return 'Possible keys';                             
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Section title={this.title()} activeHelpStep={this.props.activeHelpStep}>
                    <View style={styles.chipContainer}>
                        {this.props.keys.map((key, index) => {
                            return (
                                <ChordChip key={index} chord={key.root}  />
                            )
                        })}
                    </View>
                    <Overlay active={this.props.helperActive && !this.props.activeHelpStep} />
                </Section>
                <HelperText active={this.props.activeHelpStep} button="Done!" action={() => this.props.toggleHelp()}>
                    If the chords you have entered all fit into one or more keys, those keys will appear here. 
                </HelperText>
            </Fragment>
        );
    }

}

export default PossibleKeys;
