import {Translation} from './en';

const privacy = 'Privasi';
const image = 'gambar';

const id: Translation = {
  translation: {
    common: {
      dismiss: 'Tutup',
      image,
      privacy,
      loading: 'Memuat',
    },
    errorMessage: {
      fatal: {
        message:
          'Kami telah menerima laporan kesalahan. Mohon untuk membuka ulang aplikasi',
        title: 'Terjadi Kesalahan',
      },
    },
    flatlistImage: {
      description:
        'Gunakan layar ini sebagai eksperimen untuk optimisasi performa',
      fastImage: 'Gambar Cepat',
    },
    home: {
      authentication: 'Autentikasi',
      config: 'Konfigurasi Lingkungan',
      error: 'Kesalahan Sentry',
      errorSendJS: 'Kirim kesalahan JS',
      errorSendNative: 'Kirim kesalahan Native',
      functionalFeatures: 'Fitur Fungsional',
      functionalFocus: 'Fungsi Fokus',
      firebaseRemoteConfig: 'Konfigurasi Remote Firebase',
      modalPrivacy: `Modal ${privacy}`,
      otherFeature: 'Fitur lain',
      performance: 'Performa',
      privacy,
      networkRead: 'Membaca Jaringan',
      selectLanguage: 'Pilih Bahasa',
      shareLink: 'Bagikan tautan',
      shareButton: 'Bagikan pesan',
      version: 'Versi',
      whatsappButton: 'Kirim pesan melalui whatsapp',
    },
    homeClipboard: {
      clickToCopy: 'Tekan untuk salin',
      viewCopiedText: 'Lihat text salin',
      copiedText: 'Salin Halo dunia',
    },
    homeNetwork: {
      connected: 'Connected',
      noConnection: 'No Connection',
    },
  },
};

export default id;
