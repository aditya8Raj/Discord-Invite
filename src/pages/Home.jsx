const Home = () => {
  return (
    <>
      {/* hero section start */}
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Join Our Professional Community
            </h1>
            <p className="py-6">Connect with programmers, gamers, and more!</p>
            <a href="https://discord.gg/VuPqSeGd">
              <button className="btn btn-primary rounded-full px-10">
                Join Now
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* about section star */}
      <div className="hero min-h-10" id="about">
        <div className="hero-content text-center mt-10">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">About Our Community</h1>
            <p className="py-6">
              Our community brings together professionals and enthusiasts to
              share knowledge, collaborate on projects, and build lasting
              connections. Whether you&apos;re a seasoned expert or just
              starting out, you&apos;ll find a welcoming space to grow and
              learn.
            </p>
            <button className="button text-center mb-8">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">
                  <a href="/members/">View Our Discord Members</a>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* about section ends */}

      {/* divider */}
      <div className="flex w-full flex-col">
        <div className="divider divider-neutral"></div>
      </div>

      {/* founders section start */}
      <section id="admins" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Admin Card 1  */}
            <div className="admin-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 relative transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 transition-opacity duration-300"></div>
              <img
                src="https://i.postimg.cc/9Qs3p1Gn/zaid.webp"
                alt="Zaid Rakhange"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary z-10"
              />
              <h3 className="font-bold text-xl mb-2 z-10">Zaid Rakhange</h3>
              <p className="text-sm text-gray-600 mb-4 z-10">Co-Founder</p>
              <p className="text-sm text-center mb-4 z-10">
                Passionate about building communities and fostering
                collaboration.
              </p>
              <div className="flex space-x-4 mb-4 z-10">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/zaid-commits"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            {/* Admin Card 2 */}
            <div className="admin-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 relative transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 transition-opacity duration-300"></div>
              <img
                src="https://i.postimg.cc/mDfsbVkH/divyanshu.jpg"
                alt="Divyanshu Mhatre"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary z-10"
              />
              <h3 className="font-bold text-xl mb-2 z-10">Divyanshu Mhatre</h3>
              <p className="text-sm text-gray-600 mb-4 z-10">Founder</p>
              <p className="text-sm text-center mb-4 z-10">
                Passionate about building communities and fostering
                collaboration.
              </p>
              <div className="flex space-x-4 mb-4 z-10">
                <a
                  href="https://x.com/Swechy315981?t=li8kYqLnvXlJz1HxlhpVXg&s=09"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Impic0"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            {/* Admin Card 3  */}
            <div className="admin-card bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 relative transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 transition-opacity duration-300"></div>
              <img
                src="https://i.postimg.cc/GtbnD2k3/arya.png"
                alt="Arya S"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary z-10"
              />
              <h3 className="font-bold text-xl mb-2 z-10">Arya S</h3>
              <p className="text-sm text-gray-600 mb-4 z-10">Discord Admin</p>
              <p className="text-sm text-center mb-4 z-10">
                Passionate to build a vibrant community, connect with new
                people.
              </p>
              <div className="flex space-x-4 mb-4 z-10">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
