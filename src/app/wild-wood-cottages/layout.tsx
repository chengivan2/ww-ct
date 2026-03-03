import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Wild Wood Cottages | Naivasha Nature Retreat',
    description: 'Experience a premium staycation in Naivasha at Wild Wood Cottages. Enjoy our eco-friendly nature retreat, among the best guest houses in Naivasha for a relaxing getaway in Nakuru County.',
};

export default function WildWoodLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}
