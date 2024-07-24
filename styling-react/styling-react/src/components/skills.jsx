import Card from "./card"
import computer from "../images/computer.svg"
import mobile from'../images/smartphone.svg'
import wordpress from '../images/wordpress.svg'
import shop from '../images/ecommerce.svg'
export default function skills(){
    return(
        <div className="flex gap-4 mt-40 flex-wrap min-w-1/2 justify-center">
            <Card icon={computer} title='Web Design' description='Transforming ideas to visually stunning digital experience'/>
            <Card icon={mobile} title='Web Design' description='Transforming ideas to visually stunning digital experience'/>
            <Card icon={wordpress} title='Web Design' description='Transforming ideas to visually stunning digital experience'/>
            <Card icon={shop} title='Web Design' description='Transforming ideas to visually stunning digital experience'/>
        </div>
    )
}