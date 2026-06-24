import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarRow from '../components/StatusBarRow';
import { colors, fonts, shadows } from '../theme';

const STATS = [
  { l: 'Уншлагын нарийвчлал', v: '92%', sub: '▲ 6% өнгөрсөн долоо хоногоос', color: colors.sage.text },
  { l: 'Уншсан хугацаа', v: '3ц 20м', sub: 'Өдөрт дунджаар 28 мин', color: colors.lavender.dark },
  { l: 'Дууссан хичээл', v: '18', sub: 'Энэ сард 24-өөс', color: colors.slate.dark },
  { l: 'Хүнд авиа', v: 'р · ш', sub: 'дасгал хэрэгтэй', color: colors.peach.dark },
];
const BARS = [
  { h: 42, c: '#E4DFF0', d: 'Да' },
  { h: 58, c: '#D4CEEB', d: 'Мя' },
  { h: 50, c: '#D4CEEB', d: 'Лх' },
  { h: 72, c: '#A898C8', d: 'Пү' },
  { h: 64, c: '#A898C8', d: 'Ба' },
  { h: 86, c: '#9B8BC4', d: 'Бя' },
  { h: 94, c: '#9B8BC4', d: 'Ня' },
];

export default function ParentScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.root}>
      <StatusBarRow />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Эцэг эхийн самбар</Text>
            <Text style={styles.subtitle}>Эммагийн явц · Энэ долоо хоног</Text>
          </View>
          <Pressable style={styles.shareBtn}>
            <Text style={{ fontSize: 18 }}>📤</Text>
          </Pressable>
        </View>

        <View style={styles.statsGrid}>
          {STATS.map(({ l, v, sub, color }) => (
            <View key={l} style={styles.statCard}>
              <Text style={styles.statLabel}>{l}</Text>
              <Text style={[styles.statVal, { color }]}>{v}</Text>
              <Text style={[styles.statSub, { color }]}>{sub}</Text>
            </View>
          ))}
        </View>

        {/* Weekly chart */}
        <View style={styles.chartCard}>
          <View style={styles.chartHead}>
            <Text style={styles.chartTitle}>Долоо хоногийн оноо</Text>
            <Text style={styles.chartRange}>Да–Ня</Text>
          </View>
          <View style={styles.bars}>
            {BARS.map(({ h, c, d }) => (
              <View key={d} style={styles.barCol}>
                <View style={[styles.bar, { height: h, backgroundColor: c }]} />
                <Text style={styles.barLabel}>{d}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* AI tip */}
        <LinearGradient colors={['#8B7AB8', '#A090C8']} style={styles.tip}>
          <View style={styles.tipHead}>
            <Text style={{ fontSize: 18 }}>🤖</Text>
            <Text style={styles.tipTitle}>AI зөвлөмж</Text>
          </View>
          <Text style={styles.tipText}>
            Эмма эгшгийг маш сайн уншиж байна! Энэ долоо хоногт{' '}
            <Text style={{ fontFamily: fonts.lexend.bold, color: colors.sand.DEFAULT }}>«р» ба «ш»</Text> авианы 10
            минутын дасгал хийж нарийвчлалаа сайжруул.
          </Text>
        </LinearGradient>

        {/* Dyslexia Test Card */}
        <Pressable
          style={styles.testCard}
          onPress={() => navigation.navigate('DyslexiaTest')}
        >
          <View style={styles.testHeader}>
            <Text style={styles.testEmoji}>🧠</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.testTitle}>Дислексийн шалгалт</Text>
              <Text style={styles.testSubtitle}>4-7 насны хүүхдэд зориулсан эрт илрүүлгийн тест</Text>
            </View>
            <Text style={styles.testArrow}>→</Text>
          </View>
        </Pressable>

        <Pressable style={{ marginTop: 20, alignItems: 'center' }} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.back}>← Нүүр</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.warm.secondary },
  content: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 24 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontFamily: fonts.fredoka.bold, fontSize: 20, color: colors.warm.text },
  subtitle: { fontFamily: fonts.lexend.regular, fontSize: 12, color: colors.warm.gray },
  shareBtn: { width: 40, height: 40, borderRadius: 16, backgroundColor: colors.warm.card, alignItems: 'center', justifyContent: 'center', ...shadows.card },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 16 },
  statCard: { width: '48%', backgroundColor: colors.warm.card, borderRadius: 16, padding: 14, marginBottom: 10 },
  statLabel: { fontFamily: fonts.lexend.regular, fontSize: 11, color: colors.warm.gray },
  statVal: { fontFamily: fonts.fredoka.bold, fontSize: 22, marginTop: 2 },
  statSub: { fontFamily: fonts.lexend.regular, fontSize: 10, marginTop: 2 },
  chartCard: { backgroundColor: colors.warm.card, borderRadius: 16, padding: 16, marginTop: 4 },
  chartHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  chartTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 14, color: colors.warm.text },
  chartRange: { fontFamily: fonts.lexend.regular, fontSize: 12, color: colors.lavender.dark },
  bars: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 6, height: 96, marginTop: 16 },
  barCol: { flex: 1, alignItems: 'center', gap: 6 },
  bar: { width: '100%', borderRadius: 8 },
  barLabel: { fontFamily: fonts.lexend.regular, fontSize: 9, color: colors.warm.lightgray },
  tip: { marginTop: 12, borderRadius: 16, padding: 16, ...shadows.lavender },
  tipHead: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  tipTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 14, color: '#fff' },
  tipText: { fontFamily: fonts.lexend.regular, fontSize: 14, color: 'rgba(255,255,255,0.85)', marginTop: 8, lineHeight: 22 },
  testCard: { marginTop: 16, backgroundColor: colors.warm.card, borderRadius: 16, padding: 16, ...shadows.card },
  testHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  testEmoji: { fontSize: 32 },
  testTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 16, color: colors.warm.text },
  testSubtitle: { fontFamily: fonts.lexend.regular, fontSize: 12, color: colors.warm.gray, marginTop: 2 },
  testArrow: { fontSize: 24, color: colors.lavender.mid },
  back: { fontFamily: fonts.lexend.regular, fontSize: 14, color: colors.lavender.dark, textDecorationLine: 'underline' },
});
