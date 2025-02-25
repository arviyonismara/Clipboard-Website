import Title from "./components/title";

function App() {
  return (
    // Hero Section
    <>
      <section id="hero" className="">
        <div className="section-container mb-40 px-10 pt-16">
          <img src="./images/logo.svg" alt="" className="mx-auto my-16" />

          {/* <h3 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
            A History of Everything
          </h3> */}
          <Title>A History of Everything</Title>

          <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* Button Container */}
          <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <a
              href=""
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for IOS
            </a>
            <a
              href=""
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* Snippets Section */}
      <section id="snippets">
        <div className="section-container my-20">
          <Title>Keep track of your snippets</Title>
          <p className="section-content mb-24">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="images/image-computer.png"
                alt=""
                className="md:absolute top-0 right-[50%]"
              />
            </div>

            {/* Items container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-16 md:text-left md:pl-16">
              {/* Item 1 */}
              <div>
                <h5>Quick Search</h5>
                <p className="max-w-mmd text-grayishBlue">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              {/* Item 2 */}
              <div>
                <h5>iCloud Sync</h5>
                <p className="max-w-mmd text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices
                </p>
              </div>
              {/* Item 3 */}
              <div>
                <h5>Completely History</h5>
                <p className="max-w-mmd text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Anywhere Section */}
      <section id="access">
        <div className="section-container my-20">
          <Title>Access Clipboard anywhere</Title>
          <p className="section-content mb-24">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src="images/image-devices.png" alt="" className="mx-auto" />
        </div>
      </section>

      {/* Supercharge Section */}
      <section id="supercharge">
        <div className="section-container my-20">
          <Title>Supercharge your workflow</Title>
          <p className="section-content mb-16">
            We've got the tools to boost your productivity.
          </p>
          {/* Items Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="images/icon-blacklist.svg" alt="" className="mb-6" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="images/icon-text.svg" alt="" className="mb-6" />
              <h5>Plain text Snippets</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/* Item 1 */}
            <div className="flex flex-col items-center space-y-5">
              <img src="images/icon-preview.svg" alt="" className="mb-6" />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references">
        <div className="flex flex-col items-center justify-between max-x-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="images/logo-google.png" alt="" />
          <img src="images/logo-ibm.png" alt="" />
          <img src="images/logo-microsoft.png" alt="" />
          <img src="images/logo-hp.png" alt="" />
          <img src="images/logo-vector-graphics.png" alt="" />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="bottom">
        <div className="section-container my-20">
          <Title>Clipboard for iOS and Mac OS</Title>
          <p className="section-content text-xl mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          {/* Button Container */}
          <div className="flex flex-col w-full justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <a
              href=""
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan text-white duration-200 hover:opacity-80"
            >
              Download for IOS
            </a>
            <a
              href=""
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue text-white duration-200 hover:opacity-80"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Image */}
            <img src="images/logo.svg" alt="" className="scale-50" />
            {/* Container for menus & Social */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
              {/* Menus */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col space-4 text-center md:text-left">
                  <div>
                    <a href="" className="hover:text-strongCyan">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="" className="hover:text-strongCyan">
                      Contact Us
                    </a>
                  </div>
                </div>
                {/* Menu 2 */}
                <div className="flex flex-col space-4 text-center md:text-left">
                  <div>
                    <a href="" className="hover:text-strongCyan">
                      Privacy
                    </a>
                  </div>
                  <div>
                    <a href="" className="hover:text-strongCyan">
                      Press Kit
                    </a>
                  </div>
                </div>
                {/* Menu 3 */}
                <div className="flex flex-col space-4 text-center md:text-left">
                  <div>
                    <a href="" className="hover:text-strongCyan">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-between w-32 py-1">
                <a href="">
                  <img
                    src="images/icon-facebook.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
                <a href="">
                  <img
                    src="images/icon-twitter.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
                <a href="">
                  <img
                    src="images/icon-instagram.svg"
                    alt=""
                    className="duration-200 ficon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
