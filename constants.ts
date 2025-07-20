
import { AccordionItem, TabItem, NavLinkItem, ProConItem } from './types';

export const THEME = {
  bg: {
    primary: '#0A192F',
    secondary: '#112240',
    accent: '#172A45',
  },
  text: {
    primary: '#CCD6F6',
    secondary: '#8892B0',
    accent: '#64FFDA',
  },
  accent: '#64FFDA',
  accentHover: '#52D8BB',
  border: '#233554',
  error: '#CD5C5C',
};

export const NAV_LINKS: NavLinkItem[] = [
    { href: '#pendahuluan', label: 'Pendahuluan' },
    { href: '#apa-itu-kripto', label: 'Definisi Kripto' },
    { href: '#mekanisme-kerja', label: 'Cara Kerja' },
    { href: '#jenis-aset-kripto', label: 'Jenis Aset' },
    { href: '#infrastruktur', label: 'Infrastruktur' },
    { href: '#platform-dompet', label: 'Platform & Dompet' },
    { href: '#kelebihan-kekurangan', label: 'Pro & Kontra' },
    { href: '#integrasi-ai-bigdata', label: 'Kripto & AI' },
];

export const ADOPTION_CHART_DATA = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024 (E)'],
    data: [
        { name: '2016', value: 5 },
        { name: '2017', value: 10 },
        { name: '2018', value: 20 },
        { name: '2019', value: 40 },
        { name: '2020', value: 100 },
        { name: '2021', value: 200 },
        { name: '2022', value: 300 },
        { name: '2023', value: 425 },
        { name: '2024 (E)', value: 560 },
    ],
};

export const CRYPTO_CHARACTERISTICS: AccordionItem[] = [
    { title: 'Terenkripsi (Kriptografi)', content: 'Keamanan cryptocurrency dijamin oleh kriptografi canggih. Pengguna menggunakan kode unik untuk menyelesaikan transaksi, dan identitas asli mereka tidak diungkapkan, memberikan tingkat privasi dan keamanan yang tinggi.' },
    { title: 'Terdesentralisasi', content: 'Tidak dikelola oleh server pusat atau otoritas tunggal seperti bank sentral. Jaringan terdiri dari ribuan atau jutaan komputer (node) yang tersebar di seluruh dunia, dan setiap node memiliki salinan identik dari seluruh buku besar transaksi.' },
    { title: 'Trustless', content: 'Pengguna dapat melakukan transaksi tanpa perlu saling mempercayai atau memercayakan uang atau informasi kepada pihak ketiga. Kepercayaan dibangun melalui mekanisme kriptografi dan konsensus jaringan itu sendiri.' },
    { title: 'Volatilitas Tinggi', content: 'Dikenal memiliki volatilitas harga yang sangat tinggi. Nilainya dapat naik atau turun secara drastis dalam waktu singkat, menjadikannya aset berisiko tinggi untuk investasi.' },
    { title: 'Transparansi dan Immutability', content: 'Semua transaksi tercatat secara permanen dan transparan pada blockchain, yang tidak dapat diubah atau dihapus. Ini memastikan integritas data dan meminimalkan risiko penipuan.' }
];

export const BLOCKCHAIN_PILLARS: AccordionItem[] = [
    { title: 'Desentralisasi', content: 'Blockchain beroperasi tanpa otoritas pusat. Ini berarti tidak ada satu entitas pun yang memiliki kendali penuh atas jaringan, sehingga mengurangi risiko sensor, manipulasi, atau kegagalan tunggal.' },
    { title: 'Transparansi', content: 'Semua transaksi yang dicatat di blockchain bersifat publik dan dapat diverifikasi oleh siapa saja di jaringan. Meskipun identitas pengguna bersifat pseudonim, riwayat transaksi dapat dilacak, memastikan akuntabilitas.' },
    { title: 'Immutability (Tidak Dapat Diubah)', content: 'Setelah sebuah transaksi dicatat dan divalidasi dalam sebuah blok, transaksi tersebut tidak dapat diubah atau dihapus. Ini menciptakan catatan yang tidak dapat dirusak dan sangat aman.' },
    { title: 'Keamanan Kriptografi', content: 'Setiap blok dalam blockchain diamankan menggunakan teknik kriptografi canggih. Ini memastikan bahwa data yang tersimpan aman dari peretasan dan manipulasi.' }
];

export const CONSENSUS_MECHANISMS: TabItem[] = [
    { id: 'pow', title: 'Proof of Work (PoW)', content: 'PoW adalah mekanisme konsensus asli yang digunakan oleh Bitcoin. Penambang bersaing untuk memecahkan teka-teki kriptografi yang kompleks untuk memvalidasi blok baru dan menambahkannya ke blockchain. Proses ini membutuhkan daya komputasi yang besar.' },
    { id: 'pos', title: 'Proof of Stake (PoS)', content: 'PoS memilih validator blok berdasarkan jumlah koin atau token yang mereka miliki dan "pertaruhkan" (stake) sebagai jaminan. Semakin banyak koin yang di-stake, semakin besar kemungkinan mereka dipilih untuk memvalidasi blok dan menerima hadiah. Ethereum kini menggunakan PoS setelah beralih dari PoW.' },
    { id: 'dpos', title: 'Delegated Proof of Stake (DPoS)', content: 'DPoS adalah varian dari PoS yang memilih sekelompok validator terpercaya. Pemegang koin atau token dapat memilih validator yang akan mewakili mereka dalam proses konsensus. Sistem ini lebih cepat dan efisien. EOS adalah contoh blockchain yang menggunakan DPoS.' },
    { id: 'poa', title: 'Proof of Authority (PoA)', content: 'Mekanisme ini menggunakan beberapa pihak tertentu yang telah dipilih dan disahkan untuk memvalidasi transaksi. Pihak-pihak ini bertindak sebagai validator dan mengatur proses konsensus. PoA umumnya digunakan dalam jaringan blockchain privat atau konsorsium.' }
];

export const ASSET_TYPES: TabItem[] = [
    { id: 'cryptocurrencies', title: 'Cryptocurrency (Mata Uang Digital)', content: 'Ini adalah jenis aset kripto yang paling dikenal, dirancang untuk berfungsi sebagai alat tukar. Contoh paling terkenal adalah Bitcoin (BTC) dan Ethereum (ETH). Mereka digunakan untuk transaksi, menyimpan nilai, dan sebagai dasar untuk aplikasi terdesentralisasi (dApps).' },
    { id: 'stablecoins', title: 'Stablecoin', content: 'Stablecoin adalah jenis cryptocurrency yang nilainya dipatok (pegged) ke aset yang lebih stabil, seperti mata uang fiat (misalnya USD), emas, atau komoditas lainnya. Tujuannya adalah untuk mengurangi volatilitas harga yang ekstrem. Contoh: USDT, USDC, BUSD.' },
    { id: 'utility-tokens', title: 'Utility Token', content: 'Utility token memberikan akses ke produk atau layanan tertentu dalam ekosistem blockchain. Mereka bukan investasi dalam arti tradisional, melainkan "kupon digital" yang memungkinkan pengguna untuk berinteraksi dengan platform atau dApps. Contoh: Filecoin (FIL) untuk penyimpanan data, Basic Attention Token (BAT) untuk iklan digital.' },
    { id: 'security-tokens', title: 'Security Token', content: 'Security token adalah representasi digital dari aset dunia nyata (seperti saham perusahaan, real estat, atau obligasi) yang diperdagangkan di blockchain. Mereka tunduk pada regulasi sekuritas dan memberikan hak kepemilikan atau dividen kepada pemegangnya.' },
    { id: 'nfts', title: 'Non-Fungible Token (NFT)', content: 'NFT adalah aset digital unik yang tidak dapat diganti satu sama lain. Setiap NFT memiliki identitas unik yang tercatat di blockchain, menjadikannya ideal untuk merepresentasikan kepemilikan atas barang digital seperti karya seni, musik, item game, atau koleksi digital. Contoh: CryptoPunks, Bored Ape Yacht Club.' }
];

export const INFRASTRUCTURE: AccordionItem[] = [
    { title: 'Layer 1: Jaringan Dasar dan Keamanan', content: 'Layer 1 mengacu pada infrastruktur dasar atau "mainnet" dari sebuah blockchain. Ini adalah lapisan fundamental yang mendukung semua transaksi on-chain dan bertindak sebagai sumber kebenaran. Protokol Layer 1 memiliki fungsionalitas inti, seperti memproses dan menyelesaikan transaksi secara mandiri, mendefinisikan aturan jaringan, menyediakan keamanan kriptografi, dan menjalankan mekanisme konsensus. Contoh: Bitcoin, Ethereum, Solana, Cardano, Polkadot.' },
    { title: 'Layer 2: Solusi Skalabilitas dan Efisiensi', content: 'Layer 2 adalah solusi penskalaan yang dibangun di atas blockchain Layer 1. Tujuannya adalah mengatasi tantangan skalabilitas Layer 1, memungkinkan transaksi yang lebih cepat dan murah tanpa memodifikasi lapisan dasar. Bekerja dengan memproses transaksi di luar blockchain utama (off-chain) kemudian menyinkronkan hasilnya ke Layer 1. Contoh: Rollups (Optimistic Rollups, ZK-Rollups), Sidechains (Polygon), State Channels (Lightning Network).' },
    { title: 'Layer 0: Fondasi Interoperabilitas', content: 'Layer 0 adalah lapisan infrastruktur yang mendasari Layer 1 blockchain. Ini berfokus pada protokol, konektivitas, dan standar yang memungkinkan berbagai blockchain untuk berinteraksi satu sama lain (interoperabilitas). Layer 0 memungkinkan pengembang untuk membangun blockchain baru di atasnya dengan mudah. Contoh: Polkadot, Cosmos.' }
];

export const PLATFORMS_WALLETS: AccordionItem[] = [
    { title: 'Exchange (Bursa Kripto)', content: 'Bursa kripto adalah platform online tempat pengguna dapat membeli, menjual, dan memperdagangkan berbagai jenis cryptocurrency. Bursa ini berfungsi sebagai perantara antara pembeli dan penjual, menyediakan likuiditas dan fitur perdagangan. Contoh: Binance, Coinbase, Kraken, Indodax.' },
    { title: 'Dompet Kripto (Wallets)', content: 'Dompet kripto adalah perangkat lunak atau perangkat keras yang memungkinkan pengguna untuk menyimpan, mengirim, dan menerima cryptocurrency. Dompet ini tidak benar-benar menyimpan koin itu sendiri, melainkan menyimpan kunci privat (private keys) yang diperlukan untuk mengakses dan mengelola aset di blockchain.' },
    { title: 'Jenis Dompet Kripto', content: 'Terdapat dua kategori utama dompet kripto: Hot Wallets (terhubung ke internet, seperti dompet web, mobile, desktop) yang nyaman tetapi kurang aman, dan Cold Wallets (tidak terhubung ke internet, seperti hardware wallets, paper wallets) yang lebih aman tetapi kurang praktis untuk transaksi harian. Pemilihan dompet bergantung pada kebutuhan keamanan dan kenyamanan pengguna.' }
];

export const AI_BIGDATA_INTEGRATION: AccordionItem[] = [
    { title: 'Sinergi Blockchain, AI, dan Big Data', content: 'Integrasi Big Data dan blockchain menjadi vital untuk menciptakan proses yang transparan dan berkelanjutan. Blockchain menyediakan infrastruktur data yang aman, tidak dapat diubah, dan transparan untuk menyimpan informasi. Big Data menawarkan kemampuan mengumpulkan, menyimpan, dan menganalisis volume informasi yang sangat besar dari berbagai sumber. AI memanfaatkan data terverifikasi dari blockchain untuk melakukan analisis canggih, prediksi yang akurat, dan otomatisasi proses bisnis. Konvergensi ketiga teknologi ini berpotensi membuka tingkat otomatisasi, efisiensi, dan model bisnis baru yang revolusioner.' },
    { title: 'Dampak dan Contoh Implementasi di Masa Depan', content: 'Sektor Keuangan: Analisis Pasar Prediktif (AI menganalisis data blockchain untuk prediksi harga), Otomatisasi Perdagangan (algoritma AI mengotomatiskan strategi perdagangan). Rantai Pasok: Pelacakan Transparan (blockchain melacak produk dengan AI untuk efisiensi). Kesehatan: Manajemen Data Pasien (blockchain untuk keamanan data, AI untuk analisis). Identitas Digital: Verifikasi Identitas (blockchain untuk identitas, AI untuk deteksi penipuan). Kota Pintar: Optimasi Infrastruktur (blockchain untuk data sensor, AI untuk efisiensi energi).' }
];

export const PROS_LIST: ProConItem[] = [
    { strong: 'Desentralisasi:', text: 'Tidak dikelola oleh pemerintah atau lembaga keuangan, mengurangi risiko sensor dan manipulasi.' },
    { strong: 'Tahan Inflasi:', text: 'Pasokan terbatas (misal Bitcoin) dirancang untuk meningkatkan nilai dan tahan inflasi.' },
    { strong: 'Transparan dan Cepat:', text: 'Transaksi publik di blockchain, diselesaikan dalam detik/menit.' },
    { strong: 'Privasi:', text: 'Terlindung dari pencurian identitas dengan transaksi pseudonim.' },
    { strong: 'Ketahanan Sistem:', text: 'Sifat terdesentralisasi mengurangi risiko kegagalan lembaga keuangan besar.' },
];

export const CONS_LIST: ProConItem[] = [
    { strong: 'Volatilitas Tinggi:', text: 'Harga sangat fluktuatif, berisiko tinggi untuk investasi.' },
    { strong: 'Regulasi Belum Jelas:', text: 'Kurangnya kerangka regulasi global dapat menimbulkan ketidakpastian hukum.' },
    { strong: 'Risiko Keamanan:', text: 'Rentan terhadap peretasan bursa dan penipuan jika tidak disimpan dengan aman.' },
    { strong: 'Skalabilitas:', text: 'Beberapa blockchain menghadapi tantangan dalam memproses volume transaksi tinggi.' },
    { strong: 'Dampak Lingkungan:', text: 'Proses penambangan (terutama Proof of Work) membutuhkan energi besar.' },
];