export function displayPopularityRating(popularityNumber: number): string {
  const maxStars = 5;
  const popularity = Math.round(popularityNumber / 20); 
  const starCount = Math.min(maxStars, popularity); 
  return '⭐️'.repeat(starCount);
}