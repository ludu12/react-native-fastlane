# react-native-fastlane
Simple React Native App for demo with Fastlane

## Prerequisites
There are several prerequisites to get started with this app (node, java, xcode, Android Studio)

Follow the React-Native [Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for full walk through of installing dependencies.

Once you've gotten all your dependencies, cd to root directory, run
```
npm install
```
and then follow these cooresponding instructions for each platform.

### NOTE, install Cocoapods for iOS:
```
sudo gem install cocoapods
```

# Run instructions for iOS:
- Run the following in root directory:
    ```
    pod install --project-directory=ios
    npm run ios
    ```
or
- Open ios/fastlanedemo.xcworkspace in Xcode
- Hit the Run button (should start metro server for you)

# Run instructions for Android:
- Have an Android emulator running (quickest way to get started), or a device connected.
- Run the following in root directory: 
    ```
    npm run android
    ```
or
- Open android/ folder in Android Studio
- Start metro server:
    ```
    npm start
    ```
- Hit the run Button