export default function Navbarre(){
    const isActive = (path) => {
        return location.pathname === path;
    };
    
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <Link
                to="/"
                className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 transition-colors duration-200">
                <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="font-semibold text-lg tracking-tight">FrameUp</span>
                </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
                <Link
                to="/presentation"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive("/presentation")
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}>
                Présentation
                </Link>


                <Link
                to="/sample"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive("/sample")
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}>
                Sample
                </Link>
            </nav>

            
            </div>

            <div className="md:hidden border-t border-gray-200">
                <div className="px-2 pt-3 pb-3 space-y-1">
                    <Link
                    to="/presentation"
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive("/presentation")
                        ? "text-gray-900 bg-gray-100"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}>
                    Présentation
                    </Link>
                </div>
            </div>
        </div>
        </header>
    )
}