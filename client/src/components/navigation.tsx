import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#1e3a8a',
      color: 'white',
      zIndex: 50,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          {/* Logo */}
          <Link href="/">
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                <span style={{ color: '#f59e0b' }}>JASWIN</span> Tech Solution
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Always visible */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navigationItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: isActive(item.path) ? '#f59e0b' : 'white',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    borderBottom: isActive(item.path) ? '2px solid #f59e0b' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.path)) {
                      (e.target as HTMLButtonElement).style.color = '#f59e0b';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.path)) {
                      (e.target as HTMLButtonElement).style.color = 'white';
                    }
                  }}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}
