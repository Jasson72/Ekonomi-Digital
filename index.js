// Data for each topic
const topics = {
    earlyInternet: {
      title: "Awal Internet di Indonesia",
      text: "Internet pertama kali mulai diperkenalkan di Indonesia pada tahun 1980-an sebagai bagian dari proyek penelitian dan pengembangan teknologi. Namun, akses publik yang lebih luas baru tersedia pada pertengahan 1990-an, ketika penyedia layanan internet (ISP) lokal pertama, seperti Radnet dan Indosatnet, mulai berdiri. Internet menjadi semakin populer dengan terbentuknya komunitas pengguna internet, terutama di kalangan akademisi dan pegiat teknologi. Ini membentuk fondasi yang memungkinkan Indonesia untuk membangun infrastruktur digitalnya dan kemudian mengintegrasikan internet ke dalam berbagai sektor, termasuk pendidikan, komunikasi, dan awal dari bisnis online, yang kemudian menjadi landasan bagi ekonomi digital yang semakin maju seperti yang kita saksikan sekarang."
    },
    growth2000: {
      title: "Infrastruktur Teknologi Tahun 2000-2010",
      text: "Antara tahun 2000 hingga 2010, Indonesia mengalami perkembangan signifikan dalam infrastruktur teknologi. Selama periode ini, pemerintah dan sektor swasta mulai serius berinvestasi dalam jaringan telekomunikasi, yang memungkinkan jangkauan internet yang lebih luas di berbagai daerah. Perangkat seluler seperti ponsel dan PDA mulai menjadi lebih umum digunakan, terutama setelah peluncuran jaringan 3G pada tahun 2006, yang memungkinkan koneksi internet yang lebih cepat dan efisien. Selain itu, penggunaan internet di kalangan perusahaan mulai berkembang pesat, mendorong perusahaan-perusahaan untuk beralih ke platform digital. Pada akhir periode ini, internet bukan hanya media komunikasi, tetapi juga alat bisnis yang vital, membuka jalan bagi e-commerce dan digitalisasi sektor industri di masa mendatang."
    },
    ecommerceExpansion: {
      title: "Ekspansi E-commerce dan Startup 2011-2015",
      text: "Periode antara 2011 hingga 2015 adalah masa krusial dalam sejarah ekonomi digital Indonesia, di mana sektor e-commerce dan startup mulai berkembang dengan pesat. Platform e-commerce lokal seperti Tokopedia, Bukalapak, dan Lazada membuka peluang baru bagi bisnis kecil dan menengah untuk menjangkau konsumen secara nasional. Selain itu, iklim startup di Indonesia mulai menarik minat investasi asing, dengan banyaknya pendanaan yang mengalir untuk mengembangkan teknologi dan infrastruktur. Ekosistem startup menjadi semakin hidup dengan dukungan dari inkubator dan akselerator lokal. Kemajuan ini memungkinkan terbentuknya fondasi yang kuat bagi ekonomi digital, serta mengakselerasi transformasi digital di berbagai sektor, termasuk perbankan, logistik, dan perdagangan ritel."
    },
    fintechUnicorn: {
      title: "Era Fintech dan Unicorn 2016-2020",
      text: "Antara tahun 2016 hingga 2020, Indonesia memasuki era fintech, di mana layanan keuangan digital berkembang dengan pesat. Fintech seperti Dana, OVO, dan LinkAja mulai mendominasi pasar pembayaran digital, memungkinkan masyarakat untuk bertransaksi dengan mudah tanpa perlu menggunakan uang tunai. Selain itu, beberapa startup yang bermula sebagai platform kecil berhasil mencapai status unicorn, yaitu startup dengan valuasi di atas satu miliar dolar, seperti Go-Jek dan Traveloka. Kehadiran unicorn ini memberikan kontribusi besar terhadap ekonomi digital Indonesia, menciptakan lapangan kerja, dan meningkatkan daya saing Indonesia di kancah teknologi internasional. Pertumbuhan fintech juga membawa inklusi keuangan bagi masyarakat yang sebelumnya tidak memiliki akses ke layanan perbankan formal, sehingga memperkuat ekonomi digital secara keseluruhan."
    },
    innovationPostPandemic: {
      title: "Pemulihan dan Inovasi Pasca Pandemi 2021-2023",
      text: "Pasca pandemi COVID-19, inovasi digital di Indonesia semakin pesat dengan adopsi teknologi untuk mendukung pemulihan ekonomi. Pandemi mempercepat transformasi digital di berbagai sektor, terutama pendidikan, kesehatan, dan e-commerce. Layanan daring dan aplikasi digital menjadi prioritas, baik untuk memfasilitasi kebutuhan sehari-hari masyarakat maupun untuk mendukung kelangsungan bisnis. Banyak perusahaan yang sebelumnya belum beralih ke digital mulai mengimplementasikan teknologi seperti cloud computing, big data, dan kecerdasan buatan untuk beradaptasi dengan era baru. Selain itu, layanan telemedicine dan aplikasi edukasi online juga semakin berkembang, memungkinkan akses yang lebih mudah terhadap kesehatan dan pendidikan. Tren ini memperlihatkan bahwa transformasi digital kini menjadi bagian utama dari masyarakat Indonesia dan kunci tantangan untuk masa depan."
    }
  };
  
  // Function to show information modal
  function showInfo(topic) {
    const modal = document.getElementById("infoModal");
    document.getElementById("infoTitle").innerText = topics[topic].title;
    document.getElementById("infoText").innerText = topics[topic].text;
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById("infoModal").style.display = "none";
  }
  
  // Close modal if clicked outside of content
  window.onclick = function(event) {
    const modal = document.getElementById("infoModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  