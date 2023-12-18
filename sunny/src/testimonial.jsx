export default function Testimonial({img, Testimonial, name, position}){
    return(
        <div>
            <img src={img} alt="Foto" />
            <p>{Testimonial}</p>
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    )
}