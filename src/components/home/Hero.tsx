import { FaDownload } from "react-icons/fa";
import HeroImage from "../../assets/HeroImage.svg";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const Hero = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (user !== null) {
      navigate(routes.CHANNEL);
    } else {
      navigate(routes.LOGIN);
    }
  };

  return (
    <div className="relative bg-primary-blue text-white flex flex-col items-center pt-9">
      <img className="bg-cover w-full" src={HeroImage} alt="" />
      <div className="text-center max-w-[759px] flex flex-col gap-8 justify-center items-center absolute top-0 lg:top-32 z-40">
        <h1 className="lg:text-5xl text-xl uppercase">imagine a place...</h1>
        <p className="hidden md:block ">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <a
            href="//discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64"
            className="flex items-center gap-2 bg-white text-black p-2  md:p-3 md:px-6 rounded-full"
          >
            <FaDownload size={20} />
            <button>Download for Windows</button>
          </a>
          <button
            onClick={handleNavigate}
            className="bg-primary-gray p-2 md:p-3 md:px-6 rounded-full"
          >
            Open Discord in your browser
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
