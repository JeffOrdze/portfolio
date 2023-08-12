import { Link } from "react-router-dom";
import profile from "../../assets/images/profile.svg";

const ProfileIcon = () => {
  return (
    <div className="flex flex-1">
      <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:ring-white/10">
        <Link to="/">
          <img
            src={profile}
            alt="profile image"
            className="rounded-full bg-zinc-100 object-cover h-9 w-9"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProfileIcon;
