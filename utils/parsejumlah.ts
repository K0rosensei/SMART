import presensi from "@/data/presensiindividu.json";

export interface PresensiItem {
  Nama: string;
  Status: string;
  Jumlah: string;
  Icon: string;
  Color: string;
}

export interface NotificationItem {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  jumlah: number;
}

export const MIN_NAME_LENGTH = 3;

export const parseJumlah = (jumlah: string): number => {
  if (jumlah === "Belum Pernah") return 0;
  const match = jumlah.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

export const searchPresensi = (inputNama: string): NotificationItem[] => {
  const trimmedName = inputNama.trim().toLowerCase();
  
  return presensi.PresensiIndividu
    .filter((item) => item.Nama.toLowerCase().includes(trimmedName))
    .map((item) => ({
      name: item.Status,
      description: `Total: ${item.Jumlah}`,
      time: "",
      icon: item.Icon,
      color: item.Color,
      jumlah: parseJumlah(item.Jumlah),
    }))
    .sort((a, b) => a.jumlah - b.jumlah);
};