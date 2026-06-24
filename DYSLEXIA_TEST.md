# Dyslexia Test Feature

## Overview
Early-detection dyslexia screening test for children ages 4-7, integrated into the PineQuest app. The test uses Chimege AI Text-to-Speech for Mongolian voice instructions, requiring only button taps from the child.

## Features

### 🎯 6 Assessment Tasks
1. **Sound Matching** - Identifies beginning sounds in words
2. **Syllable Counting** - Counts syllables in Mongolian words
3. **Sound Blending** - Blends individual sounds into words
4. **Sentence Repetition** - Parent-judged verbal repetition
5. **Mirror Image Discrimination** - Visual orientation recognition
6. **Left/Right Orientation** - Spatial awareness testing

### 🔊 Chimege TTS Integration
- Real-time audio generation via Chimege API
- Mongolian language support
- Replay button on each task
- Auto-plays instructions when task loads

### 📊 Intelligent Scoring
- **0-1 wrong**: Green - Normal development
- **2-3 wrong**: Yellow - Some practice recommended
- **4-6 wrong**: Amber - Consult specialist recommended

### 🎨 Design System
- Matches PineQuest color palette (warm beige, lavender, sage, peach)
- Uses Fredoka & Lexend fonts
- Soft shadows and rounded corners
- Child-friendly 80px+ tap targets
- Smooth fade/slide transitions

## Files Created

### Core Files
- `src/screens/DyslexiaTestScreen.tsx` - Main test screen with all 6 tasks
- `src/hooks/useSpeech.ts` - Chimege TTS integration hook
- `.env` - API token storage

### Navigation
- Added route in `App.tsx`
- Entry button in `ParentScreen.tsx`

## Environment Setup

Add to `.env`:
```
EXPO_PUBLIC_CHIMEGE_TOKEN=your_token_here
```

## Dependencies
```json
{
  "expo-av": "~14.0.7"
}
```

## Navigation

From Parent Screen:
```typescript
navigation.navigate('DyslexiaTest')
```

From code:
```typescript
import DyslexiaTestScreen from './src/screens/DyslexiaTestScreen';
```

## API Integration

### Chimege TTS API
**Endpoint**: `https://api.chimege.com/v1.2/synthesize`

**Headers**:
- `Content-Type: text/plain`
- `token: {CHIMEGE_API_TOKEN}`

**Body**: Plain Mongolian text

**Response**: audio/wav binary

### Usage Example
```typescript
const { speak, isPlaying } = useSpeech();

// Play instruction
await speak("Аль нь 'Б' авиагаар эхэлж байна вэ?");
```

## User Flow

1. Parent opens Parent Screen
2. Taps "Дислексийн шалгалт" card
3. Test screen loads → auto-plays Task 1 instruction
4. Child/parent taps answer
5. Smooth transition to next task
6. After Task 6 → Result screen with:
   - Score summary
   - Color-coded feedback
   - Parent tips list
   - Done button returns to Parent Screen

## Design Tokens Used

### Colors
- Background: `colors.warm.beige`
- Cards: `colors.warm.card`
- Progress bar: `colors.lavender.mid`
- Success: `colors.sage.light`
- Warning: `colors.peach.light`

### Fonts
- Headers: `fonts.fredoka.bold`
- Body: `fonts.lexend.regular`
- Buttons: `fonts.fredoka.semibold`

### Shadows
- Cards: `shadows.card`
- Buttons: `shadows.cardSm`

## Testing Tips

1. **Audio Testing**: Ensure device volume is up, silent mode is off
2. **Task Navigation**: Each task auto-advances on answer tap
3. **Replay Button**: Test audio replay (🔊 icon) on each task
4. **Result Scoring**: Try different answer combinations to see all 3 result states

## Future Enhancements

- [ ] Save test results to backend
- [ ] Track progress over time
- [ ] Export PDF report for parents
- [ ] Add more task variations
- [ ] Multi-language support (currently Mongolian only)
- [ ] Offline audio caching

## Accessibility

- Large tap targets (min 80px)
- High contrast text
- Audio-first instructions (no reading required)
- Parent-assisted tasks where needed
- Simple, clear UI with emojis

## Support

For Chimege API issues:
- Check token in `.env`
- Verify network connectivity
- Review API response in console logs

For navigation issues:
- Ensure `DyslexiaTest` route exists in Stack.Navigator
- Check ParentScreen navigation prop is passed correctly
