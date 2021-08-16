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
    flatlistImage: {
      fastImage: 'Gambar Cepat',
    },
    home: {
      authentication: 'Autentikasi',
      functionalFeatures: 'Fitur Fungsional',
      firebaseRemoteConfig: 'Konfigurasi Remote Firebase',
      modalPrivacy: `Modal ${privacy}`,
      otherFeature: 'Fitur lain',
      privacy,
      networkRead: 'Membaca Jaringan',
      selectLanguage: 'Pilih Bahasa',
      shareLink: 'Bagikan tautan',
      shareButton: 'Bagikan pesan',
      youtubePlayer: 'Pemutar Youtube',
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
