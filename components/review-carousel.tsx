"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ReviewSnapshot } from "@/lib/reviews";
import { ActionLink } from "./action-link";

type ReviewCarouselProps = {
  snapshot: ReviewSnapshot;
};

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 50 : -50
  }),
  center: {
    opacity: 1,
    x: 0
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -50 : 50
  })
};

export function ReviewCarousel({ snapshot }: ReviewCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lastInteraction, setLastInteraction] = useState(0);
  const reviews = snapshot.featuredReviews;

  const nextReview = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
    setLastInteraction(Date.now());
  };
  
  const prevReview = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setLastInteraction(Date.now());
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length, lastInteraction]);

  const currentReview = reviews[activeIndex];

  return (
    <div className="flex flex-col">
      {/* Sleek, refined Google Proof Badge at the top instead of a giant box */}
      <div className="mb-8 sm:mb-16 flex flex-col sm:flex-row sm:items-center justify-between border-b border-[color:var(--line)] pb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 rounded-full bg-[color:var(--ink)] px-4 py-2 text-white">
             <span className="font-bold text-sm">5.0</span>
             <Star className="h-4 w-4 fill-[color:var(--accent)] text-[color:var(--accent)]" />
          </div>
          <div className="text-sm font-medium text-[color:var(--muted)]">
            Based on {snapshot.reviewCount}+ reviews on Google
          </div>
        </div>
        <ActionLink
          href={snapshot.googleMapsUrl}
          external
          eventName="reviews_google_click"
          className="text-xs font-bold uppercase tracking-widest text-[color:var(--accent-strong)] hover:text-[color:var(--ink)] transition-colors"
        >
          View all on Google
        </ActionLink>
      </div>

      {/* The Hero Quote Layout */}
      {/* -my-4 py-4 -mx-4 px-4 expands the overflow mask so the button drop shadow isn't clipped */}
      <div className="relative min-h-[350px] lg:min-h-[300px] flex items-center overflow-hidden -my-4 py-4 -mx-4 px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full relative"
          >
            {/* Massive Quote Mark Watermark */}
            <div className="absolute -top-16 -left-6 lg:-left-12 text-[150px] lg:text-[250px] leading-none font-serif text-[color:var(--accent)]/10 pointer-events-none font-bold select-none z-0">
              &ldquo;
            </div>
            
            {/* The Text */}
            <p className="relative z-10 font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.4] text-[color:var(--ink)] opacity-90 max-w-5xl">
              "{currentReview.text}"
            </p>
            
            {/* The Author */}
            <div className="relative z-10 mt-6 sm:mt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
               <div className="flex items-center gap-4">
                 {currentReview.authorPhoto ? (
                   <img src={currentReview.authorPhoto} alt={currentReview.author} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover shadow-sm border border-[color:var(--line)]" />
                 ) : (
                   <div className="w-12 h-12 rounded-full bg-[color:var(--line)]/50 border border-[color:var(--line)] flex items-center justify-center font-bold text-[color:var(--muted)]">
                     {currentReview.author.charAt(0)}
                   </div>
                 )}
                 <div>
                   <p className="font-display text-xl lg:text-2xl font-bold text-[color:var(--ink)]">{currentReview.author}</p>
                   <div className="flex items-center gap-2 mt-1">
                     <div className="flex text-yellow-400">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} className={`w-4 h-4 ${i < currentReview.rating ? "fill-current" : "text-gray-300"}`} />
                       ))}
                     </div>
                     <span className="text-sm text-[color:var(--muted)]">• {currentReview.relativeTime}</span>
                   </div>
                 </div>
               </div>
               
               <ActionLink
                 href={currentReview.sourceUrl}
                 external
                 eventName="review_source_click"
                 className="inline-flex w-fit text-xs uppercase tracking-widest font-bold text-[color:var(--ink)] border border-[color:var(--line)] bg-white rounded-full px-5 py-3 shadow-sm hover:border-[color:var(--accent-strong)] transition-colors"
               >
                 Read on Google
               </ActionLink>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 sm:mt-16 flex items-center justify-between w-full px-4 sm:px-0 sm:justify-start sm:w-auto sm:gap-4">
        <button 
          onClick={prevReview}
          className="order-1 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--ink)] hover:border-[color:var(--accent-strong)] hover:text-[color:var(--accent-strong)] transition-all shadow-sm shrink-0"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button 
          onClick={nextReview}
          className="order-3 sm:order-2 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--ink)] hover:border-[color:var(--accent-strong)] hover:text-[color:var(--accent-strong)] transition-all shadow-sm shrink-0"
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        
        {/* Progress indicators */}
        <div className="order-2 sm:order-3 sm:ml-4 flex gap-2">
           {reviews.map((_, i) => (
             <div 
               key={i} 
               className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-10 bg-[color:var(--accent-strong)]' : 'w-2 bg-[color:var(--line)]'}`} 
             />
           ))}
        </div>
      </div>
    </div>
  );
}
