import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

/**
 * Default configuration.
 */
const DEFAULT = {
    duration: 3000,
    effect_duration: 1000,
    native_driver: true,
};

/**
 * Default styles.
 */
const STYLES = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: Number.MAX_SAFE_INTEGER,
    },
    snack: {
        width: '60%',
        backgroundColor: '#353535',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        opacity: 0.8,
        zIndex: Number.MAX_SAFE_INTEGER,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

/**
 * Animates a fade effect.
 * @param {Object} config the configuration of the effect.
 * @param {Number} to_value the opacity value.
 */
const fade = (config, to_value) => {
    Animated.timing(fade_anim, {
        toValue: to_value,
        duration: config.effect_duration,
        useNativeDriver: config.native_driver,
    }).start();
}

let fade_anim = new Animated.Value(0);

export default {
    show: (props = {}) => {
        let config = Object.assign(DEFAULT, props);

        fade(config, 1);
        setTimeout(() => {
            fade(config, 0);
        }, config.duration);
    },
    component: (props) => (
        <Animated.View
            style={[
                STYLES.container,
                { opacity: fade_anim },
                props.containerStyle,
            ]}
            pointerEvents='none'
        >
            {
                props.text !== '' &&
                <View style={[ STYLES.snack, props.snackStyle ]}>
                    <Text style={[ STYLES.text, props.textStyle ]}>{props.text}</Text>
                </View>
            }
        </Animated.View>
    ),
};
