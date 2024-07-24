export default function card(props){
    return(
        <div className="border rounded-2xl p-8 bg-neutral-950 w-80">
            <div className="w-max p-4 flex justify-center rounded-full bg-neutral-600"><img src={props.icon} alt="web design"/></div>
            <div>
                <h3 className="text-xl font-medium mt-8">{props.title}</h3>
                <p className="font-thin mt-2">{props.description}</p>
            </div>
        </div>
    )
}