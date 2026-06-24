import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ViewStyle } from 'react-native';
import Svg, { Line, Circle, Rect, Path, G } from 'react-native-svg';

type Size = 'sm' | 'md' | 'lg';
type Anim = 'float' | 'bob' | 'none';

interface LexiBotProps {
  size?: Size;
  animate?: Anim;
  style?: ViewStyle;
}

const sizes: Record<Size, number> = { sm: 72, md: 92, lg: 150 };

/** Mascot robot — ported 1:1 from components/LexiBot.tsx (SVG). */
export default function LexiBot({ size = 'md', animate = 'float', style }: LexiBotProps) {
  const px = sizes[size];
  const height = Math.round(px * 1.18);

  const value = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animate === 'none') return;
    const duration = animate === 'bob' ? 1300 : 1500;
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: 1,
          duration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(value, {
          toValue: 0,
          duration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [animate, value]);

  const translateY = value.interpolate({
    inputRange: [0, 1],
    outputRange: animate === 'bob' ? [0, -6] : animate === 'float' ? [0, -10] : [0, 0],
  });
  const rotate = value.interpolate({
    inputRange: [0, 1],
    outputRange: animate === 'bob' ? ['-3deg', '3deg'] : ['0deg', '0deg'],
  });

  return (
    <Animated.View
      style={[{ width: px, height, transform: [{ translateY }, { rotate }] }, style]}
    >
      <Svg viewBox="0 0 110 130" width={px} height={height}>
        {/* Antenna */}
        <Line x1="55" y1="8" x2="55" y2="24" stroke="#9B8BC4" strokeWidth="5" strokeLinecap="round" />
        <Circle cx="55" cy="8" r="6" fill="#D8A48F" />
        {/* Head */}
        <Rect x="14" y="22" width="82" height="68" rx="26" fill="#E8D8C3" />
        <Rect x="14" y="22" width="82" height="68" rx="26" fill="none" stroke="#9B8BC4" strokeWidth="5" />
        {/* Screen */}
        <Rect x="25" y="34" width="60" height="40" rx="17" fill="#3D3530" />
        {/* Eyes */}
        <Circle cx="44" cy="54" r="8.5" fill="#A8C4CE" />
        <Circle cx="66" cy="54" r="8.5" fill="#A8C4CE" />
        <Circle cx="46" cy="52" r="3" fill="#FFFDF8" />
        <Circle cx="68" cy="52" r="3" fill="#FFFDF8" />
        {/* Smile */}
        <Path d="M48 80 Q55 87 62 80" stroke="#9B8BC4" strokeWidth="4" fill="none" strokeLinecap="round" />
        {/* Cheeks */}
        <Circle cx="26" cy="70" r="4" fill="#D8A48F" opacity={0.55} />
        <Circle cx="84" cy="70" r="4" fill="#D8A48F" opacity={0.55} />
        {/* Body */}
        <Rect x="32" y="92" width="46" height="30" rx="15" fill="#9B8BC4" />
        {/* Wave arm */}
        {size !== 'sm' && (
          <G>
            <Rect x="6" y="98" width="16" height="9" rx="4.5" fill="#E8D8C3" origin="14, 102" rotation={30} />
            <Circle cx="9" cy="92" r="5" fill="#E8D8C3" />
          </G>
        )}
      </Svg>
    </Animated.View>
  );
}
