// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const restaurants = [
  {
    id: "1",
    name: "Pizza Hut",
    image: "https://via.placeholder.com/300x200?text=Pizza+Hut",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Pizza_Hut_international_logo_2014.svg",
    rating: 4.5,
    deliveryTime: "30-40 min",
    category: "Pizza",
    priceRange: "$$",
  },
  {
    id: "2",
    name: "McDonald's",
    image: "https://via.placeholder.com/300x200?text=McDonald%27s",
    logo: "https://pbs.twimg.com/profile_images/902203164446863360/FCNDKaZy_400x400.jpg",
    rating: 4.2,
    deliveryTime: "20-30 min",
    category: "Fast Food",
    priceRange: "$",
  },
  {
    id: "3",
    name: "Sushi Express",
    image: "https://via.placeholder.com/300x200?text=Sushi+Express",
    logo: "https://cdn.brandfetch.io/idOiAQjlV_/w/1200/h/1200/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1761698980188",
    rating: 4.7,
    deliveryTime: "25-35 min",
    category: "Japanese",
    priceRange: "$$$",
  },
  {
    id: "4",
    name: "Burger King",
    image: "https://via.placeholder.com/300x200?text=Burger+King",
    logo: "https://banner2.cleanpng.com/20180618/sea/kisspng-hamburger-whopper-burger-king-south-africa-restaur-burger-king-logo-5b2794cb501678.2286330115293206513281.jpg",
    rating: 4.3,
    deliveryTime: "15-25 min",
    category: "Burgers",
    priceRange: "$",
  },
  {
    id: "5",
    name: "Burger King",
    image: "https://via.placeholder.com/300x200?text=Burger+King",
    logo: "https://banner2.cleanpng.com/20180618/sea/kisspng-hamburger-whopper-burger-king-south-africa-restaur-burger-king-logo-5b2794cb501678.2286330115293206513281.jpg",
    rating: 4.3,
    deliveryTime: "15-25 min",
    category: "Burgers",
    priceRange: "$",
  },
  {
    id: "6",
    name: "Sushi Express",
    image: "https://via.placeholder.com/300x200?text=Sushi+Express",
    logo: "https://cdn.brandfetch.io/idOiAQjlV_/w/1200/h/1200/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1761698980188",
    rating: 4.7,
    deliveryTime: "25-35 min",
    category: "Japanese",
    priceRange: "$$$",
  },
  {
    id: "7",
    name: "Pizza Hut",
    image: "https://via.placeholder.com/300x200?text=Pizza+Hut",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Pizza_Hut_international_logo_2014.svg",
    rating: 4.5,
    deliveryTime: "30-40 min",
    category: "Pizza",
    priceRange: "$$",
  },
  {
    id: "8",
    name: "McDonald's",
    image: "https://via.placeholder.com/300x200?text=McDonald%27s",
    logo: "https://pbs.twimg.com/profile_images/902203164446863360/FCNDKaZy_400x400.jpg",
    rating: 4.2,
    deliveryTime: "20-30 min",
    category: "Fast Food",
    priceRange: "$",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(restaurants)
}
