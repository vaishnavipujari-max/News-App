import React from 'react';
import { Stack } from 'expo-router';
import { NewsProvider } from '@/context/NewsContext';

export default function RootLayout() {
  return (
    <NewsProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="search" />
        <Stack.Screen name="news/[id]" />
      </Stack>
    </NewsProvider>
  );
}
