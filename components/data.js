import {
  HeartIcon,
  UsersIcon,
  ChartBarIcon,
  TagIcon,  // Cambiado desde DeviceMobileIcon
  MapPinIcon,  // Cambiado desde LocationMarkerIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

import { useTranslation } from 'react-i18next';

const BenefitData = () => {
  const { t } = useTranslation("translation");

  const benefitOne = {
    title: t("benefitOne.title"),
    desc: t("benefitOne.desc"),
    image: benefitOneImg,
    bullets: [
      {
        title: t("benefitOne.title1"),
        desc: t("benefitOne.desc1"),
        icon: <HeartIcon />,
      },
      {
        title: t("benefitOne.title2"),
        desc: t("benefitOne.desc2"),
        icon: <UsersIcon />,
      },
      {
        title: t("benefitOne.title3"),
        desc: t("benefitOne.desc3"),
        icon: <ChartBarIcon />,
      },
    ],
  };

  const benefitTwo = {
    title: t("benefitTwo.title"),
    desc: t("benefitTwo.desc"),
    image: benefitTwoImg,
    bullets: [
      {
        title: t("benefitTwo.title1"),
        desc: t("benefitTwo.desc1"),
        icon: <TagIcon />,
      },
      {
        title: t("benefitTwo.title2"),
        desc: t("benefitTwo.desc2"),
        icon: <MapPinIcon />,
      },
      {
        title: t("benefitTwo.title3"),
        desc: t("benefitTwo.desc3"),
        icon: <ChartBarIcon />,
      },
    ],
  };

  return { benefitOne, benefitTwo };
};

export default BenefitData;
