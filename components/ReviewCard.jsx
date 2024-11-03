import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function ReviewCard({ review }) {
  const { name, comment, recommend, stars } = review;
  
  // Helper to render stars based on rating
  const renderStars = () => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-emerald-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-emerald-500" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-emerald-500" />
        ))}
      </>
    );
  };

  return (
    <div className="p-4 mb-4  w-full bg-white   rounded-lg">
      <div className="flex items-center mb-2">
        {renderStars()}

      </div>
      <div className="flex items-center mb-2">

       
      </div>
      <p className="text-gray-700 my-4">{comment}</p>
      <span className="text-lg font-semibold mr-2">{name}</span>
      {recommend ? (
          <span className="text-sm text-green-500">Recommends</span>
        ) : (
          <span className="text-sm text-red-500">Doesn't Recommend</span>
        )}

    </div>
  );
}

export default ReviewCard;