import { StarIcon as SolidStarIcon, StarIcon as OutlineStarIcon } from '@heroicons/react/solid';

function ReviewCardk({ review }) {
  const { name, comment, recommend, stars } = review;

  // Helper to render stars based on rating
  const renderStars = () => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <SolidStarIcon key={`full-${i}`} className="h-5 w-5 text-yellow-500" />
        ))}
        {halfStar && <SolidStarIcon className="h-5 w-5 text-yellow-500" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
        {[...Array(emptyStars)].map((_, i) => (
          <OutlineStarIcon key={`empty-${i}`} className="h-5 w-5 text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="p-4 mb-4 border border-gray-300 rounded-lg">
      <div className="flex items-center mb-2">
        <span className="text-lg font-semibold mr-2">{name}</span>
        {recommend ? (
          <span className="text-sm text-green-500">Recommends</span>
        ) : (
          <span className="text-sm text-red-500">Doesn't Recommend</span>
        )}
      </div>
      <div className="flex items-center mb-2">
        {renderStars()}
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}

export default ReviewCardk;