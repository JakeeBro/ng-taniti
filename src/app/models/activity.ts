export interface Activity {
  id: string;
  name: string;
  price: number;
  image?: string;
}

export const transportationActivities: Activity[] = [
  {
    id: 't1',
    name: 'Taniti Air',
    price: 1500,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 't2',
    name: 'Tropic Travel',
    price: 1000,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 't3',
    name: 'Bob',
    price: 20,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 't4',
    name: 'Atlantis Cruise',
    price: 2000,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 't5',
    name: 'Titanic III',
    price: 1800,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 't4',
    name: 'Coral Ferry',
    price: 300,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
];

export const lodgingActivities: Activity[] = [
  {
    id: 'l1',
    name: 'Etoile Residence',
    price: 1500,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'l2',
    name: 'Sentinel Retreat',
    price: 1000,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'l3',
    name: 'Grand Manor',
    price: 800,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'l4',
    name: 'Willow Inn',
    price: 400,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'l5',
    name: 'Iron Kettle',
    price: 300,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'l6',
    name: 'Anchor House',
    price: 300,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
];

export const foodActivities: Activity[] = [
  {
    id: 'f1',
    name: 'Azure Plate',
    price: 400,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f2',
    name: 'Volcano\'s Edge',
    price: 400,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f3',
    name: 'Compass Rose',
    price: 350,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f4',
    name: 'Taniti Tide',
    price: 300,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f5',
    name: 'Shell Bistro',
    price: 300,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f6',
    name: 'Yankee Grill',
    price: 200,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f7',
    name: 'Flo\'s Cafe',
    price: 180,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f8',
    name: 'Grain Club',
    price: 180,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f9',
    name: 'Silk Pagoda',
    price: 180,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f10',
    name: 'Mizuki Omakase',
    price: 180,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f11',
    name: 'Harbor Harvest',
    price: 80,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f12',
    name: 'Taniti Depot',
    price: 60,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f13',
    name: 'Ocean Pantry',
    price: 40,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f14',
    name: 'Island Provisions',
    price: 35,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
  {
    id: 'f14',
    name: 'The Lighthouse',
    price: 15,
    image: 'pageMedia/entertainment-snorkeling.jpeg'
  },
];

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