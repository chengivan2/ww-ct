'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './PropertySection.module.css';

interface CloudinaryImage {
    url: string;
    width: number;
    height: number;
    aspect_ratio: number;
    format: string;
    public_id: string;
}

interface RoomSection {
    id?: string;
    title: string;
    description: string;
    images: CloudinaryImage[];
}

interface PropertySectionProps {
    sections: RoomSection[];
    propertyName: string;
}

export default function PropertySection({ sections, propertyName }: PropertySectionProps) {
    return (
        <div className={styles.propertyContainer}>
            {sections.map((section, index) => {
                // Alternate layout: even index has text on left, odd index has text on right
                const isTextLeft = index % 2 === 0;

                return (
                    <div key={index} id={section.id} className={`${styles.sectionRow} ${!isTextLeft ? styles.rowReverse : ''}`}>
                        {/* Sticky Text Side */}
                        <div className={styles.textColumn}>
                            <div className={`${styles.stickyText} ${!isTextLeft ? styles.stickyRight : ''}`}>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    {section.title}
                                </motion.h2>
                                <div className={styles.accentLine} />
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    {section.description}
                                </motion.p>
                            </div>
                        </div>

                        {/* Scrolling Masonry Images Side */}
                        <div className={styles.imageColumn}>
                            {section.images.map((img, imgIndex) => {
                                // Determine grid span based on aspect ratio
                                // Landscape (wide): span 2 columns
                                // Portrait (tall): span 1 column, height auto
                                const isLandscape = img.aspect_ratio > 1.2;

                                return (
                                    <motion.div
                                        key={img.public_id || imgIndex}
                                        className={`${styles.imageWrapper} ${isLandscape ? styles.landscape : styles.portrait}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                    >
                                        <Image
                                            src={img.url}
                                            alt={`${section.title} at ${propertyName} in Naivasha - Image ${imgIndex + 1}`}
                                            width={img.width}
                                            height={img.height}
                                            className={styles.propertyImage}
                                            sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 50vw, 700px"
                                            priority={index === 0 && imgIndex === 0}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
