import {MdSpaceDashboard} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import { sidebarModal } from '../../modal/modal'

export const linkList: Array<sidebarModal> = [
    {
        link: "profile?documents=all",
        name: "profile",
        icon: <CgProfile style={{ fontSize: '18' }} />
    },
    {
        link: "dashboard",
        name: "dashboard",
        icon: <MdSpaceDashboard style={{ fontSize: '18' }} />
    },
]

export const documentLinks: Array<any> = [
    {
        search:'all',
        name: "All",
    },
    {
        search:'resume',
        name: "Resume",
    },
    {
        search:'cover-letter',
        name: "Cover Letter",
    },
]