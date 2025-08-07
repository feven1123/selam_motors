export default function TopBar() {
    return (
      <div
        className="fixed top-0 left-0 right-0 z-50 text- text-sm flex justify-center space-x-8 py-1 px-4" style={{ backgroundColor: '#F3F4F6' }}
      >
        <div className="flex items-center space-x-1">
          <span>📞</span>
          <a href="tel:+251912345678" className="hover:underline">
            +251 953 947 848
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <span>✉️</span>
          <a href="mailto:info@selamrealestate.com" className="hover:underline">
            info@selammotors.com
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <span>📍</span>
          <span>Addis Ababa, Ethiopia</span>
        </div>
      </div>
    );
  }
  