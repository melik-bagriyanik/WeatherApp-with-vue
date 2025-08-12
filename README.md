# 🌤️ Vue Hava Durumu Uygulaması

Bu proje, Vue 3 ve TypeScript kullanılarak geliştirilmiş modern bir hava durumu uygulamasıdır. OpenWeather API kullanarak gerçek zamanlı hava durumu bilgilerini gösterir.

## ✨ Özellikler

- 🔍 Şehir arama ve hava durumu görüntüleme
- ⭐ Favori şehirleri kaydetme ve yönetme
- 📱 Responsive tasarım
- 🌍 Türkçe dil desteği
- 💾 LocalStorage ile veri saklama
- 🎨 Modern ve kullanıcı dostu arayüz

## 🚀 Kurulum

### 1. Projeyi klonlayın
```bash
git clone <repository-url>
cd vue-weather-project
```

### 2. Bağımlılıkları yükleyin
```bash
npm install
```

### 3. API Anahtarını Ayarlayın

1. [OpenWeather](https://openweathermap.org/api) sitesine gidin
2. Ücretsiz hesap oluşturun
3. API anahtarınızı alın
4. `src/config/api.ts` dosyasını açın
5. `API_KEY` değerini kendi API anahtarınızla değiştirin:

```typescript
export const API_CONFIG = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5',
  API_KEY: 'YOUR_ACTUAL_API_KEY_HERE', // Buraya API anahtarınızı yazın
  UNITS: 'metric',
  LANGUAGE: 'tr'
}
```

### 4. Uygulamayı çalıştırın
```bash
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── SearchBar.vue      # Şehir arama bileşeni
│   └── WeatherCard.vue    # Hava durumu kartı
├── views/
│   ├── HomeView.vue       # Ana sayfa
│   └── FavoritesView.vue  # Favoriler sayfası
├── config/
│   └── api.ts            # API konfigürasyonu
├── router/
│   └── index.ts          # Vue Router ayarları
└── App.vue               # Ana uygulama bileşeni
```

## 🛠️ Kullanılan Teknolojiler

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vue Router** - Client-side routing
- **Axios** - HTTP client
- **OpenWeather API** - Hava durumu verileri
- **Vite** - Build tool

## 📱 Kullanım

### Ana Sayfa
- Şehir adını girin ve "Ara" butonuna tıklayın
- Hava durumu bilgileri görüntülenecektir
- "Favorilere Ekle" butonu ile şehri favorilere ekleyebilirsiniz

### Favoriler Sayfası
- Kaydedilen favori şehirleri görüntüleyin
- Şehir adına tıklayarak hava durumunu görüntüleyin
- "Kaldır" butonu ile favorilerden çıkarın

## 🔧 API Endpoint

Uygulama şu API endpoint'ini kullanır:
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric&lang=tr
```

Parametreler:
- `q`: Şehir adı
- `appid`: API anahtarı
- `units`: Birim sistemi (metric)
- `lang`: Dil (tr - Türkçe)

## 🎨 Özelleştirme

### Renk Teması
CSS değişkenlerini kullanarak renk temasını özelleştirebilirsiniz:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #4CAF50;
  --error-color: #ff6b6b;
}
```

### Dil Desteği
API çağrısındaki `lang` parametresini değiştirerek farklı dillerde hava durumu açıklamaları alabilirsiniz.

## 🚀 Production Build

Uygulamayı production için build etmek için:

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulacaktır.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Herhangi bir sorunuz veya öneriniz varsa, lütfen issue açın.

---

**Not:** API anahtarınızı güvenli tutun ve public repository'lerde paylaşmayın. Production ortamında environment variable kullanmanız önerilir.
