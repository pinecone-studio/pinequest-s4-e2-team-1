import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarRow from '../components/StatusBarRow';
import { colors, fonts, shadows } from '../theme';

const STATS = [
  { e: '🔥', v: '5 өдөр', l: 'Унших цуваа' },
  { e: '📖', v: '142', l: 'Сурсан үг' },
  { e: '📚', v: '8', l: 'Дууссан үлгэр' },
  { e: '🎮', v: '16', l: 'Хожсон тоглоом' },
];
const TREE = [
  { e: '🌱', l: 'Үр' },
  { e: '🌿', l: 'Соёо' },
  { e: '🌳', l: 'Мод', active: true },
  { e: '✨', l: 'Шид', locked: true },
];
const BADGES = [
  { e: '🌟', l: 'Анхны од', bg: colors.sand.lightest },
  { e: '🔥', l: '5 хоногийн баатар', bg: colors.peach.lightest },
  { e: '📚', l: 'Номын хорхойтон', bg: colors.lavender.light },
  { e: '🔒', l: 'Цоожтой', bg: '#EAE0D5', locked: true },
];

export default function AchievementsScreen() {
  return (
    <View style={styles.root}>
      <StatusBarRow />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Амжилтууд 🏆</Text>

        <View style={styles.statsGrid}>
          {STATS.map(({ e, v, l }) => (
            <View key={l} style={styles.statCard}>
              <Text style={{ fontSize: 22 }}>{e}</Text>
              <View>
                <Text style={styles.statVal}>{v}</Text>
                <Text style={styles.statLabel}>{l}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Learning tree */}
        <LinearGradient colors={['#D8E8D4', '#FAF6F0']} style={styles.tree}>
          <Text style={styles.treeTitle}>Таны сургалтын мод</Text>
          <Text style={styles.treeSub}>Уншсаар байж ургуул!</Text>
          <View style={styles.treeRow}>
            {TREE.map(({ e, l, active, locked }, i) => (
              <React.Fragment key={l}>
                <View style={[styles.treeItem, locked && { opacity: 0.4 }]}>
                  {active && (
                    <View style={styles.treeYou}>
                      <Text style={styles.treeYouText}>ЧИ</Text>
                    </View>
                  )}
                  <Text style={{ fontSize: active ? 44 : 34 }}>{e}</Text>
                  <Text style={[styles.treeLabel, active ? { fontFamily: fonts.lexend.bold, color: colors.sage.text } : null]}>
                    {l}
                  </Text>
                </View>
                {i < 3 && <Text style={styles.treeArrow}>→</Text>}
              </React.Fragment>
            ))}
          </View>
        </LinearGradient>

        {/* Badges */}
        <Text style={styles.sectionTitle}>Тэмдгүүд</Text>
        <View style={styles.badges}>
          {BADGES.map(({ e, l, bg, locked }) => (
            <View key={l} style={[styles.badgeItem, locked && { opacity: 0.4 }]}>
              <View
                style={[
                  styles.badgeCircle,
                  { backgroundColor: bg },
                  !locked && { borderWidth: 3, borderColor: colors.peach.DEFAULT },
                ]}
              >
                <Text style={{ fontSize: 22 }}>{e}</Text>
              </View>
              <Text style={styles.badgeLabel}>{l}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.warm.beige },
  content: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 24 },
  title: { fontFamily: fonts.fredoka.bold, fontSize: 24, color: colors.warm.text },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 16 },
  statCard: {
    width: '48%',
    backgroundColor: colors.warm.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    ...shadows.card,
  },
  statVal: { fontFamily: fonts.fredoka.bold, fontSize: 18, color: colors.warm.text },
  statLabel: { fontFamily: fonts.lexend.regular, fontSize: 10, color: colors.warm.gray },
  tree: { marginTop: 8, borderRadius: 24, padding: 20, ...shadows.sage },
  treeTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 16, color: colors.warm.text },
  treeSub: { fontFamily: fonts.lexend.regular, fontSize: 12, color: colors.warm.gray },
  treeRow: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 16 },
  treeItem: { flex: 1, alignItems: 'center' },
  treeYou: { marginBottom: 4 },
  treeYouText: {
    backgroundColor: colors.sand.DEFAULT,
    color: colors.warm.text,
    fontFamily: fonts.lexend.bold,
    fontSize: 9,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  treeLabel: { fontFamily: fonts.lexend.regular, fontSize: 10, color: colors.warm.gray, marginTop: 4 },
  treeArrow: { color: colors.warm.lightgray, fontSize: 14, paddingBottom: 16 },
  sectionTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 16, color: colors.warm.text, marginTop: 20 },
  badges: { flexDirection: 'row', gap: 12, marginTop: 12 },
  badgeItem: { flex: 1, alignItems: 'center' },
  badgeCircle: { width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center' },
  badgeLabel: { fontFamily: fonts.lexend.regular, fontSize: 10, color: colors.warm.text, marginTop: 6, textAlign: 'center' },
});
