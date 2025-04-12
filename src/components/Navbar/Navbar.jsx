import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; // ✅ Import useState
import ProfileInfo from '../Cards/ProfileInfo';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(''); // ✅ Corrected variable naming convention

  const navigate = useNavigate(); // ✅ Call useNavigate properly

  const onLogout = () => {
    navigate("/login"); // ✅ Corrected syntax
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const onClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 shadow-md"> 
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} // ✅ Simplified syntax
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
