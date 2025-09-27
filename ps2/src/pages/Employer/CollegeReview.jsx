import React, { useState } from 'react'

const CollegeReview = () => {
  const [review, setReview] = useState({
    rating: 5,
    comment: '',
    experience: '',
    suggestions: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your review! Your feedback has been submitted.')
    setReview({ rating: 5, comment: '', experience: '', suggestions: '' })
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">College Review</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Overall Rating
          </label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setReview({ ...review, rating: star })}
                className="text-2xl focus:outline-none"
              >
                {star <= review.rating ? '⭐' : '☆'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Experience with the College
          </label>
          <textarea
            value={review.experience}
            onChange={(e) => setReview({ ...review, experience: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your experience working with the college placement cell..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Comments
          </label>
          <textarea
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Any additional comments or feedback..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Suggestions for Improvement
          </label>
          <textarea
            value={review.suggestions}
            onChange={(e) => setReview({ ...review, suggestions: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Any suggestions to improve the placement process..."
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Review
        </button>
      </form>
    </div>
  )
}

export default CollegeReview