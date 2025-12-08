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
    id: 'e1',
    name: 'Museum',
    price: 50,
    image: 'pageMedia/entertainment-museum.jpeg'
  },
  {
    id: 'e2',
    name: 'Bowling',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: 'e3',
    name: 'Fishing',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: 'e4',
    name: 'Snorkeling',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: 'e5',
    name: 'Ziplining',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: 'e6',
    name: 'Night Club',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: 'e7',
    name: 'Art Gallery',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: 'e8',
    name: 'Golf',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
]

export const sightseeingActivities: Activity[] = [
  {
    id: 's1',
    name: 'Volcano Tour',
    price: 20,
    image: 'pageMedia/sightseeing-volcano.jpeg'
  },
  {
    id: 's2',
    name: 'Helicopter Tour',
    price: 20,
    image: 'banners/entertainment.jpeg'
  },
  {
    id: 's3',
    name: 'Boat Tour',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: 's4',
    name: 'Bus Tour',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: 's5',
    name: 'Bike Tour',
    price: 20,
    image: 'pageMedia/transportation-bike.jpeg'
  },
  {
    id: 's6',
    name: 'Rainforest Hike',
    price: 20,
    image: 'pageMedia/sightseeing-rainforest.jpeg'
  },
];