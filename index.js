import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

/**
 * Default duration of the fade effect.
 */
const DEFAULT_EFFECT_DURATION = 1000;

/**
 * Default duration of the snack.
 */
const DEFAULT_DURATION = 3000;

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
    }
});

/**
 * Animates a fade effect.
 * @param {double} duration the duration of the effect.
 * @param {number} toValue the opacity value.
 */
const fade = (duration, to_value) => {
    Animated.timing(fade_anim, {
        toValue: to_value,
        duration: duration,
        useNativeDriver: true,
    }).start();
}

let fade_anim = new Animated.Value(0);

export default {
    show: (props = {}) => {
        let effect_duration = props.effect_duration ?
            props.effect_duration :
            DEFAULT_EFFECT_DURATION;

        fade(effect_duration, 1);
        setTimeout(() => {
            fade(effect_duration, 0);
        }, props.duration ? props.duration : DEFAULT_DURATION);
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
            <View style={[ STYLES.snack, props.snackStyle ]}>
                <Text style={[ STYLES.text, props.textStyle ]}>{props.text ? props.text : ''}</Text>
            </View>
        </Animated.View>
    ),
};
