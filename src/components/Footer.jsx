const Footer = () => {
  return (
    <div className="bg-gray-100 mt-16 border-t">
      
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-3">
            QurbaniHat
          </h3>
          <p className="text-gray-600 leading-relaxed">
            সহজে কুরবানির পশু খুঁজুন এবং নিরাপদে কিনুন।
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Contact
          </h3>
          <p className="text-gray-600 mb-1">📧 qurbanihat@gmail.com</p>
          <p className="text-gray-600">📞 + 1234-56789</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Follow Us
          </h3>

          <div className="flex gap-3">
            <span className="px-3 py-1 bg-white rounded shadow-sm hover:bg-green-100 cursor-pointer transition">
              Facebook
            </span>
            <span className="px-3 py-1 bg-white rounded shadow-sm hover:bg-green-100 cursor-pointer transition">
              Twitter
            </span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 border-t py-4">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;