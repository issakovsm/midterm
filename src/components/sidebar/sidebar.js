import "./sidebar.css"
import SideBarOptions from "./sidebaroptions/sidebaroptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from '@mui/icons-material/Person2'

const SideBar = () => {
    return (
        <div className="SideBar">
            <TwitterIcon className="TwitterIcon_SideBar"/>
            <SideBarOptions active Icon={HomeIcon} Text="Home"/>
            <SideBarOptions Icon={Person2Icon} Text="Profile"/>
        </div>    
    );
}
 
export default SideBar;