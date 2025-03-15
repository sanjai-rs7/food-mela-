const currYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 text-center">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Sanjai</strong>
      </p>
    </footer>
  );
};

export default Footer;
