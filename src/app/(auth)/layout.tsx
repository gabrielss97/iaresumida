import { Metadata } from 'next';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'IA Resumida',
  description: 'Privacy-first AI that helps you create in confidence.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <main className="min-h-screen bg-gray-50 flex justify-center items-center">
        {children}
      </main>
    </Providers>
  );
} 