import { useState } from 'react';
import { 
  searchPresensi, 
  NotificationItem, 
  MIN_NAME_LENGTH 
} from '@/utils/parsejumlah';

export const usePresensiSearch = () => {
  const [inputNama, setInputNama] = useState("");
  const [filteredNotifications, setFilteredNotifications] = useState<NotificationItem[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleSearch = () => {
    const trimmedName = inputNama.trim();
    
    // Validasi input
    if (!trimmedName) {
      setAlertMessage("Silakan masukkan nama sebelum mencari.");
      return false;
    }

    if (trimmedName.length < MIN_NAME_LENGTH) {
      setAlertMessage(`Nama harus memiliki minimal ${MIN_NAME_LENGTH} karakter.`);
      return false;
    }

    // Cari data presensi
    const results = searchPresensi(trimmedName);

    if (results.length > 0) {
      setFilteredNotifications(results);
      setShowPopup(true);
      setAlertMessage(null);
      return true;
    } else {
      setAlertMessage("Nama tidak ditemukan dalam data presensi.");
      setShowPopup(false);
      return false;
    }
  };

  const resetSearch = () => {
    setInputNama("");
    setShowPopup(false);
    setAlertMessage(null);
  };

  return {
    inputNama,
    setInputNama,
    filteredNotifications,
    showPopup,
    setShowPopup,  // Tambahkan ini
    alertMessage,
    setAlertMessage,  // Tambahkan ini
    handleSearch,
    resetSearch
  };
};