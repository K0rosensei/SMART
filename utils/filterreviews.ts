interface PresensiItem {
    Nama: string;
    Kelas: string;
    Alpa: string;
    img: string;
  }
  
  export const filterReviews = (data: PresensiItem[]) => {
    return data
      .filter((item) => {
        const alpaCount = parseInt(item.Alpa.replace(/\D/g, ""), 10); // Ambil angka dari string "Alpa"
        return alpaCount >= 3; // Filter jika "Alpa" >= 3
      })
      .map((item) => ({
        name: item.Nama,
        kelas: item.Kelas,
        alpa: item.Alpa,
        img: item.img,
      }));
  };
  