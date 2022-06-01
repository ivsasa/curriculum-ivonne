//Para cargar iconos
import { library } from '@fortawesome/fontawesome-svg-core'; //Devuelve el objeto library
import { faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignature } from '@fortawesome/free-solid-svg-icons';
import { faTreeCity } from '@fortawesome/free-solid-svg-icons';
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';




library.add(faPhoenixFramework, faHome,faSignature, faTreeCity,faEarthAfrica,faSchool,faCalendarDays,faMobile,faEnvelopeOpen,faBriefcase, faArrowRightFromBracket);

export default FontAwesomeIcon;