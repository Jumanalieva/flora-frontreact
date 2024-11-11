import LandingPage from '../pages/LandingPage';
import PlantMemoir from '../pages/PlantMemoir';
import AI_Botanist from '../pages/AI_Botanist'
import IndustryDisplay from '../pages/IndustryDisplay'
import CulinaryDisplayPage from '../pages/CulinaryDisplay'


interface RouteType {
    path: string;
    component: React.ComponentType<any>;
    name: string;
}

const routes: RouteType[] = [
    {
      path: "/",
      component: LandingPage,
      name: "Landing Page",
    },
    {
        path: "/plant",
        component: PlantMemoir,
        name: "Plant Memoir",
      },
      {
        path: "/botanistAI",
        component: AI_Botanist,
        name: "AI Botanist",
      },
      {
        path: "/industry",
        component: IndustryDisplay,
        name: "Industry",
      },
      {
        path: "/culinary",
        component: CulinaryDisplayPage,
        name: "Culinary",
      }
    // Add other pages here as needed
];

export default routes;
