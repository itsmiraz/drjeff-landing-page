import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1B365D] text-white py-8">
    <div className="max-w-[1070px] mx-auto px-4 md:px-8 lg:px-16 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Dr. Jeff Garofalo. All rights
        reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer