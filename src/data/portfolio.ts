import photo0 from '../assets/portfolio/edited-kitchen-island.webp';
import photo1 from '../assets/portfolio/edited-kitchen-white-cabinets.webp';
import photo2 from '../assets/portfolio/edited-kitchen-green-cabinets.webp';
import photo3 from '../assets/portfolio/edited-bathroom-blue.webp';
import photo4 from '../assets/portfolio/edited-bathroom-shiplap.webp';
import photo5 from '../assets/portfolio/edited-bathroom-shower.webp';
import photo6 from '../assets/portfolio/interior-fireplace.webp';
import photo7 from '../assets/portfolio/interior-staircase.webp';
import photo8 from '../assets/portfolio/interior-living-room.webp';
import photo9 from '../assets/portfolio/exterior-pergola.webp';
import photo10 from '../assets/portfolio/exterior-deck.webp';
import photo11 from '../assets/portfolio/exterior-greenhouse.webp';

// Owner-supplied photographs, selected from Work Portfolio.
export const portfolio = {
  'edited-kitchen-island': { image: photo0, alt: "Kitchen with white cabinetry, dark countertops, and a central island", category: "Kitchen", source: "Edited_Kitchen/kitchen edit.jpg" },
  'edited-kitchen-white-cabinets': { image: photo1, alt: "White kitchen cabinetry with light stone countertops, a green patterned backsplash, and double ovens", category: "Kitchen", source: "Edited_Kitchen/20171121_145710.jpg.jpg" },
  'edited-kitchen-green-cabinets': { image: photo2, alt: "Kitchen with green lower cabinets, a farmhouse sink, open shelves, and a tile backsplash", category: "Kitchen", source: "Edited_Kitchen/20180621_092812.jpg" },
  'edited-bathroom-blue': { image: photo3, alt: "Bathroom with blue walls, a white vanity, and a white bathtub and shower surround", category: "Bathrooms", source: "Edited_Bathroom/20240804_175112.jpg" },
  'edited-bathroom-shiplap': { image: photo4, alt: "Bathroom with pale blue shiplap, a wood vanity and vessel sink, and a glass shower", category: "Bathrooms", source: "Edited_Bathroom/20170803_162526.jpg" },
  'edited-bathroom-shower': { image: photo5, alt: "Glass-enclosed tiled shower with a mosaic accent border and a handheld showerhead", category: "Bathrooms", source: "Edited_Bathroom/FB_IMG_1449344810457.jpg" },
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
