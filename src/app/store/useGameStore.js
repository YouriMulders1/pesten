// src/store/useGameStore.js
import create from 'zustand';

const useGameStore = create(set => ({
  players: [],
  deck: null,
  currentPlayer: 0,
  setPlayers: players => set({ players }),
  setDeck: deck => set({ deck }),
  nextPlayer: () => set(state => ({ currentPlayer: (state.currentPlayer + 1) % state.players.length })),
}));

export default useGameStore;
