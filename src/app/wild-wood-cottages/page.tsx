'use client';

import PropertySection from '@/components/PropertySection';
import styles from './page.module.css';

const WILDWOOD_SECTIONS = [
    {
        title: "The Living Room",
        description: "A haven of peace. The seating area is equipped with a cozy sofa, soundproofing for total quiet, and large windows that invite the natural Naivasha sunlight in.",
        images: ["/images/wildwood/living-room/wildwood-ct-img-13.jpg", "/images/wildwood/living-room/wildwood-ct-img-15.jpg", "/images/wildwood/living-room/wildwood-ct-img-3.jpg", "/images/wildwood/living-room/wildwood-ct-img-6.jpg"]
    },
    {
        title: "The Kitchen",
        description: "Embrace the freedom of self-catering. Our kitchenette features a stovetop, modern kitchenware, and all necessary cleaning products. Shop for groceries in Naivasha and cook up a storm in your private sanctuary.",
        images: ["/images/wildwood/kitchen/wildwood-ct-img-16.webp"]
    },
    {
        title: "The Bedroom",
        description: "Wake up to breathtaking mountain and lake views. The bedrooms offer a rustic yet premium feel, with comfortable bedding and ironing facilities ensuring you are always ready for the day's adventures.",
        images: ["/images/wildwood/bedroom/wildwood-ct-img-14.jpg", "/images/wildwood/bedroom/wildwood-ct-img-2.jpg"]
    },
    {
        title: "The Bathroom",
        description: "Private, spotless bathrooms equipped with fresh towels, soothing showers, slippers, and complimentary toiletries to elevate your stay.",
        images: ["/images/wildwood/bathroom/wildwood-ct-img-17.avif", "/images/wildwood/bathroom/wildwood-ct-img-18.avif"]
    },
    {
        title: "The Exterior",
        description: "Step right out into nature. All units are ground floor, highly accessible, and offer immediate access to the outdoors where you can marvel at the Naivasha landscape.",
        images: ["/images/wildwood/exterior/wildwood-ct-img-1.jpg", "/images/wildwood/exterior/wildwood-ct-img-10.jpg", "/images/wildwood/exterior/wildwood-ct-img-11.jpg", "/images/wildwood/exterior/wildwood-ct-img-12.jpg", "/images/wildwood/exterior/wildwood-ct-img-4.jpg", "/images/wildwood/exterior/wildwood-ct-img-5.jpg", "/images/wildwood/exterior/wildwood-ct-img-7.jpg", "/images/wildwood/exterior/wildwood-ct-img-8.jpg", "/images/wildwood/exterior/wildwood-ct-img-9.jpg"]
    }
];

export default function WildWoodPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={`container ${styles.headerContent}`}>
                    <h1>Wild Wood Cottages</h1>
                    <p>A serene nature retreat near Hell&apos;s Gate. Unwind in complete tranquility with our self-catering, highly accessible ground floor units.</p>
                </div>
            </header>

            <main>
                <PropertySection sections={WILDWOOD_SECTIONS} />
            </main>

            <section className={styles.bookingCta}>
                <div className={`container ${styles.ctaContent}`}>
                    <h2>Plan Your Escape</h2>
                    <p>Contact us now to secure your stay at Wild Wood Cottages and reconnect with nature.</p>
                    <a href="/contact?property=wildwood" className="btn-primary">Book Wild Wood</a>
                </div>
            </section>
        </div>
    );
}
