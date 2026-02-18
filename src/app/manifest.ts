import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Jyosyabhatla Sundara Sitha Ramanjaneyulu',
        short_name: 'JSSR Priest',
        description: 'Professional Vedic Priest services for all Hindu rituals and ceremonies.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#D97706', // Primary color (amber-600)
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
