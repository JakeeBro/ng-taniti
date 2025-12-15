export interface Activity {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export const transportationActivities: Activity[] = [];

export const lodgingActivities: Activity[] = [];

export const foodActivities: Activity[] = [];

export const entertainmentActivities: Activity[] = [
  {
    id: 'e4',
    name: 'Snorkeling',
    price: 80,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'e5',
    name: 'Ziplining',
    price: 100,
    image: 'pageMedia/entertainment-ziplining.jpeg'
  },
  {
    id: 'e3',
    name: 'Fishing',
    price: 150,
    image: 'pageMedia/entertainment-fishing.jpeg'
  },
  {
    id: 'e8',
    name: 'Golf',
    price: 125,
    image: 'pageMedia/entertainment-golf.jpeg'
  },
  {
    id: 'e6',
    name: 'Night Club',
    price: 30,
    image: 'pageMedia/entertainment-night-club.jpeg'
  },
  {
    id: 'e7',
    name: 'Art Gallery',
    price: 15,
    image: 'pageMedia/entertainment-art-gallery.jpeg'
  },
  {
    id: 'e1',
    name: 'Museum',
    price: 25,
    image: 'pageMedia/entertainment-museum.jpeg'
  },
  {
    id: 'e2',
    name: 'Bowling',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  }
]

export const sightseeingActivities: Activity[] = [
  {
    id: 's1',
    name: 'Volcano Tour',
    price: 250,
    image: 'pageMedia/sightseeing-volcano.jpeg'
  },
  {
    id: 's2',
    name: 'Helicopter Tour',
    price: 300,
    image: 'banners/entertainment.jpeg'
  },
  {
    id: 's3',
    name: 'Boat Tour',
    price: 50,
    image: 'pageMedia/sightseeing-boat-tour.jpeg'
  },
  {
    id: 's4',
    name: 'Bus Tour',
    price: 50,
    image: 'pageMedia/sightseeing-bus-tour.jpeg'
  },
  {
    id: 's5',
    name: 'Bike Tour',
    price: 40,
    image: 'pageMedia/transportation-bike.jpeg'
  },
  {
    id: 's6',
    name: 'Rainforest Hike',
    price: 50,
    image: 'pageMedia/sightseeing-rainforest.jpeg'
  },
];