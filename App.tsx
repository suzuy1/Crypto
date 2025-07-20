
import React from 'react';
import { THEME, CRYPTO_CHARACTERISTICS, BLOCKCHAIN_PILLARS, CONSENSUS_MECHANISMS, ASSET_TYPES, INFRASTRUCTURE, PLATFORMS_WALLETS, AI_BIGDATA_INTEGRATION, PROS_LIST, CONS_LIST } from './constants';
import Header from './components/Header';
import Card from './components/Card';
import Accordion from './components/Accordion';
import Tabs from './components/Tabs';
import AdoptionChart from './components/AdoptionChart';
import { CheckIcon, WarningIcon } from './components/Icons';
import { useOnScreen } from './hooks/useOnScreen';
import StaggeredList from './components/StaggeredList';

const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className = '' }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    return (
        <section
            ref={ref}
            id={id}
            className={`mb-24 scroll-mt-20 transition-all duration-700 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            {children}
        </section>
    );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; accentSubtitle?: string; }> = ({ title, subtitle, accentSubtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: THEME.text.primary }}>{title}</h2>
        {accentSubtitle && <h3 className="text-xl md:text-2xl mb-4" style={{ color: THEME.accent }}>{accentSubtitle}</h3>}
        {subtitle && <p className="text-lg text-secondary max-w-4xl mx-auto leading-relaxed" style={{ color: THEME.text.secondary }}>{subtitle}</p>}
    </div>
);

const App: React.FC = () => {

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="antialiased" style={{ backgroundColor: THEME.bg.primary }}>
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          
          <Section id="pendahuluan" className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#CCD6F6] to-[#64FFDA] bg-clip-text text-transparent">
              Analisis Ekosistem Cryptocurrency
            </h1>
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed" style={{ color: THEME.text.secondary }}>
              Jelajahi mekanisme, jenis, infrastruktur, dan prospek masa depan mata uang digital yang mengubah lanskap keuangan global dengan pendekatan yang komprehensif dan interaktif.
            </p>
            <a href="#apa-itu-kripto" className="inline-block bg-accent text-primary-bg font-semibold px-8 py-3 rounded-full border-2 border-accent transition-all duration-300 hover:bg-transparent hover:text-accent hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] transform hover:-translate-y-1">
                Mulai Jelajahi Kripto
            </a>
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Pertumbuhan Adopsi Kripto Global</h3>
              <p className="mb-8 max-w-2xl mx-auto" style={{ color: THEME.text.secondary }}>
                Jumlah pemilik aset kripto secara global terus meningkat secara signifikan, menunjukkan adopsi mainstream yang semakin luas.
              </p>
              <AdoptionChart />
            </div>
          </Section>

          <Section id="apa-itu-kripto">
            <SectionTitle title="Memahami Cryptocurrency" accentSubtitle="Definisi dan Pilar Utama" subtitle="Cryptocurrency adalah bentuk mata uang digital atau virtual yang keamanannya dijamin oleh kriptografi. Semua transaksi tercatat secara permanen dan transparan pada blockchain." />
            <div className="space-y-8">
              <Card>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: THEME.text.primary}}>A. Apa Itu Cryptocurrency?</h3>
                <p className="leading-relaxed" style={{color: THEME.text.secondary}}>Cryptocurrency adalah bentuk mata uang digital atau virtual yang keamanannya dijamin oleh kriptografi, sebuah teknik enkripsi canggih yang membuatnya hampir tidak mungkin dipalsukan atau digandakan. Berbeda dengan mata uang fiat tradisional, cryptocurrency tidak memiliki bentuk fisik; seluruh proses pembelian dan pertukaran berlangsung secara digital. Semua transaksi yang dilakukan dengan cryptocurrency tercatat secara permanen dan transparan pada sebuah buku besar digital terdistribusi yang dikenal sebagai <strong style={{color: THEME.accent}}>blockchain</strong>. Bitcoin, yang pertama kali muncul pada tahun 2008, adalah contoh paling awal dan terbesar dari jenis mata uang digital ini, yang membuka jalan bagi ribuan cryptocurrency lainnya.</p>
              </Card>
              <Card>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: THEME.text.primary}}>B. Karakteristik Kunci Cryptocurrency</h3>
                <Accordion items={CRYPTO_CHARACTERISTICS} />
              </Card>
              <Card>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: THEME.text.primary}}>C. Teknologi Blockchain</h3>
                <h4 className="text-lg md:text-xl mb-4" style={{color: THEME.accent}}>Fondasi Desentralisasi, Transparansi, dan Immutability</h4>
                <p className="mb-6 leading-relaxed" style={{color: THEME.text.secondary}}>Blockchain adalah teknologi pencatatan data yang revolusioner, dikenal karena sifatnya yang terdesentralisasi, transparan, dan sangat aman. Teknologi ini berfungsi layaknya buku besar digital yang mencatat semua transaksi atau data, namun tidak disimpan di satu lokasi pusat.</p>
                <Accordion items={BLOCKCHAIN_PILLARS} />
              </Card>
            </div>
          </Section>

          <Section id="mekanisme-kerja">
            <SectionTitle title="Mekanisme Kerja Cryptocurrency" subtitle="Pahami bagaimana transaksi kripto diproses dan divalidasi, serta mekanisme konsensus yang mendasarinya dalam ekosistem blockchain yang kompleks." />
            <div className="space-y-8">
                <Card>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: THEME.text.primary}}>A. Proses Transaksi dan Validasi</h3>
                    <p className="leading-relaxed" style={{color: THEME.text.secondary}}>Transaksi cryptocurrency melibatkan jaringan komputer yang menggunakan algoritma perhitungan tertentu yang disebut kriptografi. Proses ini dimulai dengan penambang (miner) yang menjalankan node, yaitu komputer yang menjalankan perangkat lunak blockchain dan menjaga agar jaringan tetap beroperasi. Penambang kemudian mengelompokkan transaksi yang perlu diverifikasi ke dalam sebuah "blok". Tugas krusial penambang adalah memverifikasi "hash" kriptografi yang rumit dari setiap blok. Penambang pertama yang berhasil memecahkan teka-teki kriptografi tersebut akan mendapatkan hak untuk memproses blok transaksi terbaru, dan menerima hadiah. Setelah blok diverifikasi, informasi tersebut didistribusikan ke semua penambang lain, memastikan terciptanya riwayat transaksi yang tepercaya dan terverifikasi.</p>
                </Card>
                <Card>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: THEME.text.primary}}>B. Mekanisme Konsensus Utama</h3>
                    <p className="mb-6 leading-relaxed" style={{color: THEME.text.secondary}}>Mekanisme konsensus adalah serangkaian prosedur dan aturan yang memungkinkan suatu jaringan komputer mencapai kesepakatan bersama mengenai validasi transaksi atau data tanpa memerlukan otoritas terpusat.</p>
                    <Tabs items={CONSENSUS_MECHANISMS} />
                </Card>
                <Card>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: THEME.text.primary}}>C. Peran Penambang (Miner) dan Node</h3>
                    <p className="leading-relaxed" style={{color: THEME.text.secondary}}>Dalam ekosistem cryptocurrency, penambang (miner) dan node memainkan peran krusial dalam menjaga integritas dan operasional jaringan. Penambang adalah individu atau entitas yang mengoperasikan perangkat keras komputer khusus untuk memverifikasi transaksi dan memecahkan teka-teki kriptografi, menerima kompensasi atas usaha mereka. Node adalah komputer yang terhubung ke jaringan blockchain, menyimpan salinan lengkap atau sebagian dari buku besar transaksi, dan memvalidasi setiap transaksi dan blok baru sesuai dengan aturan konsensus.</p>
                </Card>
            </div>
          </Section>

          <Section id="jenis-aset-kripto">
            <SectionTitle title="Jenis Aset Cryptocurrency" subtitle="Jelajahi berbagai kategori aset kripto, dari mata uang digital hingga token utilitas dan NFT." />
             <Card>
                <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: THEME.text.primary}}>A. Kategori Utama Aset Kripto</h3>
                <p className="mb-6 leading-relaxed" style={{color: THEME.text.secondary}}>Ekosistem cryptocurrency sangat luas dan terus berkembang, mencakup berbagai jenis aset digital dengan fungsi dan tujuan yang berbeda. Memahami kategori-kategori ini penting untuk menavigasi dunia kripto.</p>
                <Tabs items={ASSET_TYPES} />
            </Card>
          </Section>

          <Section id="infrastruktur">
            <SectionTitle title="Infrastruktur Ekosistem Blockchain" subtitle="Pahami lapisan-lapisan yang membentuk fondasi ekosistem blockchain dan bagaimana mereka mengatasi tantangan skalabilitas untuk menciptakan jaringan yang lebih efisien." />
            <Accordion items={INFRASTRUCTURE} />
          </Section>

          <Section id="platform-dompet">
            <SectionTitle title="Platform untuk Membeli dan Menyimpan Cryptocurrency" subtitle="Untuk berpartisipasi dalam ekosistem cryptocurrency, pengguna memerlukan platform untuk membeli dan menjual aset digital, serta dompet untuk menyimpannya dengan aman." />
            <Accordion items={PLATFORMS_WALLETS} />
          </Section>

           <Section id="kelebihan-kekurangan">
                <SectionTitle title="Kelebihan dan Kekurangan Cryptocurrency" subtitle="Memahami potensi dan risiko adalah kunci untuk berinvestasi dan berinteraksi dengan aset digital secara bijak." />
                <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: THEME.accent }}>
                            <CheckIcon className="w-8 h-8"/>Kelebihan
                        </h3>
                        <StaggeredList items={PROS_LIST} />
                    </Card>
                    <Card>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: THEME.error }}>
                            <WarningIcon className="w-8 h-8" />Kekurangan
                        </h3>
                        <StaggeredList items={CONS_LIST} />
                    </Card>
                </div>
            </Section>

          <Section id="integrasi-ai-bigdata">
            <SectionTitle title="Integrasi Cryptocurrency dengan AI dan Big Data" subtitle="Bagaimana sinergi antara blockchain, kecerdasan buatan (AI), dan big data membentuk masa depan inovasi digital." />
            <Accordion items={AI_BIGDATA_INTEGRATION} />
          </Section>
        </div>
      </main>

       <footer style={{ backgroundColor: THEME.bg.secondary, borderTop: `1px solid ${THEME.border}` }}>
            <div className="container mx-auto px-4 lg:px-6 py-12 text-center">
                 <h3 className="text-2xl font-bold mb-4" style={{color: THEME.text.primary}}>Kripto<span style={{color: THEME.accent}}>Interaktif</span></h3>
                <p className="max-w-2xl mx-auto mb-4" style={{color: THEME.text.secondary}}>Dibuat sebagai analisis interaktif komprehensif untuk memahami ekosistem cryptocurrency dan teknologi blockchain dalam era digital modern.</p>
                <p style={{color: THEME.text.secondary}}>&copy; {new Date().getFullYear()}. Dirancang untuk pembelajaran dan edukasi.</p>
            </div>
        </footer>
    </div>
  );
};

export default App;