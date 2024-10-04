// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faUsers, faEnvelope, faBook, faBlog, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const items = [
    { icon: faHome, label: "Home", path: "/home" }, 
    { icon: faInfoCircle, label: "Accounting", path: "/home/accounting" }, // Add paths for other items if needed
    { icon: faBriefcase, label: "Buying", path: "/home/buying" },
    { icon: faUsers, label: "Selling", path: "/home/selling" },
    { icon: faEnvelope, label: "Stock", path: "/home/stock" },
    { icon: faBook, label: "Assets", path: "/home/assets" },
    { icon: faBlog, label: "Manufacturing", path: "/home/manufacturing" },
    { icon: faBuilding, label: "Quality", path: "/home/quality" },
    { icon: faBuilding, label: "Projects", path: "/home/projects" },
    { icon: faBuilding, label: "Support", path: "/home/support" },
    { icon: faBuilding, label: "Users", path: "/home/users" },
    { icon: faBuilding, label: "HealthCare", path: "/home/healthcare" },
    { icon: faBuilding, label: "Website", path: "/home/website" },
    { icon: faBuilding, label: "CRM", path: "/home/crm" },
    { icon: faBuilding, label: "Tools", path: "/home/tools" },
    { icon: faBuilding, label: "Settings", path: "/home/settings" },
    { icon: faBuilding, label: "Integration", path: "/home/integration" },
    { icon: faBuilding, label: "ERP next integration", path: "/home/erp-integration" },
    { icon: faBuilding, label: "Build", path: "/home/build" },
  ];

  return (
    <div className="fixed h-[85vh] mt-[90px] ml-1 w-[60px] bg-dark-green pt-5 transition-width duration-300 rounded-[10px] shadow-lg hover:w-[210px] opacity-85">
      <ul className="list-none p-0 h-[75vh] overflow-y-auto scrollbar-hide ">
        {items.map((item, index) => (
          <li key={index} className="relative">
            <Link to={item.path} className="flex items-center p-5 hover:bg-[#2c7a5c] transition-colors duration-200 text-left group w-full">
              <FontAwesomeIcon icon={item.icon} className="text-white text-2xl transition-transform duration-300 mr-4" />
              <span className="absolute left-[90px] top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-300 group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
