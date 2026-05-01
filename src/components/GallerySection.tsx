import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Reveal } from "./Reveal";

const GallerySection = ({
  title = "Galeria",
  subtitle = "Flash, projetos autorais e detalhes de cicatrização. Tudo em alta definição.",
  images = [
    "/tatto/arte.jpg",
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg", 
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
    "/gallery/gallery7.jpg",
    "/gallery/gallery8.jpg",
    "/gallery/gallery9.png",
    "/editorial/dragon-tattoo-1.png",
    "/editorial/artist-work-1.png",
    "/editorial/artist-work-2.png",
    "/editorial/floral-tattoo-1.png",
    "/hero/hero.jpg",
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg"
  ]
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="relative min-h-screen py-20 px-4 md:px-8 text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center flex flex-col items-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight text-white mb-6">
            {title}
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      </div>

      {/* Gallery Grid */}
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            className="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-[2rem] cursor-pointer group shadow-2xl"
            onClick={() => openModal(index)}
          >
            {/* frame */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div 
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            >
              <img 
                src={image}
                alt={`Trabalho ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* editorial overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="absolute left-6 right-6 top-6 flex items-center justify-between z-20 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/90 backdrop-blur-xl">
                Flash
                <span className="h-1 w-1 rounded-full bg-brand-red animate-pulse" />
                Estúdio
              </div>
              <div className="rounded-full border border-white/10 bg-black/40 p-3 backdrop-blur-xl hover:bg-brand-red/20 transition-colors duration-300">
                <ZoomIn className="h-5 w-5 text-white" />
              </div>
            </div>

            <div className="absolute left-6 right-6 bottom-6 z-20 translate-y-[10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-1">
                    Coleção Artena
                  </div>
                  <div className="text-xl font-display tracking-wide text-white">
                    Trabalho {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                   <ChevronRight className="h-5 w-5 text-white/70" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/75 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigate('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Selected tattoo artwork"
              className="max-h-[90vh] max-w-[92vw] object-contain rounded-3xl border border-white/12 bg-white/5 shadow-[0_40px_160px_-80px_rgba(0,0,0,0.95)]"
            />

            <button
              onClick={() => navigate('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/75 hover:text-white"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl" />
    </section>
  );
};

export default GallerySection;