import { sections } from "@/utils/Items"; 
import Individual from "./Individual";

export default function Section() {
    return (
        <div className="flex flex-col mt-32 gap-4">
            {sections.map((item, index) => (
                <Individual key={index} item={item} idx={index}/>
            ))}
        </div>
    );
}
