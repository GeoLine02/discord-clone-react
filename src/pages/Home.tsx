import Hero from "../components/home/Hero";
import HomeHeader from "../components/home/HomeHeader";
import LandingImage1 from "../assets/landing-image-1.svg";
import LandingImage2 from "../assets/landing-image-2.svg";
import LandingImage3 from "../assets/landing-image-3.svg";
import HomeFooter from "../components/home/HomeFooter";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <main>
        <Hero />
        <section className="text-primary-gray md:flex gap-6 items-center max-w-[1440px] mx-auto py-11 px-4">
          <img src={LandingImage1} alt="" />
          <div>
            <h1 className="text-3xl">
              Create an invite-only place where you belong
            </h1>
            <p>
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </section>
        <section className="max-w-[1440px] mx-auto py-11 md:flex items-center space-y-6 px-4">
          <div className="text-primary-gray gap-6 items-center">
            <h1 className="text-3xl">Where hanging out is easy</h1>
            <p>
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </p>
          </div>
          <img src={LandingImage2} alt="" />
        </section>
        <section className="text-primary-gray md:flex gap-6 items-center max-w-[1440px] mx-auto py-11 px-4 space-y-6">
          <img src={LandingImage3} alt="" />
          <div>
            <h1 className="text-3xl">From few to a fandom</h1>
            <p>
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <HomeFooter />
      </footer>
    </div>
  );
};

export default Home;
