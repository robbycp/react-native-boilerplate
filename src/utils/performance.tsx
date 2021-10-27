import React, {ProfilerOnRenderCallback} from 'react';
import performance, {
  setResourceLoggingEnabled,
  PerformanceObserver,
} from 'react-native-performance';
import type {
  PerformanceMetric,
  PerformanceResourceTiming,
  PerformanceReactNativeMark,
} from 'react-native-performance';
import {Text} from 'react-native-paper';

export const setResourceLogging = () => {
  setResourceLoggingEnabled(__DEV__);
};

export const traceRender: ProfilerOnRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  // commitTime, // when React committed this update
  // interactions, // the Set of interactions belonging to this update
) => {
  return performance.measure(id, {
    start: performance.timeOrigin + startTime,
    duration: actualDuration,
  });
};

const formatValue = (value: number, unit?: string) => {
  switch (unit) {
    case 'ms':
      return `${value.toFixed(1)}ms`;
    case 'byte':
      return `${(value / 1024 / 1024).toFixed(1)}MB`;
    default:
      return value.toFixed(1);
  }
};

export const Entry = ({
  name,
  value,
  unit = 'ms',
}: {
  name: string;
  value: number;
  unit?: string;
}) => (
  <Text>
    {name}: {formatValue(value, unit)}
  </Text>
);

export const usePerformance = () => {
  const [metrics, setMetrics] = React.useState<PerformanceMetric[]>([]);
  const [nativeMarks, setNativeMarks] = React.useState<
    PerformanceReactNativeMark[]
  >([]);
  const [resources, setResources] = React.useState<PerformanceResourceTiming[]>(
    [],
  );
  React.useEffect(() => {
    new PerformanceObserver(() => {
      setNativeMarks(
        performance
          .getEntriesByType('react-native-mark')
          .sort(
            (a: PerformanceReactNativeMark, b: PerformanceReactNativeMark) =>
              a.startTime - b.startTime,
          ),
      );
    }).observe({type: 'react-native-mark', buffered: true});

    new PerformanceObserver(() => {
      setMetrics(performance.getEntriesByType('metric'));
    }).observe({type: 'metric', buffered: true});
    new PerformanceObserver(() => {
      setResources(performance.getEntriesByType('resource'));
    }).observe({type: 'resource', buffered: true});
  }, []);

  // console.info('[Performance] metrics', metrics);
  // console.info('[Performance] nativeMarks', nativeMarks);
  // console.info('[Performance] resources', resources);

  return {
    metrics,
    resources,
    nativeMarks,
  };
};
