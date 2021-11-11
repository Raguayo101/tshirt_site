const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <figure>
        <img src='https://via.placeholder.com/150' alt='logo' />
      </figure>
      <div className='searchBar'>
        <i className="fa fa-search icon"></i>
        <input className='search' type='text' placeholder='Search..' />
      </div>
      <section className='links'>
        <a href='#'>Create Account</a>
        <a href='#'>Cart</a>
        <a href='#'>Contact</a>
      </section>
    </nav>
  );
};

export default Navbar;
