export interface LatLngLiteral {
  lat: number;
  lng: number;
}

export interface RoutePoint {
  name: string;
  position: LatLngLiteral;
  elevation: number; // in meters
  description: string;
  type: 'camp' | 'gate' | 'peak' | 'checkpoint';
}

export interface KilimanjaroRoute {
  id: string;
  name: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  description: string;
  success_rate: number;
  path: LatLngLiteral[];
  waypoints: RoutePoint[];
  highlights: string[];
  best_season: string;
  price_range: {
    min: number;
    max: number;
  };
} 