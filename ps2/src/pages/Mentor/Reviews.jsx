import React from 'react'

const Reviews = () => {
  const reviews = [
    { id: 1, student: 'John Doe', rating: 5, comment: 'Excellent mentor! Helped me secure my dream job at Google.', date: '2024-01-16' },
    { id: 2, student: 'Jane Smith', rating: 4, comment: 'Very helpful guidance throughout the placement process.', date: '2024-01-12' },
    { id: 3, student: 'Mike Johnson', rating: 5, comment: 'Best mentor I could ask for. Highly recommended!', date: '2024-01-08' }
  ]

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Reviews About You</h2>
      
      <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
        <h3 className="font-semibold text-yellow-800">Overall Rating: 4.7/5.0</h3>
        <p className="text-yellow-600">Based on 15 reviews</p>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 last:border-b-0">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-lg">{review.student}</h4>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="mb-2">
              <span className="text-yellow-500">{renderStars(review.rating)}</span>
              <span className="ml-2 text-gray-600">({review.rating}/5)</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews