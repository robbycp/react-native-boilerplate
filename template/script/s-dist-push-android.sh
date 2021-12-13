# Remove previous bundle
rm -rf ./sourcemap/*

# Build bundleJS
npx react-native bundle \
  --platform android \
  --entry-file index.js \
  --bundle-output ./sourcemap/index.android.bundle \
  --assets-dest ./sourcemap \
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
  -a kudaterbang-test/react-native-boilerplate-android \
  -c ./sourcemap \
  -t "~$PACKAGE_VERSION" \
  -d Staging