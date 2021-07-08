<h1 align="center">
  Usnack
  <br>
</h1>

<p align="center">Simple snackbar component for Android and iOS.</p>

<p align="center">
    <img src="https://img.shields.io/npm/dm/usnack.svg">
    <img src="https://img.shields.io/badge/stable-1.0.0-blue.svg">
    <img src="https://img.shields.io/badge/license-MIT-orange.svg">
</p>

Usnack is a simple snackbar component that works seamlessly in Android and iOS, it does not have any external dependency and is extremely easy to import and use.

<p align="center">
  <img src="https://i.imgur.com/iOtPMF2.gif" width="400"/>  
</p>

Its default style may remind you the one used in the Instagram app.

## Install and use

1. Install it with npm:

```bash
npm install usnack
```

or yarn:

```bash
yarn add usnack
```

2. Import in your Js:

```js
import Usnack from 'usnack';
```

3. Use:

```js
Usnack.show();

<Usnack.component text='Hello world'/>
```

## Usnack.Component properties

| Prop           | Data type | Description                |
|----------------|-----------|----------------------------|
| text           | `string`  | The text to display        |
| containerStyle | `object`  | The style of the container |
| snackStyle     | `object`  | The style of the snackbar  |
| textStyle      | `object`  | The style of the text      |

## Show

`show(options = {})`

Fades in all the `Usnack.component`s.

The optional parameter `options` must be an object which can have the following properties:

* **duration** (The display time in milliseconds, by default it is `3000`).

* **effect_duration** (The fade in and out duration time in milliseconds, by default it is `1000`).

* **native_driver** (Use or not the native driver, by default it is `true`).

* **opacity** (The final opacity, by default it is `1`).

## Examples

Simple text:

```js
import Usnack from 'Usnack';

function example() {
    Usnack.show();
    return <Usnack.component text='No internet connection'/>;
}
```

Custom time:

```js
import View from 'react-native';
import Usnack from 'Usnack';

function example() {
    Usnack.show({
        duration: 10000,
        effect_duration: 5000,
    });

    return (
        <View>
            <Usnack.component text='Waiting 5 seconds'/>
        </View>
    );
}
```

Custom time and styles:

```js
import View from 'react-native';
import Usnack from 'Usnack';

function example() {
    Usnack.show({
        duration: 5000,
        effect_duration: 500,
    });

    return (
        <View>
            <Usnack.component
                text='Slow fade in and out ;)'
                containerStyle={{
                    top: 'inherit',
                    bottom: 100,
                }}
            />
        </View>
    );
}
```

## Contributing

Any contribution or support to this project in the form of a issue, pull request or message will be highly appreciated. ❤️

You can read more about it [right here](CONTRIBUTING.md). Don't be shy :)

## License

Usnack is open-source software licensed under the [MIT license](LICENSE).
