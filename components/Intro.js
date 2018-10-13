import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import Section from './Section';

class Intro extends Component {

    render() {
        return (
            <Section title='Welcome to Capo guru'>
                    <Text style={{paddingHorizontal: 5, marginBottom: 20}}>Welcome to Capo Guru. To get started add a chord to your sequence, or click 'Take a tour' below to add a demo sequence and walk through the application.</Text>
                <Button
                    primary
                    raised
                    onPress={() => this.props.toggleHelp()}
                    text='Take a tour'
                />
            </Section>
        );
    }
}

export default Intro;
