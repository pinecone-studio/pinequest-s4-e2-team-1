import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarRow from '../components/StatusBarRow';
import { colors, fonts, shadows } from '../theme';

const CATS = ['🦄 Уран зөгнөл', '🐶 Амьтад', '🚀 Сансар', '🌳 Байгаль'];
const LIST = [
  { emoji: '🚀', bg: colors.slate.light, title: 'Сар луу нисье', level: '⭐⭐ Хялбар · Сансар' },
  { emoji: '🦊', bg: colors.sage.light, title: 'Ойн үнэг', level: '⭐ Анхан шат · Амьтад' },
];

export default function StoriesScreen() {
  const [cat, setCat] = useState(0);
  return (
    <View style={styles.root}>
      <StatusBarRow />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Үлгэрийн ертөнц ✨</Text>
        <Text style={styles.subtitle}>Уншихаар шидэт үлгэр сонго</Text>

        {/* Category chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsRow}
        >
          {CATS.map((c, i) => (
            <Pressable
              key={c}
              onPress={() => setCat(i)}
              style={[styles.chip, cat === i ? styles.chipActive : styles.chipIdle]}
            >
              <Text style={[styles.chipText, cat === i ? { color: '#fff' } : { color: colors.warm.gray }]}>
                {c}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Featured story */}
        <LinearGradient colors={['#8B7AB8', '#6A98B0']} style={styles.featured}>
          <Text style={[styles.deco, { top: 12, right: 16 }]}>✨</Text>
          <View style={styles.featuredRow}>
            <View style={styles.featuredCover}>
              <Text style={{ fontSize: 48 }}>🐰</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>⭐ Анхан шат</Text>
              </View>
              <Text style={styles.featuredTitle}>Зоригт бяцхан туулай</Text>
              <Text style={styles.featuredMeta}>🎧 Дуутай · 5 мин</Text>
            </View>
          </View>
          <Pressable style={styles.featuredBtn}>
            <Text style={styles.featuredBtnText}>▶ Хамтдаа унших</Text>
          </Pressable>
        </LinearGradient>

        {/* Story list */}
        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Бусад үлгэр</Text>
          <Text style={styles.listMore}>Бүгдийг үзэх</Text>
        </View>
        <View style={{ gap: 10, marginTop: 12 }}>
          {LIST.map(({ emoji, bg, title, level }) => (
            <Pressable key={title} style={styles.listItem}>
              <View style={[styles.listIcon, { backgroundColor: bg }]}>
                <Text style={{ fontSize: 28 }}>{emoji}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.listItemTitle}>{title}</Text>
                <Text style={styles.listItemLevel}>{level}</Text>
              </View>
              <Text style={{ fontSize: 20 }}>🎧</Text>
            </Pressable>
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
  subtitle: { fontFamily: fonts.lexend.regular, fontSize: 14, color: colors.warm.gray },
  chipsRow: { gap: 8, marginTop: 16, paddingBottom: 4 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 16 },
  chipActive: { backgroundColor: colors.lavender.dark },
  chipIdle: { backgroundColor: colors.warm.card, ...shadows.cardSm },
  chipText: { fontFamily: fonts.fredoka.semibold, fontSize: 12 },
  featured: { marginTop: 16, borderRadius: 24, padding: 20, ...shadows.lavender },
  deco: { position: 'absolute', fontSize: 18, opacity: 0.7 },
  featuredRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  featuredCover: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: colors.warm.card,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },
  badge: { alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontFamily: fonts.lexend.semibold, fontSize: 10, color: '#fff' },
  featuredTitle: { fontFamily: fonts.fredoka.bold, fontSize: 20, color: '#fff', marginTop: 8 },
  featuredMeta: { fontFamily: fonts.lexend.regular, fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  featuredBtn: { marginTop: 16, backgroundColor: colors.sand.DEFAULT, paddingVertical: 12, borderRadius: 16, alignItems: 'center' },
  featuredBtnText: { fontFamily: fonts.fredoka.semibold, fontSize: 16, color: colors.warm.text },
  listHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 },
  listTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 16, color: colors.warm.text },
  listMore: { fontFamily: fonts.lexend.regular, fontSize: 12, color: colors.lavender.dark },
  listItem: { backgroundColor: colors.warm.card, borderRadius: 16, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 12, ...shadows.card },
  listIcon: { width: 56, height: 56, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  listItemTitle: { fontFamily: fonts.fredoka.semibold, fontSize: 16, color: colors.warm.text },
  listItemLevel: { fontFamily: fonts.lexend.regular, fontSize: 11, color: colors.warm.gray },
});
