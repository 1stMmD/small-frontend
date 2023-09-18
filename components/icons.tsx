import { IconBaseProps, IconType } from "react-icons";
import {
  RiAddLine,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArticleFill,
  RiArticleLine,
  RiChat1Line,
  RiChat3Fill,
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
  RiCloseLine,
  RiDeleteBin2Line,
  RiDiscordFill,
  RiErrorWarningFill,
  RiEyeCloseLine,
  RiEyeLine,
  RiFacebookFill,
  RiFunctionFill,
  RiGithubFill,
  RiGoogleFill,
  RiHashtag,
  RiImage2Line,
  RiLoader5Line,
  RiLoginBoxLine,
  RiLogoutBoxFill,
  RiLogoutBoxLine,
  RiMacbookLine,
  RiMenu2Line,
  RiMoonCloudyLine,
  RiMoonFoggyLine,
  RiMore2Fill,
  RiMoreFill,
  RiPencilLine,
  RiPercentLine,
  RiSearch2Line,
  RiSearchLine,
  RiSettings2Line,
  RiSunCloudyLine,
  RiSunFoggyLine,
  RiThumbUpFill,
  RiThumbUpLine,
  RiTwitterXLine,
  RiUser2Line,
  RiUser3Line,
} from "react-icons/ri";

export const Icons = {
  User: RiUser3Line,
  Spinner: RiLoader5Line,
  Circle: RiCheckboxBlankCircleLine,
  Discord: RiDiscordFill,
  Google: RiGoogleFill,
  Facebook: RiFacebookFill,
  // Logo: RiPercentLine,
  Eye: RiEyeLine,
  EyeClose: RiEyeCloseLine,
  ArrowDown: RiArrowDownSLine,
  Menu: RiMenu2Line,
  Close: RiCloseLine,
  Success: RiCheckboxCircleFill,
  Error: RiErrorWarningFill,
  Sun: RiSunFoggyLine,
  Moon: RiMoonFoggyLine,
  Macbook: RiMacbookLine,
  MoreVertical: RiMore2Fill,
  MoreHorizontal: RiMoreFill,
  Login: RiLoginBoxLine,
  Logout: RiLogoutBoxLine,
  Setting: RiSettings2Line,
  Pencil: RiPencilLine,
  Article: RiArticleLine,
  Add: RiAddLine,
  Chat: RiChat1Line,
  ThumbUpLine: RiThumbUpLine,
  ThumbUpFill: RiThumbUpFill,
  Search: RiSearchLine,
  DeleteBin: RiDeleteBin2Line,
  ArrowRightS: RiArrowRightSLine,
  ArrowLeftS: RiArrowLeftSLine,
  Image: RiImage2Line,
  Topic: RiChat3Fill,
  Hashtag: RiHashtag,
  Github: RiGithubFill,
  TwitterX: RiTwitterXLine,
  Logo: (props: IconBaseProps) => (
    <svg
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.3643 24.532C14.2425 23.4095 11.8748 21.9714 10.2612 20.2175C8.68277 18.4637 7.89354 16.0609 7.89354 13.0092C7.89354 10.7994 8.47231 8.78247 9.62985 6.95846C10.7874 5.09939 12.4535 3.62616 14.6283 2.53877C16.8031 1.41631 19.4163 0.855081 22.468 0.855081C29.9394 0.855081 34.8501 3.57354 37.2003 9.01047L35.2009 10.4311C33.7978 7.62493 32.0265 5.74831 29.8868 4.80124C27.7822 3.85416 25.3092 3.38062 22.468 3.38062C19.9775 3.38062 17.8203 3.81908 15.9963 4.696C14.2074 5.53785 12.8218 6.69539 11.8397 8.16862C10.8926 9.60677 10.4191 11.2203 10.4191 13.0092C10.4191 15.4646 11.0855 17.3763 12.4185 18.7443C13.7514 20.1123 15.6806 21.2523 18.2062 22.1643L24.1517 24.2689C26.8175 25.216 28.624 26.3209 29.5711 27.5837C30.5182 28.8114 30.9917 30.2145 30.9917 31.7929C30.9917 33.6871 30.3428 35.2655 29.0449 36.5283C27.7471 37.7911 25.5898 38.4225 22.5732 38.4225C20.3634 38.4225 18.2412 37.7385 16.2068 36.3705C14.1723 34.9674 12.4886 32.8102 11.1557 29.8988L13.3129 28.4255C14.2249 30.7757 15.5403 32.6172 17.2591 33.9502C18.9778 35.248 20.7492 35.8969 22.5732 35.8969C24.6077 35.8969 26.0985 35.5286 27.0455 34.792C27.9926 34.0554 28.4662 33.0557 28.4662 31.7929C28.4662 30.6705 28.0803 29.7058 27.3086 28.8991C26.5369 28.0572 25.204 27.3031 23.3098 26.6366L17.3643 24.532ZM20.7843 18.7969C18.5043 18.0252 16.9083 17.0957 15.9963 16.0083C15.0843 14.9209 14.6283 13.7458 14.6283 12.4831C14.6283 11.3957 14.8738 10.3785 15.3649 9.43139C15.8911 8.48431 16.7505 7.71262 17.9431 7.11631C19.1708 6.52 20.8018 6.22185 22.8363 6.22185C24.9058 6.22185 26.7649 6.748 28.4135 7.80031C30.0622 8.85262 31.3775 10.4135 32.3597 12.4831L30.2551 14.0089C29.6237 12.3252 28.6415 11.0274 27.3086 10.1154C25.9757 9.20339 24.4849 8.74739 22.8363 8.74739C20.8018 8.74739 19.3462 9.1157 18.4692 9.85231C17.5923 10.5539 17.1538 11.4308 17.1538 12.4831C17.1538 14.0966 18.6271 15.3945 21.5735 16.3766L28.0978 18.5338C31.2197 19.5511 33.6926 21.0418 35.5166 23.0062C37.3757 24.9705 38.3052 27.5486 38.3052 30.7406C38.3052 34.9849 36.9372 38.2646 34.2012 40.5797C31.5003 42.8948 27.6418 44.0523 22.6258 44.0523C18.3815 44.0523 14.8563 43.1052 12.0502 41.2111C9.244 39.3169 7.26215 36.6862 6.10462 33.3188L7.99877 32.056C9.54215 35.5286 11.5415 37.984 13.9969 39.4222C16.4523 40.8603 19.3286 41.5794 22.6258 41.5794C26.8 41.5794 30.0271 40.6498 32.3071 38.7908C34.6222 36.9317 35.7797 34.2483 35.7797 30.7406C35.7797 28.1449 34.9905 26.0754 33.412 24.532C31.8686 22.9886 29.8342 21.796 27.3086 20.9542L20.7843 18.7969Z"
        fill="currentColor"
      />
    </svg>
  ),
};
