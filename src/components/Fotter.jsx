const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white">MyLogo</h2>
            <p className="mt-4 text-sm leading-6">
              We build modern and scalable web applications with React,
              Tailwind CSS, and Next.js.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <p>Email: hello@example.com</p>
            <p className="mt-2">Phone: +91 98765 43210</p>
            <p className="mt-2">Lucknow, India</p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="hover:text-white transition">
                {/* Facebook */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H8.08V12h2.36V9.8c0-2.34 1.4-3.63 3.54-3.63 1.02 0 2.08.18 2.08.18v2.29h-1.17c-1.16 0-1.52.72-1.52 1.46V12h2.58l-.41 2.89h-2.17v6.99A10 10 0 0022 12z" />
                </svg>
              </a>

              <a href="#" className="hover:text-white transition">
                {/* Twitter/X */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.9 2H22l-6.7 7.66L23 22h-6.04l-4.73-6.18L6.8 22H3.7l7.18-8.22L1 2h6.2l4.28 5.63L18.9 2z" />
                </svg>
              </a>

              <a href="#" className="hover:text-white transition">
                {/* LinkedIn */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5A2.48 2.48 0 012.5 5.98 2.48 2.48 0 010 3.5 2.48 2.48 0 012.48 1 2.48 2.48 0 014.98 3.5zM.5 8h4V24h-4V8zm7 0h3.83v2.16h.06c.53-1 1.83-2.16 3.77-2.16 4.03 0 4.78 2.65 4.78 6.09V24h-4v-7.02c0-1.67-.03-3.82-2.33-3.82-2.34 0-2.7 1.82-2.7 3.7V24h-4V8z" />
                </svg>
              </a>

              <a href="#" className="hover:text-white transition">
                {/* GitHub */}
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5A12 12 0 000 12.8c0 5.08 3.29 9.37 7.86 10.89.58.11.79-.26.79-.58v-2.23c-3.2.71-3.87-1.4-3.87-1.4-.53-1.36-1.3-1.72-1.3-1.72-1.06-.74.08-.72.08-.72 1.17.08 1.79 1.24 1.79 1.24 1.04 1.82 2.73 1.3 3.39.99.11-.77.41-1.3.74-1.6-2.56-.3-5.25-1.32-5.25-5.88 0-1.3.45-2.37 1.19-3.2-.12-.3-.52-1.53.11-3.19 0 0 .97-.32 3.19 1.22a10.7 10.7 0 015.81 0c2.22-1.54 3.19-1.22 3.19-1.22.63 1.66.23 2.89.11 3.19.74.83 1.19 1.9 1.19 3.2 0 4.57-2.69 5.58-5.26 5.88.42.37.79 1.08.79 2.18v3.23c0 .32.21.7.8.58A12 12 0 0024 12.8 12 12 0 0012 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;