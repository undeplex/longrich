
import fs from 'fs';
import path from 'path';
import ReviewCard from '@/components/ReviewCard';

export async function getServerSideProps() {
  
  const filePath = path.join(process.cwd(), 'data', 'reviews.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  return {
    props: {
      reviews: data
    }
  };
}

export default function Reviews({ reviews }) {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}