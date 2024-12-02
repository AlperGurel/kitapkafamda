import React from "react";
import { Book, GraduationCap, CheckCircle, Play } from "lucide-react";

const BookToCourseLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-orange-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">
                Kitap Kafamda
              </span>
            </div>
            <div className="hidden sm:flex space-x-4 items-center">
              <a
                href="#features"
                className="text-gray-600 hover:text-orange-600"
              >
                Neler Var?
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-orange-600"
              >
                Nasıl Çalışıyor?
              </a>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
                Hemen Başla!
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Kitaplarını Eğlenceli
            <br />
            <span className="text-orange-600">Bir Maceraya Dönüştür!</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Sevdiğin kitapları anlık kurs deneyimine çevir! Sıkıcı ödevler ve
            ezberler artık tarih olsun. Quizler ve özetlerle keyifli bir öğrenme
            yolculuğuna hazır mısın?
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition flex items-center">
              <Play className="mr-2 h-5 w-5" /> Kursları Keşfet
            </button>
            <button className="bg-white text-orange-600 border border-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition">
              Kendi Kitabını Yükle
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Öğrenmek Hiç Bu Kadar Eğlenceli Olmamıştı!
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Senin için özel hazırlanmış süper akıllı kurslarla öğrenmek çok
              kolay
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Book className="h-12 w-12 mx-auto text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kitap Süper Özetleri
              </h3>
              <p className="text-gray-600">
                Sayfaları taramana gerek yok! Her kitabın özü avucunda
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <GraduationCap className="h-12 w-12 mx-auto text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Her Yerde Yanında Kurs
              </h3>
              <p className="text-gray-600">
                Telefonunda, tabletinde, bilgisayarında. İstediğin yerden,
                istediğin zaman kursların seninle
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 mx-auto text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kolay Ezber Zamanı
              </h3>
              <p className="text-gray-600">
                Her bölüm sonunda minik quizlerle bilgileri kalıcı hale getir
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Book Conversion Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Kitabını Kursa Dönüştürme Sürecini Keşfet
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Kitaplardan interaktif kursa: İşte size sihirli dönüşüm!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Book Cover Stage */}
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-4 h-64 flex items-center justify-center">
                <img
                  src="https://i.dr.com.tr/cache/500x400-0/originals/0000000061424-1.jpg"
                  alt="Kitap Kapağı"
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Kitabını Yükle
              </h3>
              <p className="text-gray-600">Sevdiğin kitabı sisteme yükle</p>
            </div>

            {/* AI Processing Stage */}
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-4 h-64 flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://i.dr.com.tr/cache/500x400-0/originals/0000000061424-1.jpg"
                    alt="Kitap Kapağı"
                    className="h-32 w-24 object-cover rounded-lg shadow-md"
                  />
                  <div className="text-6xl text-orange-600">→</div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Kitaptan Kursa Dönüştürme Süreci
              </h3>
              <p className="text-gray-600">
                Akıllı sistemimiz kitabı analiz edip tercihlerinize uygun bir
                kurs hazırlıyor
              </p>
            </div>

            {/* Quiz Stage */}
            <div className="text-center">
              <div className="bg-gray-100 p-6 rounded-lg mb-4 h-64 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-md w-full">
                  <div className="text-left mb-2">
                    <p className="font-semibold text-gray-800">
                      Selim Işık nasıl bir insanın simgesidir?
                    </p>
                  </div>
                  <div className="space-y-2 text-black">
                    <div className="bg-gray-100 p-2 rounded hover:bg-orange-50 cursor-pointer">
                      A) Düşünen ve Sorgulayan
                    </div>
                    <div className="bg-gray-100 p-2 rounded hover:bg-orange-50 cursor-pointer">
                      B) Her şeyi kabul eden
                    </div>
                    <div className="bg-gray-100 p-2 rounded hover:bg-orange-50 cursor-pointer">
                      C) Çıkarcı
                    </div>
                    <div className="bg-gray-100 p-2 rounded hover:bg-orange-50 cursor-pointer">
                      D) Kaybolmuş
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Quiz
              </h3>
              <p className="text-gray-600">
                Kitap içeriğinden oluşturulmuş quizlerle deneyimini pekiştir.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Artık kitaplarınız sadece sayfalar değil, eğlenceli ve interaktif
              öğrenme deneyimleri!
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Kurs Oluşturmak Hiç Bu Kadar Kolay Olmamıştı!
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              PDF, EPUB veya DOCX yükle ya da hazır kitaplarımızdan seç. İşte bu
              kadar!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600 shadow-md">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kitabı Seç
              </h3>
              <p className="text-gray-600">
                Kendi kitabını yükle ya da kütüphanemizden süper kitaplar bul
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600 shadow-md">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kursu Oluştur
              </h3>
              <p className="text-gray-600">
                Süper zeki yapay zeka ve uzman ekibimizle kitabını kursa çevir
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600 shadow-md">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Keyifli Öğrenme
              </h3>
              <p className="text-gray-600">
                Kendi hızında, kendi tarzında öğren. Her şey senin için kısa ve
                öz!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Öğrenme Maceranı Başlat!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Ders kitapları, romanlar, her şey şimdi senin için daha eğlenceli!
            Kitaplarını özet ve quizlerle dolu interaktif kurslara dönüştür,
            öğrenmeyi gerçek bir maceraya çevir.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              id="get-started"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition"
            >
              Ücretsiz Başla
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Book className="h-8 w-8 text-orange-600 mr-2" />
              <span className="text-xl font-bold">Kitap Kafamda</span>
            </div>
            <div className="space-x-4"></div>
          </div>
          <div className="mt-4 text-center text-gray-500">
            © 2024 kitapkafamda.com
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookToCourseLanding;
