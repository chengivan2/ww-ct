import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Luna Light Guest House | Affordable Stay in Naivasha',
    description: 'Discover very affordable guest rooms in Naivasha at Luna Light Guest House. Experience one of the cleanest guest houses in Naivasha for a budget-friendly and comfortable stay in Nakuru County.',
};

export default function LunaLightLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>;
}
