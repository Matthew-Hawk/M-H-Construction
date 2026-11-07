import photo0 from '../assets/portfolio/kitchen-island.webp';
import photo1 from '../assets/portfolio/kitchen-wood-cabinets.webp';
import photo2 from '../assets/portfolio/kitchen-green-island.webp';
import photo3 from '../assets/portfolio/bathroom-tub.webp';
import photo4 from '../assets/portfolio/bathroom-shower.webp';
import photo5 from '../assets/portfolio/bathroom-vanity.webp';
import photo6 from '../assets/portfolio/interior-fireplace.webp';
import photo7 from '../assets/portfolio/interior-staircase.webp';
import photo8 from '../assets/portfolio/interior-living-room.webp';
import photo9 from '../assets/portfolio/exterior-pergola.webp';
import photo10 from '../assets/portfolio/exterior-deck.webp';
import photo11 from '../assets/portfolio/exterior-greenhouse.webp';

// Owner-supplied photographs, selected from Work Portfolio.
export const portfolio = {
  'kitchen-island': { image: photo0, alt: "Kitchen with white cabinetry, dark countertops, and a central island", category: "Kitchen", source: "Kitchen/20190313_090036.jpg" },
  'kitchen-wood-cabinets': { image: photo1, alt: "Kitchen with wood cabinetry, stone countertops, and a central island", category: "Kitchen", source: "Kitchen/20181024_162344.jpg" },
  'kitchen-green-island': { image: photo2, alt: "Kitchen with white upper cabinets, green lower cabinets, and a matching island", category: "Kitchen", source: "Kitchen/20251103_105417.jpg" },
  'bathroom-tub': { image: photo3, alt: "White freestanding bathtub surrounded by warm tile and a mosaic border", category: "Bathrooms", source: "Bathrrom/20171206_163236.jpg" },
  'bathroom-shower': { image: photo4, alt: "Tiled walk-in shower with an arched window, built-in bench, and black fixtures", category: "Bathrooms", source: "Bathrrom/20230920_154516.jpg" },
  'bathroom-vanity': { image: photo5, alt: "Wood bathroom vanity with a light countertop and black faucet", category: "Bathrooms", source: "Bathrrom/20251028_113433.jpg" },
  'interior-fireplace': { image: photo6, alt: "White brick fireplace with built-in cabinets and wood shelves", category: "Interior", source: "Interior/20231219_151254.jpg" },
  'interior-staircase': { image: photo7, alt: "Stair landing with wood handrail and horizontal cable railing", category: "Interior", source: "Interior/20190529_154226.jpg" },
  'interior-living-room': { image: photo8, alt: "Open living space with wood-look flooring and recessed lighting", category: "Interior", source: "Interior/20251028_113623.jpg" },
  'exterior-pergola': { image: photo9, alt: "Wood deck and pergola beside a brick home", category: "Exterior", source: "Exterior/20201120_172526.jpg" },
  'exterior-deck': { image: photo10, alt: "Finished wood deck with dark railing overlooking a lawn", category: "Exterior", source: "Exterior/20211021_085814.jpg" },
  'exterior-greenhouse': { image: photo11, alt: "Glass greenhouse with a black frame on a raised foundation", category: "Exterior", source: "Exterior/20160707_141429.jpg" },
};

export const additionalWork = [
  { name: 'Interiors', photos: [portfolio['interior-fireplace'], portfolio['interior-staircase'], portfolio['interior-living-room']] },
  { name: 'Exteriors', photos: [portfolio['exterior-pergola'], portfolio['exterior-deck'], portfolio['exterior-greenhouse']] },
];
