'use client';

import { useRef, Suspense } from 'react';
import PropertySection from '@/components/PropertySection';
import BookingForm from '@/components/BookingForm';
import { Home, ConciergeBell, Users, Car, Wifi, Bath, Wind, Mountain, ShowerHead, Utensils } from 'lucide-react';
import styles from './page.module.css';

const JAZBY_SECTIONS = [
    {
        title: "The Living Room",
        description: "Relax in our spacious, well-lit living area. Outfitted with comfortable seating, a flat-screen TV with streaming capabilities, and a warm ambiance perfect for unwinding after a day of adventure.",
        images: ["/images/jazby/living-room/jazby-gh-img-1.jpg", "/images/jazby/living-room/jazby-gh-img-6.jpg"]
    },
    {
        title: "The Kitchen",
        description: "Our fully equipped shared kitchen allows you to prepare your own meals. Features modern appliances, ample counter space, and all the utensils you need for a comfortable self-catering experience.",
        images: ["/images/jazby/kitchen/jazby-gh-img-4.jpg", "/images/jazby/kitchen/jazby-gh-img-5.jpg", "/images/jazby/kitchen/jazby-gh-img-8.webp", "/images/jazby/kitchen/jazby-gh-img-9.webp"]
    },
    {
        title: "The Bedroom",
        description: "Rest easy in our plush beds. Each room is designed for maximum tranquility with premium linens, soundproofing, and sockets conveniently placed near the bed.",
        images: ["/images/jazby/bedroom/jazby-gh-img-10.webp", "/images/jazby/bedroom/jazby-gh-img-11.webp", "/images/jazby/bedroom/jazby-gh-img-12.webp", "/images/jazby/bedroom/jazby-gh-img-7.jpg"]
    },
    {
        title: "The Bathroom",
        description: "Clean, modern bathrooms featuring walk-in showers, fresh towels daily, and complimentary premium toiletries to refresh yourself.",
        images: ["/images/jazby/bathroom/jazby-gh-img-2.jpg"]
    },
    {
        title: "The Exterior",
        description: "Enjoy our outdoor fireplace and comfortable seating. Take in the crisp Naivasha air, and you might even spot local wildlife passing by. A true pristine getaway.",
        images: ["/images/jazby/exterior/jazby-gh-img-3.jpg", "/images/jazby/exterior/jazby-gh-img-ext1.jpg", "/images/jazby/exterior/jazby-gh-img-ext2.jpg"]
    }
];

export default function JazbyPage() {
    const bookingRef = useRef<HTMLDivElement>(null);

    const scrollToBooking = () => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <div className={styles.headerText}>
                        <h1>Jazby Guest House</h1>
                        <p>Discover the best guest rooms near Nakuru and full accommodation guest houses in Naivasha. Jazby Guest House offers premium comfort, exceptional value, and free WiFi, perfectly positioned for your serene stay near Hell&apos;s Gate.</p>
                    </div>
                    <div className={styles.headerAmenities}>
                        <div className={styles.amenity}><Home size={20} /> <span>Apartments</span></div>
                        <div className={styles.amenity}><ConciergeBell size={20} /> <span>Room service</span></div>
                        <div className={styles.amenity}><Users size={20} /> <span>Family rooms</span></div>
                        <div className={styles.amenity}><Car size={20} /> <span>Free on-site parking</span></div>
                        <div className={styles.amenity}><Wifi size={20} /> <span>Free Wifi (In all areas • 24 Mbps)</span></div>
                        <div className={styles.amenity}><Bath size={20} /> <span>Private bathroom</span></div>
                        <div className={styles.amenity}><Wind size={20} /> <span>Balcony</span></div>
                        <div className={styles.amenity}><Mountain size={20} /> <span>View</span></div>
                        <div className={styles.amenity}><ShowerHead size={20} /> <span>Shower</span></div>
                        <div className={styles.amenity}><Utensils size={20} /> <span>Kitchenette</span></div>
                    </div>
                    <button onClick={scrollToBooking} className="btn-primary">Book Jazby Now</button>
                </div>
            </header>

            <main>
                <PropertySection sections={JAZBY_SECTIONS} />
            </main>

            <section ref={bookingRef} className={styles.bookingSection}>
                <div className={`container ${styles.bookingContainer}`}>
                    <div className={styles.bookingInfo}>
                        <h2>Reserve Your Stay</h2>
                        <p>Experience the ultimate comfort at Jazby Guest House. Fill out the form below, and our team will get back to you with availability and a personalized quote.</p>
                        <ul className={styles.bookingHighlights}>
                            <li>✓ Instant enquiry via Resend</li>
                            <li>✓ Direct communication</li>
                            <li>✓ Best price guaranteed</li>
                        </ul>
                    </div>
                    <div className={styles.formWrapper}>
                        <Suspense fallback={<div className={styles.formLoading}>Loading form...</div>}>
                            <BookingForm defaultProperty="Jazby Guest House" />
                        </Suspense>
                    </div>
                </div>
            </section>
        </div>
    );
}
