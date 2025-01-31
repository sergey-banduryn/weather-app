import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IStore } from '@dataTypes';

const useStore = create<IStore>()(
  persist(
    (set) => ({
      searchedCities: [],
      addSearchedCity: (city) => {
        set((state) => {
          const set = new Set(state.searchedCities);
          set.delete(city);
          set.add(city);
          return { searchedCities: [...set] };
        });
      },
      favoriteCities: [],
      toggleFavorite: (city) => {
        set((state) => {
          const set = new Set(state.favoriteCities);
          if (set.has(city)) set.delete(city);
          else set.add(city);
          return { favoriteCities: [...set] };
        });
      },
    }),
    { name: 'store' },
  ),
);

export { useStore };
