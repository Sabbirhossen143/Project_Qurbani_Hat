const Footer = () => {
  return (
    <div className="bg-white mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        
        <div>
          <h3 className="font-semibold mb-2">QurbaniHat</h3>
          <p className="text-gray-600">
            সহজে কুরবানির পশু খুঁজুন।
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: support@qurbanihat.com</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Social</h3>
          <p>Facebook | Twitter</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;