import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HelpSteps from './HelpSteps';
import Intro from './Intro';

class Helper extends Component {

    changeStep(index) {
        this.props.changeStep(index);
    }

    displayChildren() {
        if (this.props.active) {
            return React.Children.map(this.props.children, child => {
                if (child.props.helperIndex == this.props.step) {
                    return React.cloneElement(child, {
                        helperActive: true,
                        activeHelpStep: true,
                        changeStep: (index) => this.changeStep(index),
                        toggleHelp: () => this.props.toggleHelp()
                    });
                } else {
                    return React.cloneElement(child, {
                        helperActive: true,
                        activeHelpStep: false,
                    });
                }
            });
        } else if (!this.props.sequenceLength && !this.props.visited) {
            return (
                <View>
                    <Intro toggleHelp={this.props.toggleHelp} />
                    {this.props.children[0]}
                </View>
            );
        } else if (!this.props.sequenceLength) {
            return (
                <View>
                    {this.props.children[0]}
                    {this.props.children[1]}
                </View>
            );
        } else {
            return this.props.children;
        }
    }

    render() {
        return (
            <View>
                {
                    this.props.active ? 
                        <HelpSteps 
                            activeStep={this.props.step} 
                            changeStep={(index) => this.changeStep(index)} 
                            toggleHelp={this.props.toggleHelp} 
                        /> 
                    : null
                }
                {this.displayChildren()}
            </View>
        );
    }

}

export default Helper;
