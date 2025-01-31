import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IStore } from '@dataTypes';

const useStore = create<IStore>()(
  persist(
    (set) => ({
      addSearchedCity: (city) => {
        set((state) => {
          const set = new Set(state.searchedCities);
          set.delete(city);
          set.add(city);
          return { searchedCities: [...set] };
        });
      },
      favoriteCities: [],
      searchedCities: [],
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
