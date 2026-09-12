'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio-data';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section id="testimonial" className="py-28 px-4 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#FFFF23] font-bold mb-3"
          >
            Client Endorsements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black tracking-tight"
          >
            Trusted by Founders & Marketers
          </motion.h2>
        </div>

        {/* Swiper Slider Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {PORTFOLIO_DATA.testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full p-8 rounded-3xl bg-[#121212] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300">
                  <div>
                    {/* Rating Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-1 text-[#FFFF23]">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FFFF23]" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-white/20" />
                    </div>

                    <p className="text-sm md:text-base text-white/90 leading-relaxed italic mb-8">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-base font-bold text-white">{item.author}</p>
                    <p className="text-xs text-[#8C8C8C]">
                      {item.role} • <span className="text-[#FFFF23]">{item.company}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
