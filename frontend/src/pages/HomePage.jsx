import { Activity } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans px-6 py-5">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-10">
        <Link
          to="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-all"
        >
          <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-xl font-bold">MediConnect</h1>
        </Link>
        <div className="flex gap-6 items-center">
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:underline">
              Beranda
            </a>
            <a href="#" className="hover:underline">
              Hubungi Dokter
            </a>
            <a href="#" className="hover:underline">
              Cari Obat
            </a>
            <a href="#" className="hover:underline">
              Konsultasi
            </a>
            <a href="#" className="hover:underline">
              Bantuan
            </a>
          </nav>
          <input
            type="text"
            placeholder="Search Here..."
            className="input input-bordered w-40 md:w-auto"
          />
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-14">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight">
            Discovering Health <br />
            Where{" "}
            <span className="text-primary">Compassion Meets Innovation</span>
          </h1>
          <p className="text-lg">
            Berinovasi untuk Kesejahteraan Anda: Memanfaatkan Teknologi Mutakhir
            dan Praktik Progresif untuk Memberikan Anda Solusi Perawatan
            Kesehatan yang Sempurna..
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/login">
              <button className="btn btn-primary">Hubungi Dokter</button>
            </Link>
            <div className="badge text-lg">⭐ 4.9 (630 reviews)</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-full max-w-sm">
            <img
              src="/dokter1.webp"
              alt="Video Doctor"
              className="rounded-xl"
            />
          </div>
          <div className="flex gap-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </div>
        </div>
      </section>

      {/* Telehealth Solutions */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Telehealth Solutions</h2>
          <p className="text-lg">
            Platform kami menghubungkan Anda dengan tenaga kesehatan yang
            tepercaya, memungkinkan konsultasi yang cepat dan aman, kapan saja,
            di mana saja.
          </p>
          <button className="btn btn-secondary w-fit">
            Eksplor Lebih Dalam
          </button>
          <div className="text-sm">
            Telah Melayani 300.000+ Pasien Baik Online Maupun Offline
          </div>
          <button className="btn btn-primary w-fit">Bergabung Komunitas</button>
        </div>
        <div>
          <img
            src="/dokter2.jpg"
            alt="Doctor"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
