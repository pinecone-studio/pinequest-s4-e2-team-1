import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarRow from '../components/StatusBarRow';
import { colors, fonts, shadows } from '../theme';

const GAMES = [
  { emoji: '🔤', title: 'Үсэг тааруулах', sub: 'Үсгийг авиатай тааруул', grad: ['#7A6AA8', '#8B7AB8'] },
  { emoji: '🧱', title: 'Үг угсрах', sub: 'Энгийн үг угсар', grad: ['#7A9E74', '#8FB487'] },
  { emoji: '🕵️', title: 'Авианы мөрдөгч', sub: 'Сонсоод үсгийг сонго', grad: ['#6094A8', '#7AAEC0'] },
  { emoji: '🖼️', title: 'Зураг тааруулах', sub: 'Зургийг үгтэй тааруул', grad: ['#B87060', '#C47870'] },
];

const STATS: [string, string, string][] = [
  ['⭐ 24', 'Од', colors.sand.lightest],
  ['🪙 80', 'Зоос', colors.sand.light],
  ['🏅 3', 'Тэмдэг', colors.lavender.light],
];

export default function GamesScreen() {
  return (
    <View style={styles.root}>
      <StatusBarRow />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Сургалтын тоглоом</Text>
        <Text style={styles.subtitle}>Тоглоод шагнал ав!</Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          {STATS.map(([val, label, bg]) => (
            <View key={label} style={[styles.statCard, { backgroundColor: bg }]}>
              <Text style={styles.statVal}>{val}</Text>
              <Text style={styles.statLabel}>{label}</Text>
            </View>
          ))}
        </View>

        {/* Game grid */}
        <View style={styles.grid}>
          {GAMES.map(({ emoji, title, sub, grad }) => (
            <Pressable key={title} style={styles.gameCard}>
              <LinearGradient
                colors={grad as [string, string]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gameInner}
              >
                <Text style={{ fontSize: 36 }}>{emoji}</Text>
                <View style={styles.gameTextWrap}>
                  <Text style={styles.gameTitle}>{title}</Text>
                  <Text style={styles.gameSub}>{sub}</Text>
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>

        {/* Daily challenge */}
        <View style={styles.challenge}>
          <Text style={{ fontSize: 28 }}>🎉</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.challengeTitle}>Өдрийн сорил</Text>
            <Text style={styles.challengeSub}>10 ⭐ хожоод баярла!</Text>
          </View>
          <View style={styles.challengeBtn}>
            <Text style={styles.challengeBtnText}>Тоглох</Text>
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
  subtitle: { fontFamily: fonts.lexend.regular, fontSize: 14, color: colors.warm.gray },
  statsRow: { flexDirection: 'row', gap: 8, marginTop: 16 },
  statCard: { flex: 1, borderRadius: 16, padding: 10, alignItems: 'center' },
  statVal: { fontFamily: fonts.fredoka.bold, fontSize: 18, color: colors.warm.text },
  statLabel: { fontFamily: fonts.lexend.regular, fontSize: 10, color: colors.warm.gray },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 16 },
  gameCard: { width: '48%', height: 144, borderRadius: 24, marginBottom: 12, overflow: 'hidden', ...shadows.lavender },
  gameInner: { flex: 1, padding: 16 },
  gameTextWrap: { position: 'absolute', bottom: 12, left: 16, right: 16 },
  gameTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 16, color: '#fff' },
  gameSub: { fontFamily: fonts.lexend.regular, fontSize: 11, color: 'rgba(255,255,255,0.8)' },
  challenge: {
    marginTop: 16,
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#F0E4D4',
    ...shadows.sand,
  },
  challengeTitle: { fontFamily: fonts.fredoka.bold, fontSize: 16, color: colors.warm.text },
  challengeSub: { fontFamily: fonts.lexend.regular, fontSize: 11, color: '#7A6845' },
  challengeBtn: { backgroundColor: colors.warm.card, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 16 },
  challengeBtnText: { fontFamily: fonts.fredoka.semibold, fontSize: 14, color: colors.warm.text },
});
