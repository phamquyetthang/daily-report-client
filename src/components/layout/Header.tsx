import React from 'react';

const Header = () => {
  return (
    <div className="max-w-full">
      <div className="flex items-center justify-between h-24 border-b-2 border-gray-100 md:justify-start md:space-x-6">
        <div className="inline-flex">
          <a
            href="/"
            className="flex items-center justify-center space-x-3 transition-all duration-1000 ease-out transform text-wave-500"
          >
            <img
              className="w-8 h-8 rounded-full"
              src="/logo.png"
              alt="Avatar"
            />
          </a>
        </div>
        <div className="flex h-full md:flex-1">
          <div className="flex-1 hidden h-full space-x-8 md:flex">
            <a
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none border-b-2 border-transparent border-b-2 border-indigo-500 text-gray-900 focus:border-indigo-700"
            >
              Dashboard
            </a>
          </div>
          <div className="flex sm:ml-6 sm:items-center">
            <div className="relative flex items-center h-full ml-3">
              <div>
                <button
                  className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                  aria-label="User menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <img className="w-8 h-8 rounded-full" alt="Avatar" />
                </button>
              </div>

              <div className="absolute top-0 right-0 w-56 mt-20 origin-top-right transform rounded-xl">
                <div
                  className="bg-white border border-gray-100 shadow-md rounded-xl"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    className="block px-4 py-3 text-gray-700 hover:text-gray-800"
                    href="/"
                  >
                    <span className="block text-sm font-medium leading-tight truncate">
                      {/* {{myInfo.name}} */}
                    </span>
                    <span className="text-xs leading-5 text-gray-600">
                      {/* {{myInfo.email}} */}
                    </span>
                  </a>
                  <div className="border-t border-gray-100"></div>
                  <div className="py-1">
                    <div className="block px-4 py-1">
                      <span className="inline-block px-2 my-1 -ml-1 text-xs font-medium leading-5 text-gray-600 bg-gray-200 rounded">
                        Developer
                      </span>
                    </div>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    >
                      My Profile
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    >
                      Settings
                    </a>
                  </div>
                  <div className="border-t border-gray-100"></div>
                  <div className="py-1">
                    <a
                      // (click)="logout()"
                      href="/"
                      className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
