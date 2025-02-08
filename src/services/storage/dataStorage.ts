import { create } from "zustand";

interface DataStorageState {
  selectedData: any | null;
  setSelectedData: (data: any) => void;
}

export const useDataStorage = create<DataStorageState>((set) => ({
  selectedData: null,
  setSelectedData: (data) => set({ selectedData: data }),
}));
