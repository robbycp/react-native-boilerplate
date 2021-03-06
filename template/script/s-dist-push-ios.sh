# Remove previous bundle
rm -rf ./CodePush/*

# Build bundleJS
npx react-native bundle \
  --platform ios \
  --entry-file index.js \
  --bundle-output ./Codepush/main.jsbundle \
  --assets-dest ./CodePush \
  --dev false

# Get version
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
echo Release bundle to appcenter: $PACKAGE_VERSION

# Upload to appcenter
appcenter codepush release \
  -a kudaterbang-test/react-native-boilerplate-ios \
  -c ./CodePush \
  -t "~$PACKAGE_VERSION" \
  -d Staging