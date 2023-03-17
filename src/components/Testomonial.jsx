import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget libero sed sapien consectetur porta vel eu massa.",
      name: "John Doe",
      jobTitle: "CEO, Company Name",
    },
    {
      id: 2,
      quote:
        "Nullam a tellus ac lectus fermentum molestie. Etiam feugiat orci ut nunc tincidunt ullamcorper.",
      name: "Jane Doe",
      jobTitle: "CTO, Company Name",
    },
    {
      id: 3,
      quote:
        "Sed venenatis risus sit amet dui luctus, at rhoncus leo interdum. Donec gravida elit a turpis tincidunt, in sagittis dolor dapibus.",
      name: "John Smith",
      jobTitle: "COO, Company Name",
    },
    {
      id: 4,
      quote:
        "Nulla egestas quam at eros posuere fringilla. In bibendum vehicula arcu, nec maximus metus aliquet id.",
      name: "Jane Smith",
      jobTitle: "CFO, Company Name",
    },
    {
      id: 5,
      quote:
        "Maecenas rhoncus consectetur eros, vel scelerisque sem lacinia nec. In laoreet dui vitae erat lobortis, sed posuere elit pharetra.",
      name: "John Doe",
      jobTitle: "CEO, Company Name",
    },
    {
      id: 6,
      quote:
        "Suspendisse accumsan lorem id mi maximus, quis congue arcu tristique. Curabitur iaculis imperdiet nibh, sed molestie lectus tincidunt quis.",
      name: "Jane Doe",
      jobTitle: "CTO, Company Name",
    },
    {
      id: 7,
      quote:
        "Duis fringilla metus non sapien volutpat, vel blandit sapien tincidunt. Sed blandit urna ut turpis rhoncus molestie.",
      name: "John Smith",
      jobTitle: "COO, Company Name",
    },
    {
      id: 8,
      quote:
        "Morbi nec est convallis, tristique purus a, hendrerit justo. Donec vehicula lorem in dolor aliquam, id sagittis urna aliquet.",
      name: "Jane Smith",
      jobTitle: "CFO, Company Name",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, // This line will hide the arrows
  };

  const handleMouseEnter = () => {
    document.querySelector(".slick-slider").slickPause();
  };

  const handleMouseLeave = () => {
    document.querySelector(".slick-slider").slickPlay();
  };

  return (
    <div className="w-full px-4 py-12 bg-[#ffeddb] ">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-orange-600 text-center mb-8">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <p className="text-gray-700 font-bold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.jobTitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
