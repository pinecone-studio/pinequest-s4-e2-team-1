import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarRow from '../components/StatusBarRow';
import { colors, fonts, shadows } from '../theme';

const CUSTOMIZE = [
  { e: '💇', l: 'Үс' },
  { e: '👕', l: 'Хувцас' },
  { e: '🎩', l: 'Нэмэлт' },
  { e: '🏞️', l: 'Дэвсгэр' },
];
const SWATCHES = ['#E8D8C3', '#D8A48F', '#B8C9B0', '#A8C4CE', '#8B7AB8'];
const ACHIEVEMENTS = ['🌟', '🔥', '📚', '🏅'];
const ACH_BG = ['#F0E8D8', '#F5DDD5', '#E8E3F5', '#D8E8D4'];

export default function ProfileScreen() {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.root}>
      <StatusBarRow />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Миний профайл 👤</Text>

        {/* Avatar card */}
        <LinearGradient colors={['#6A98B0', '#8B7AB8']} style={styles.avatarCard}>
          <Text style={[styles.deco, { top: 12, left: 20 }]}>⭐</Text>
          <Text style={[styles.deco, { top: 24, right: 24 }]}>✨</Text>
          <View style={styles.avatar}>
            <Text style={{ fontSize: 56 }}>🦊</Text>
          </View>
          <Text style={styles.name}>Emma</Text>
          <View style={styles.level}>
            <Text style={styles.levelText}>4-р түвшин · Унших аялагч</Text>
          </View>
        </LinearGradient>

        {/* Customize */}
        <Text style={styles.sectionTitle}>Найзаа тохируул</Text>
        <View style={styles.customizeRow}>
          {CUSTOMIZE.map(({ e, l }) => (
            <View key={l} style={styles.customizeItem}>
              <Text style={{ fontSize: 22 }}>{e}</Text>
              <Text style={styles.customizeLabel}>{l}</Text>
            </View>
          ))}
        </View>

        {/* Swatches */}
        <View style={styles.swatchRow}>
          <Text style={styles.swatchLabel}>Дэвсгэр өнгө</Text>
          {SWATCHES.map((c, i) => (
            <Pressable
              key={c}
              onPress={() => setActive(i)}
              style={[
                styles.swatch,
                { backgroundColor: c },
                active === i && { borderWidth: 3, borderColor: colors.warm.card },
              ]}
            />
          ))}
        </View>

        {/* Achievements */}
        <Text style={styles.sectionTitle}>Миний амжилтууд</Text>
        <View style={styles.achRow}>
          {ACHIEVEMENTS.map((e, i) => (
            <View key={i} style={[styles.achItem, { backgroundColor: ACH_BG[i] }]}>
              <Text style={{ fontSize: 22 }}>{e}</Text>
            </View>
          ))}
          <View style={styles.achMore}>
            <Text style={styles.achMoreText}>+8</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.warm.beige },
  content: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 24 },
  title: { fontFamily: fonts.fredoka.bold, fontSize: 24, color: colors.warm.text },
  avatarCard: { marginTop: 16, borderRadius: 24, padding: 24, alignItems: 'center', ...shadows.lavender },
  deco: { position: 'absolute', fontSize: 16, opacity: 0.7 },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: colors.warm.card,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },
  name: { fontFamily: fonts.fredoka.bold, fontSize: 20, color: '#fff', marginTop: 12 },
  level: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 4 },
  levelText: { fontFamily: fonts.lexend.semibold, fontSize: 12, color: '#fff' },
  sectionTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 16, color: colors.warm.text, marginTop: 20 },
  customizeRow: { flexDirection: 'row', gap: 10, marginTop: 12 },
  customizeItem: { flex: 1, backgroundColor: colors.warm.card, borderRadius: 16, paddingVertical: 14, alignItems: 'center', ...shadows.card },
  customizeLabel: { fontFamily: fonts.lexend.semibold, fontSize: 10, color: colors.warm.text, marginTop: 4 },
  swatchRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 16 },
  swatchLabel: { fontFamily: fonts.lexend.regular, fontSize: 12, color: colors.warm.gray },
  swatch: { width: 32, height: 32, borderRadius: 16 },
  achRow: { flexDirection: 'row', gap: 12, marginTop: 12 },
  achItem: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  achMore: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.warm.card,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },
  achMoreText: { fontFamily: fonts.fredoka.semibold, fontSize: 14, color: colors.lavender.dark },
});
