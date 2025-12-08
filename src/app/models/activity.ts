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
    id: '1',
    name: 'Museum',
    price: 50,
    image: 'pageMedia/entertainment-museum.jpeg'
  },
  {
    id: '2',
    name: 'Bowling',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '3',
    name: 'Fishing',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '4',
    name: 'Snorkeling',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '5',
    name: 'Ziplining',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '6',
    name: 'Night Club',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '7',
    name: 'Art Gallery',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '8',
    name: 'Golf',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
]

export const sightseeingActivities: Activity[] = [
  {
    id: '1',
    name: 'Volcano Tour',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '2',
    name: 'Helicopter Tour',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '3',
    name: 'Boat Tour',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '4',
    name: 'Bus Tour',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
  {
    id: '5',
    name: 'Rainforest Hike',
    price: 20,
    image: 'pageMedia/entertainment-bowling.jpeg'
  },
];