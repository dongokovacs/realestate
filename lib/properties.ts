export type PropertyTag = "NEW" | "EXCLUSIVE" | "FEATURED" | "SOLD";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  tag: PropertyTag;
  image: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "The Clifftop Residence",
    location: "Malibu, California",
    price: "$12,800,000",
    beds: 6,
    baths: 7,
    sqft: 8200,
    tag: "EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: "2",
    title: "Skyline Penthouse",
    location: "Manhattan, New York",
    price: "$18,500,000",
    beds: 4,
    baths: 5,
    sqft: 5400,
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
  },
  {
    id: "3",
    title: "Villa Serena",
    location: "Beverly Hills, California",
    price: "$9,200,000",
    beds: 5,
    baths: 6,
    sqft: 7100,
    tag: "FEATURED",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  },
  {
    id: "4",
    title: "The Glass Pavilion",
    location: "Miami Beach, Florida",
    price: "$7,400,000",
    beds: 4,
    baths: 4,
    sqft: 5800,
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: "5",
    title: "Meridian Estate",
    location: "Aspen, Colorado",
    price: "$14,900,000",
    beds: 7,
    baths: 8,
    sqft: 11200,
    tag: "EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "6",
    title: "Lakefront Manor",
    location: "Lake Tahoe, Nevada",
    price: "$6,300,000",
    beds: 5,
    baths: 5,
    sqft: 6400,
    tag: "FEATURED",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "7",
    title: "The Horizon House",
    location: "Montecito, California",
    price: "$21,000,000",
    beds: 8,
    baths: 9,
    sqft: 14500,
    tag: "EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
  {
    id: "8",
    title: "Urban Observatory",
    location: "Chicago, Illinois",
    price: "$4,200,000",
    beds: 3,
    baths: 3,
    sqft: 3800,
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
  },
  {
    id: "9",
    title: "Desert Sanctuary",
    location: "Scottsdale, Arizona",
    price: "$5,750,000",
    beds: 4,
    baths: 4,
    sqft: 5200,
    tag: "FEATURED",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "10",
    title: "Waterfront Retreat",
    location: "Seattle, Washington",
    price: "$8,900,000",
    beds: 5,
    baths: 5,
    sqft: 6800,
    tag: "SOLD",
    image: "https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?w=800&q=80",
  },
];
