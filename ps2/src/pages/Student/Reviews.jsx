import React, { useState } from 'react'

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, company: 'Google', rating: 5, comment: 'Smooth process, great communication', date: '2024-01-15' },
    { id: 2, company: 'Microsoft', rating: 4, comment: 'Good experience, but slow response times', date: '2024-01-10' }
  ])

  const [newReview, setNewReview] = useState({
    company: '',
    rating: 5,
    comment: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const review = {
      id: reviews.length + 1,
      company: newReview.company,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    }
    setReviews([...reviews, review])
    setNewReview({ company: '', rating: 5, comment: '' })
    alert('Review submitted successfully!')
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Your Reviews</h2>
        
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{review.company}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="mb-2">
                <span className="text-yellow-500">{'⭐'.repeat(review.rating)}</span>
                <span className="ml-2 text-gray-600">({review.rating}/5)</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">Submit New Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input
              type="text"
              value={newReview.company}
              onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className="text-2xl focus:outline-none"
                >
                  {star <= newReview.rating ? '⭐' : '☆'}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Comment</label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  )
}

export default Reviews