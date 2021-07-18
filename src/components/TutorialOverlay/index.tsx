import React, { useCallback } from 'react';
import { Modal, View } from 'react-native';
import Svg, { Rect, Defs, Circle, Mask } from 'react-native-svg';
import styles from './styles';

type TutorialOverlayProps = {
  shape: string;
  x: number | string;
  y: number | string;
  width?: number | string;
  height?: number | string;
  radius?: number;
  borderRadius?: number;
  backgroundColor?: string;
};

const TutorialOverlay: React.FC<TutorialOverlayProps> = ({
  shape = 'circle',
  x = 0,
  y = 0,
  backgroundColor = 'rgba(0, 0, 0, 0.9)',
  width = 100,
  height = 100,
  borderRadius = 10,
  radius = 100,
  children,
}) => {
  const renderShape = useCallback(() => {
    if (shape === 'circle') {
      return <Circle cx={x} cy={y} r={radius} fill="black" />;
    } else if (shape === 'square') {
      return (
        <Rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx={borderRadius}
          ry={borderRadius}
          fill="black"
        />
      );
    }

    return null;
  }, [shape, width, height, borderRadius, x, y, radius]);

  return (
    <Modal visible transparent>
      <Svg height="100%" width="100%">
        <Defs>
          <Mask id="mask" x="0" y="0" height="100%" width="100%">
            <Rect height="100%" width="100%" fill="#fff" />
            {renderShape()}
          </Mask>
        </Defs>
        <Rect
          height="100%"
          width="100%"
          fill={backgroundColor}
          mask="url(#mask)"
          fill-opacity="0"
        />
      </Svg>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

export default TutorialOverlay;
