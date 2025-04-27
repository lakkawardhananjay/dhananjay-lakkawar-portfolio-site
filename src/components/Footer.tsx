
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Dhananjay Lakkawar</h3>
            <p className="text-gray-400 text-sm">Cloud & DevOps Engineer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Dhananjay Lakkawar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Pune, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
