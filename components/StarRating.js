import { useState } from 'react';

const StarRating = ({ rating, onChange }) => {
    const [hover, setHover] = useState(null);

    return (
        <div className="star-rating flex ali items-center gap-1">
            {[1, 2, 3, 4, 5].map(star => (
                <svg
                    key={star}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => onChange(star)}
                    className={`star cursor-pointer my-2 ${star <= (hover || rating) ? 'text-emerald-400' : 'text-gray-400'}`}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="currentColor"/>
                </svg>
            ))}
        </div>
    );
};

export default StarRating;