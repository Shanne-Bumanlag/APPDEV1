import UserProfileCard from './UserProfileCard';

const userData = {
  name: "Shanne Bumanlag",
  avatarUrl: "https://cdn.jsdelivr.net/gh/alohe/avatars/png/3d_3.png",
  bio: "BSIS 3 Student.",
  skills: ["React", "JavaScript", "HTML", "CSS"],
  isOnline: true,
  lastUpdated: "1 hours ago",
};

function App() {
  return (
    <UserProfileCard user={userData} />
  );
}

export default App;
