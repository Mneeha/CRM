import { create } from "zustand";
import data from "../data/data.json";

const useDataStore = create((set) => ({
  clients: data.clients || [],           
  leads: data.leads || [],
  tasks: data.tasks || [],

  setClients: (newClients) => set({ clients: newClients }),
  setLeads: (newLeads) => set({ leads: newLeads }),
  setTasks: (newTasks) => set({ tasks: newTasks }),
}));

export default useDataStore;

