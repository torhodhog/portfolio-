import { GanttChartSquare, Blocks, Gem} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "./ui/card";

const servicesData = [
   {
      icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
      title:'Web Design',
      description: 'Building websites and web applications that are fast, secure, and easy to use.',
   },
   {
      icon: <Blocks size={72} strokeWidth={0.8}/>,
      title:'Web Development',
      description: 'Building websites and web applications that are fast, secure, and easy to use.',
   },
   {
      icon: <Gem size={72} strokeWidth={0.8}/>,
      title:'App Development',
      description: 'Building websites and web applications that are fast, secure, and easy to use. Learn more about my app development services.',
   },
]

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">
         <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
         {/* GRID ITEMS */}
         <div>
            {servicesData.map((item, index) => {
               return <Card key={index}>Card</Card>
            })}
         </div>
      </div>
    </section>
  )
}

export default Services
