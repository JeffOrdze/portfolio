import profile from "../../assets/images/profile.svg";

const ProfileIcon = () => {
  return (
    <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
      <a href="/" className="pointer-events-auto">
        <img
          src={profile}
          alt="profile image"
          className="rounded-full bg-zinc-100 object-cover h-9 w-9"
        />
      </a>
    </div>
  );
};

export default ProfileIcon;
