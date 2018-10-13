import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import Section from './Section';

class HelperText extends Component {

    render() {
        return (
            <Fragment>
                {this.props.active ?
                    <Section activeHelpStep={true}>
                        <Text style={{marginBottom: 10}}>{this.props.children}</Text>
                        <View style={{maxWidth: 100}}>
                            <Button
                                primary
                                raised
                                onPress={() => this.props.action()}
                                text={this.props.button}
                            />
                        </View>
                    </Section>
                : null}
            </Fragment>
        );
    }

}

export default HelperText;
