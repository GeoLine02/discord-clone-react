import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import USAFlagImage from "../../assets/usa-flag-image.svg";

const HomeFooter = () => {
  return (
    <div className="md:flex justify-between text-white bg-primary-gray p-9">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl uppercase">Imagine a place</h1>
        <div className="flex gap-1 items-center">
          <img src={USAFlagImage} alt="" />
          <span>English, USA</span>
        </div>
        <section className="flex gap-4">
          <FaTwitter size={25} />
          <FaInstagram size={25} />
          <FaFacebook size={25} />
          <FaYoutube size={25} />
        </section>
      </div>
      <div className="md:flex md:min-w-[900px] justify-between">
        <section>
          <ul className="flex flex-col gap-4">
            <span className="text-primary-blue">Product</span>
            <li>Download</li>
            <li>Nitro</li>
            <li>Status</li>
          </ul>
        </section>
        <section>
          <ul className="flex flex-col gap-4">
            <span className="text-primary-blue">Company</span>
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>Newsroom</li>
          </ul>
        </section>
        <section>
          <ul className="flex flex-col gap-4">
            <span className="text-primary-blue">Resources</span>
            <li>College</li>
            <li>Support</li>
            <li>Safety</li>
            <li>Blog</li>
            <li>FeadBack</li>
            <li>Developers</li>
            <li>StreamKit</li>
          </ul>
        </section>
        <section>
          <ul className="flex flex-col gap-4">
            <span className="text-primary-blue">Policies</span>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookie Settings</li>
            <li>Guidlines</li>
            <li>Acknowledgements</li>
            <li>Licenses</li>
            <li>Moderation</li>
          </ul>
        </section>
      </div>
      <div className="flex gap-2 items-center">
        <FaDiscord size={30} />
        <h1 className="font-bold text-xl">Discord</h1>
      </div>
    </div>
  );
};

export default HomeFooter;
