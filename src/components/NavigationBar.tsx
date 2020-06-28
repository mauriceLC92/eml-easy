import React, { useState } from 'react'

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return <header className="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3">
    <div className="flex items-center justify-between px-4 py-3 sm:p-0">
      <div className="text-gray-300 text-4xl">Easy eml</div>
      <div className="sm:hidden">
        <button
          type="button"
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {
              isMenuOpen ?
                <path v-if="isOpen" fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                :
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            }
          </svg>
        </button>
      </div>
    </div>
    {
      <div className={`${isMenuOpen ? 'block px-2 pt-2 pb-4 space-y-2' : 'hidden px-2 pt-2 pb-4 sm:flex sm:items-center sm:p-0'}`}>
        {
          ['Home', 'Viewer'].map((navItem) => <a href='#' className="mt-1 text-white px-2 block font-semibold hover:bg-gray-700 rounded sm:ml-2">{navItem}</a>)
        }
      </div>
    }
  </header>
}

// todo - Turn the button into a reusable component for this and use the one from the video from other Ben
