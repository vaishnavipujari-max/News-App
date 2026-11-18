import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

type NewsContextType = {
  savedIds: number[];
  likedIds: number[];
  toggleSave: (id: number) => void;
  toggleLike: (id: number) => void;
  isSaved: (id: number) => boolean;
  isLiked: (id: number) => boolean;
};

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const saved = await AsyncStorage.getItem('savedNews');
        const liked = await AsyncStorage.getItem('likedNews');

        if (saved) setSavedIds(JSON.parse(saved));
        if (liked) setLikedIds(JSON.parse(liked));
      } catch (error) {
        console.log('Error loading news preferences:', error);
      } finally {
        setLoaded(true);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem('savedNews', JSON.stringify(savedIds));
    }
  }, [savedIds, loaded]);

  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem('likedNews', JSON.stringify(likedIds));
    }
  }, [likedIds, loaded]);

  const toggleSave = (id: number) => {
    setSavedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const toggleLike = (id: number) => {
    setLikedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const isSaved = (id: number) => savedIds.includes(id);
  const isLiked = (id: number) => likedIds.includes(id);

  return (
    <NewsContext.Provider
      value={{
        savedIds,
        likedIds,
        toggleSave,
        toggleLike,
        isSaved,
        isLiked,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('useNews must be used inside NewsProvider');
  }

  return context;
};
