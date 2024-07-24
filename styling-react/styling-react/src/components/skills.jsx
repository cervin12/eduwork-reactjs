import Card from "./card"
import computer from "../images/computer.svg"
import mobile from'../images/smartphone.svg'
import wordpress from '../images/wordpress.svg'
import shop from '../images/ecommerce.svg'
export default function skills(){
    return(
        <div className="flex gap-4 mt-40 flex-wrap min-w-1/2 justify-center">
            <Card icon={computer} title='Web Development' description='Transforming ideas to visually stunning digital experience'/>
            <Card icon={mobile} title='Mobile Development' description='Enhancing user engagement with seamless and intuitive design'/>
            <Card icon={wordpress} title='Wordpres Web Builder' description='Evolate your ideas quickly and amaze your desire'/>
            <Card icon={shop} title='Eccomerce Website' description='Just take in easy your shop, create your own market'/>
        </div>
    )
}