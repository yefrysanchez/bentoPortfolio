import NameWidget from "../components/NameWidget"
import ProfilePic from "../components/ProfilePic"

const HomePage = () => {
  return (
    <div className="grid gap-4">
         <ProfilePic />
         <NameWidget />
    </div>
  )
}

export default HomePage