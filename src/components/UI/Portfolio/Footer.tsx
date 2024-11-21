"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#1e1c45] via-[#302d6b] to-[#5e0a99] text-white py-10 rounded-xl">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-[#e3e2fd] mb-4">About Us</h3>
            <p className="text-sm text-[#d182e3] leading-relaxed">
              We provide high-quality blogs and insights on technology, travel,
              personal growth, and more. Our goal is to inspire and inform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#e3e2fd] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-[#9d98f0]">
              <li>
                <a href="#" className="hover:text-[#d182e3] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d182e3] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d182e3] transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d182e3] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-[#e3e2fd] mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-[#d182e3]">
              Email: rasheduzzamanreshad@gmail.com
            </p>
            <p className="text-sm text-[#d182e3]">Phone: +880 1787170612</p>
            <p className="text-sm text-[#d182e3]">
              Address: 8200 Barishal, Bangladesh
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold text-[#e3e2fd] mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#9d98f0] hover:text-[#d182e3] transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M9 8H7v4h2v12h5V12h3.642L18 8h-4V6c0-.825.275-1 1-1h3V0h-4c-3.866 0-6 2.239-6 6v2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#9d98f0] hover:text-[#d182e3] transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.357.647 4.862 4.862 0 0 0 2.133-2.69 9.725 9.725 0 0 1-3.127 1.184 4.918 4.918 0 0 0-8.384 4.482 13.945 13.945 0 0 1-10.149-5.146c-.438.757-.685 1.64-.685 2.58 0 1.78.906 3.356 2.283 4.285a4.904 4.904 0 0 1-2.229-.616c-.054 2.213 1.524 4.29 3.775 4.753a4.906 4.906 0 0 1-2.223.084 4.92 4.92 0 0 0 4.604 3.416A9.869 9.869 0 0 1 0 21.541a13.94 13.94 0 0 0 7.548 2.211c9.142 0 14.307-7.721 14.307-14.426 0-.22-.005-.437-.015-.653A10.243 10.243 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#9d98f0] hover:text-[#d182e3] transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.057 2.03.24 2.725.512a5.49 5.49 0 0 1 2.007 1.315 5.493 5.493 0 0 1 1.315 2.007c.273.695.455 1.519.512 2.725.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.206-.24 2.03-.512 2.725a5.487 5.487 0 0 1-1.315 2.007 5.487 5.487 0 0 1-2.007 1.315c-.695.273-1.519.455-2.725.512-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.057-2.03-.24-2.725-.512a5.487 5.487 0 0 1-2.007-1.315 5.487 5.487 0 0 1-1.315-2.007c-.273-.695-.455-1.519-.512-2.725C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.057-1.206.24-2.03.512-2.725a5.49 5.49 0 0 1 1.315-2.007A5.49 5.49 0 0 1 6.077 2.675c.695-.273 1.519-.455 2.725-.512C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.736 0 8.332.013 7.052.07 5.773.128 4.775.305 3.987.596 3.2.886 2.549 1.261 1.979 1.831A9.72 9.72 0 0 0 .596 3.987C.305 4.775.128 5.773.07 7.052.013 8.332 0 8.736 0 12s.013 3.668.07 4.948c.058 1.279.235 2.277.526 3.065a9.72 9.72 0 0 0 1.383 2.155 9.72 9.72 0 0 0 2.155 1.383c.788.291 1.786.468 3.065.526 1.279.058 1.683.07 4.948.07s3.668-.013 4.948-.07c1.279-.058 2.277-.235 3.065-.526a9.72 9.72 0 0 0 2.155-1.383 9.72 9.72 0 0 0 1.383-2.155c.291-.788.468-1.786.526-3.065.058-1.279.07-1.683.07-4.948s-.013-3.668-.07-4.948c-.058-1.279-.235-2.277-.526-3.065a9.72 9.72 0 0 0-1.383-2.155A9.72 9.72 0 0 0 20.017.596C19.229.305 18.231.128 16.952.07 15.672.013 15.268 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center text-sm text-[#d182e3] mt-8">
          © {new Date().getFullYear()} PortfolioSite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
