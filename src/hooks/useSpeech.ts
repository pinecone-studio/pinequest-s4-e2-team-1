import { useState, useCallback, useRef } from 'react';

// Chimege API configuration (for future implementation)
const CHIMEGE_API_URL = 'https://api.chimege.com/v1.2/synthesize';
const CHIMEGE_TOKEN = process.env.EXPO_PUBLIC_CHIMEGE_TOKEN;
const USE_AUDIO = false; // Set to true when API is working

export function useSpeech() {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<any>(null);

  const speak = useCallback(async (text: string) => {
    console.log('📖 Instruction:', text);

    // Visual feedback mode - no actual audio
    setIsPlaying(true);

    // Simulate speaking time
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);

    /*
    // TODO: Chimege API implementation
    // The API works, but requires proper binary handling
    // For now, using visual-only mode

    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', CHIMEGE_API_URL, true);
      xhr.setRequestHeader('Content-Type', 'text/plain');
      xhr.setRequestHeader('token', CHIMEGE_TOKEN || '');
      xhr.responseType = 'arraybuffer';

      xhr.onload = async () => {
        if (xhr.status === 200) {
          // Handle audio playback here
        }
      };

      xhr.send(text);
    } catch (error) {
      console.error('Speech error:', error);
    }
    */
  }, []);

  const stop = useCallback(async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
      setIsPlaying(false);
    }
  }, []);

  return { speak, stop, isPlaying };
}
