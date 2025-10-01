# Tugas soal day1 mouth 3

2. Memahami Perbedaan JSX dengan HTML

# Tuliskan penjelasan singkat mengenai perbedaan antara JSX dan HTML.
- berbeda dalam penulisan atribut 
- tag JSX harus di tutup 
- jika html di pakai semua proyek web akan sedangkan JSX khusus untuk react 
# Sertakan contoh kode sederhana yang menunjukkan perbedaan tersebut.
    - atribut HTML : class, for 
    - atribut JSX  : className, htmlFor

3. Menjelaskan Konsep Virtual DOM
# Buatlah ringkasan singkat tentang apa itu Virtual  DOM dan bagaimana cara kerja di React.
- RENDER PERTAMA react membuat virtual DOM berdasarkan komponen JSX yang kamu tulis 
- USER BERINTERAKSI(misal pencet tombol): react membuat virtual DOM baru yang mencerminkan perubahaan 
- DIFFING react membandingkan virtual DOM lama dan baru, mencari perbedaan(disebut diff) 
- RECONCILITION react hanya mengubah bagian DOM asli yang benar-benar berubah. itu disebut update effesien

4. Menjelaskan Perbedaan SPA vs MPA
# Tuliskan penjelasan mengenai perbedaan antara Single Page Application (SPA) dan Multi Page Application (MPA).
- jika SPA tidak hambur halaman hanya 1 halaman dapat interaksi dengan halaman lain 
- jika MPA termasuk cara lama yang memuat banyak halaman
# Berikan minimal 2 kelebihan dan 2 kekurangan dari masing-masing arsitektur.
- SPA : + performa lebih cepat(setelah pemuatan awal)
        - waktu initial load yang lebih lama
- MPA : + waktu initial load yang lebih cepat
        - pengalaman pengguna kurang mulus