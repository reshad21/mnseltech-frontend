import Image from "next/image";
import quotes from "../../../../public/images/quoets.png";
import Container from "../Container";
const Testimonial = () => {
  return (
    <Container>
      <div className="px-4 relative">
        <div className="absolute top-[-20%] right-3">
          <Image src={quotes} width={199} height={183} alt="quotes" />
        </div>
        <h2 className="max-w-[891px] font-syne mb-12">Testimonial</h2>
        <div className="testimonial-card">
          <p>
            “Aaronn was fantastic to work with from start to finish. We were
            looking for a simple, stand-out logo and he delivered. I tried
            designing the logo myself thinking I wouldn’t need to pay the money
            for a professional graphic designer but I was very wrong. Working
            with Aaronn was worth every penny and was surprisingly affordable! I
            remember him saying simplicity is key to a successful logo and boy
            he was right. I can’t thank Aaronn enough for his effort and
            professionalism. I would recommend him to anyone looking for a
            design!”
          </p>
          <div className="relative my-7">
            <p className="text-2xl font-syne">-Martin lee</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
