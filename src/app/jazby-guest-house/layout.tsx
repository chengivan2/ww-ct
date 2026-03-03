import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Jazby Guest House | Best Guest Accommodation in Naivasha',
    description: 'Looking for the best guest houses in Naivasha? Jazby Guest House offers clean, comfortable, and affordable accommodation for your perfect staycation in Naivasha, Nakuru County.',
};

export default function JazbyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}
