import { KilimanjaroRoute } from '@/types/map-types'

export const kilimanjaroRoutes: KilimanjaroRoute[] = [
  {
    id: 'machame',
    name: 'Machame Route',
    duration: '6-7 days',
    difficulty: 'Challenging',
    description: 'Known as the "Whiskey Route," this is one of the most scenic and popular paths to the summit. The route approaches from the southwest and descends using the Mweka Route, allowing for excellent acclimatization.',
    success_rate: 85,
    path: [
      { lat: -3.0744, lng: 37.3356 }, // Machame Gate
      { lat: -3.0699, lng: 37.3208 }, // Machame Camp
      { lat: -3.0632, lng: 37.3187 }, // Shira Camp
      { lat: -3.0607, lng: 37.3374 }, // Lava Tower
      { lat: -3.0632, lng: 37.3449 }, // Barranco Camp
      { lat: -3.0699, lng: 37.3559 }, // Karanga Camp
      { lat: -3.0766, lng: 37.3637 }, // Barafu Camp
      { lat: -3.0674, lng: 37.3556 }, // Uhuru Peak
    ],
    waypoints: [
      {
        name: 'Machame Gate',
        position: { lat: -3.0744, lng: 37.3356 },
        elevation: 1800,
        description: 'Starting point of the Machame Route',
        type: 'gate'
      },
      {
        name: 'Uhuru Peak',
        position: { lat: -3.0674, lng: 37.3556 },
        elevation: 5895,
        description: 'The summit of Mount Kilimanjaro',
        type: 'peak'
      },
      {
        name: 'Barafu Camp',
        position: { lat: -3.0766, lng: 37.3637 },
        elevation: 4600,
        description: 'Base camp for summit attempt',
        type: 'camp'
      }
    ],
    highlights: [
      'Scenic forest trails',
      'Shira Plateau views',
      'Lava Tower acclimatization',
      'Barranco Wall challenge',
      'Stunning sunrise at Uhuru Peak'
    ],
    best_season: 'June to October, January to March',
    price_range: {
      min: 2500,
      max: 3500
    }
  },
  {
    id: 'lemosho',
    name: 'Lemosho Route',
    duration: '7-8 days',
    difficulty: 'Moderate',
    description: 'The Lemosho Route is considered one of the most beautiful routes up Kilimanjaro. It offers a perfect combination of low traffic, scenic views, and high summit success rate.',
    success_rate: 90,
    path: [
      { lat: -3.0062, lng: 37.2896 }, // Lemosho Gate
      { lat: -3.0156, lng: 37.3012 }, // Mti Mkubwa Camp
      { lat: -3.0332, lng: 37.3187 }, // Shira 1 Camp
      { lat: -3.0607, lng: 37.3374 }, // Lava Tower
      { lat: -3.0632, lng: 37.3449 }, // Barranco Camp
      { lat: -3.0699, lng: 37.3559 }, // Karanga Camp
      { lat: -3.0766, lng: 37.3637 }, // Barafu Camp
      { lat: -3.0674, lng: 37.3556 }, // Uhuru Peak
    ],
    waypoints: [
      {
        name: 'Lemosho Gate',
        position: { lat: -3.0062, lng: 37.2896 },
        elevation: 2100,
        description: 'Starting point of the Lemosho Route',
        type: 'gate'
      },
      {
        name: 'Shira 1 Camp',
        position: { lat: -3.0332, lng: 37.3187 },
        elevation: 3500,
        description: 'First camp on the Shira Plateau',
        type: 'camp'
      },
      {
        name: 'Uhuru Peak',
        position: { lat: -3.0674, lng: 37.3556 },
        elevation: 5895,
        description: 'The summit of Mount Kilimanjaro',
        type: 'peak'
      }
    ],
    highlights: [
      'Remote wilderness experience',
      'Shira Plateau crossing',
      'Rainforest wildlife viewing',
      'Northern Circuit views',
      'High altitude desert landscapes'
    ],
    best_season: 'June to October, January to March',
    price_range: {
      min: 2800,
      max: 4000
    }
  },
  {
    id: 'marangu',
    name: 'Marangu Route',
    duration: '5-6 days',
    difficulty: 'Easy',
    description: 'Also known as the "Coca-Cola Route," Marangu is the only route that offers hut accommodation. It\'s the oldest and most established route on Kilimanjaro.',
    success_rate: 75,
    path: [
      { lat: -3.0700, lng: 37.4500 }, // Marangu Gate
      { lat: -3.0667, lng: 37.4333 }, // Mandara Hut
      { lat: -3.0633, lng: 37.4167 }, // Horombo Hut
      { lat: -3.0600, lng: 37.4000 }, // Kibo Hut
      { lat: -3.0674, lng: 37.3556 }, // Uhuru Peak
    ],
    waypoints: [
      {
        name: 'Marangu Gate',
        position: { lat: -3.0700, lng: 37.4500 },
        elevation: 1870,
        description: 'Starting point of the Marangu Route',
        type: 'gate'
      },
      {
        name: 'Horombo Hut',
        position: { lat: -3.0633, lng: 37.4167 },
        elevation: 3720,
        description: 'Main acclimatization stop',
        type: 'camp'
      },
      {
        name: 'Uhuru Peak',
        position: { lat: -3.0674, lng: 37.3556 },
        elevation: 5895,
        description: 'The summit of Mount Kilimanjaro',
        type: 'peak'
      }
    ],
    highlights: [
      'Comfortable hut accommodation',
      'Maundi Crater visit',
      'Diverse vegetation zones',
      'Gilman\'s Point passage',
      'Shorter duration option'
    ],
    best_season: 'January to March, June to October',
    price_range: {
      min: 2000,
      max: 3000
    }
  }
] 