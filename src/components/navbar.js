import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser, faCompass, faHeart, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

export function Navbar() {
    return (
        <nav class="border text-xl fixed inset-x-0 top-0 bg-white">
            <ul class="flex justify-center space-x-5 px-80 py-4">
                <li class="grow"><a href="#">Instagram</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faHouse} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebookMessenger} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faPlusSquare} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCompass} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faHeart} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faCircleUser} /></a></li>
            </ul>
        </nav>
    );
}