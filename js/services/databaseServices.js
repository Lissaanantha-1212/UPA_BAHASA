import { supabaseClient } from '../config/supabase.js';

export const databaseServices = {
  async fetchMasterMahasiswa() {
    try {
      const { data, error } = await supabaseClient.from('master_mahasiswa').select('*');
      if (error) throw error;
      return data || [];
    } catch (e) {
      console.warn("Using Local Storage Master Cache");
      return JSON.parse(localStorage.getItem('masterMahasiswaCache') || '[]');
    }
  },

  async fetchScheduleLogs() {
    try {
      const { data, error } = await supabaseClient.from('penjadwalan_log').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      return data || [];
    } catch (e) {
      return JSON.parse(localStorage.getItem('scheduleLogsCache') || '[]');
    }
  },

  async fetchRemedialRegistrations() {
    try {
      const { data, error } = await supabaseClient.from('pendaftaran_remedial').select('*');
      if (error) throw error;
      return data ? data.map(r => String(r.nim).trim()) : [];
    } catch (e) {
      return JSON.parse(localStorage.getItem('remedialRegsCache') || '[]');
    }
  },

  async saveScheduleLog(logData) {
    try {
      await supabaseClient.from('penjadwalan_log').insert([logData]);
    } catch (e) {
      console.error(e);
    }
  },

  async registerRemedial(nim) {
    try {
      await supabaseClient.from('pendaftaran_remedial').insert([{ nim, created_at: new Date().toISOString() }]);
    } catch (e) {
      console.error(e);
    }
  }
};