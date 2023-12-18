import Testimonial from "./testimonial";
import emilyPhoto from '../assets/image-emily.jpg'

export default function TestimonialContainer (){
    return(
        <section>
            <h2>Client testimonials</h2>
            <div>
                <Testimonial
                img={emilyPhoto}
                Testimonial=''
                name=''
                position=''
                />
            </div>
        </section>
    )
}