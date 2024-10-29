import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1B365D] text-[#F5F7F9] py-[12px]">
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