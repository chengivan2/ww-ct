import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from '@/data/reviews';
import styles from './ReviewCard.module.css';

interface ReviewCardProps {
    review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.authorBadge}>
                    <div className={styles.avatar}>
                        {getInitials(review.author)}
                    </div>
                    <div className={styles.authorInfo}>
                        <h4 className={styles.authorName}>{review.author}</h4>
                        <p className={styles.authorMeta}>{review.country} • {review.date}</p>
                    </div>
                </div>
                <div className={styles.ratingBadge}>
                    <Star size={16} fill="currentColor" />
                    <span>{review.rating.toFixed(1)}</span>
                </div>
            </div>

            <div className={styles.content}>
                <Quote className={styles.quoteIcon} size={24} />
                {review.text && <p className={styles.reviewText}>{review.text}</p>}
            </div>

            <div className={styles.footer}>
                <span className={styles.source}>via {review.source}</span>
            </div>
        </div>
    );
};

export default ReviewCard;
