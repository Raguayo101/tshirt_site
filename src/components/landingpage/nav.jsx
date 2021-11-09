const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <figure>
        <img src='https://via.placeholder.com/150' alt='logo' />
      </figure>
      <input type='text' placeholder='Search..' />
      <section>
        <a href='#'>Login</a>
        <a href='#'>Cart</a>
        <a href='#'>FAQ</a>
        <a href='#'>Contact us</a>
      </section>
    </nav>
  );
};

export default Navbar;
