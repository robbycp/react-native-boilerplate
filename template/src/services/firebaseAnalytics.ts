import analytics from '@react-native-firebase/analytics';
import {
  getTrackingStatus,
  requestTrackingPermission,
} from 'react-native-tracking-transparency';

/**
 * Functionality
 */
export async function initialAnalytics() {
  try {
    let trackingStatus = await getTrackingStatus();
    if (trackingStatus === 'not-determined') {
      trackingStatus = await requestTrackingPermission();
    }
    if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      // enable tracking features
      await analytics().setAnalyticsCollectionEnabled(true);
    } else {
      await analytics().setAnalyticsCollectionEnabled(false);
    }
  } catch (error) {
    console.info('[firebase-analytics] initial error', error);
  }
}

export async function logEvent(
  eventName: string,
  params?: Record<string, any>,
) {
  await analytics().logEvent(eventName, params);
}

export async function logScreen(screenName: string | undefined) {
  await analytics().logScreenView({
    screen_name: screenName,
    screen_class: screenName,
  });
}

/**
 * Custom event
 */

export function logPressHomeList() {
  logEvent('press_list_home');
}
