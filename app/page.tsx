import InfiniteScroll from "@/components/InfiniteScroll";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImagesSlider } from "@/components/ui/images-slider";
import {
  ArrowRight,
  ChevronDown,
  Building,
  Award,
  TrendingUp,
  Search,
  Facebook,
  Linkedin,
  Mail,
  LocateIcon,
  PinIcon,
  Clock,
  LocateFixedIcon,
} from "lucide-react";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  const images = [
    "images/About img (1).jpg",
    "images/About img (2).jpg",
    "images/About img (3).jpg",
    "images/About img (4).jpg",
  ];
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}

        <section
          className="relative w-full min-h-screen flex items-center bg-cover bg-center text-white"
          style={{
            backgroundImage: "url('/images/hero bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Wisdom Corner Consultancy PLC
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
                  Specialized in Management, Economy, Business and Investment
                  Development
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  asChild
                  className="text-white bg-purple-900 hover:bg-white border-none
                hover:text-purple-900"
                  variant="outline"
                >
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}

        <section
          id="about"
          className="w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900 mb-8 text-center">
              About Us
            </h2>
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <Card className="bg-white hover:shadow-xl transition-all duration-300 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">
                      Who We Are
                    </h3>
                    <p className="text-gray-600">
                      Wisdom Corner Consulting is a company specialized in
                      Management, economy, business and investment development.
                      We operate for clients who require adequate responses,
                      offering personalized services for the development of
                      effective business operations.
                    </p>
                    <p className="text-gray-600 mt-4">
                      We stand as the ideal partner for any company that wants
                      to interface with business opportunities worldwide, even
                      if located in geographical areas known as hostile. Our
                      main aim is to enable our customers to operate in a safer
                      environment. Our professionalism is put at the service of
                      your business; we work to protect your business.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white hover:shadow-xl transition-all duration-300 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">
                      Our History
                    </h3>
                    <p className="text-gray-600">
                      In 2020, our CEO founded the first consulting company. The
                      company is registered in Oromia Regional State and its
                      head office is found in Adama City Administration, near
                      Ethiopian Electric Utility Adama branch, Adama AMG MALL,
                      F-807. The company has been growing quickly since its
                      inception.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative">
                <ImagesSlider
                  className="h-[32rem] rounded-lg"
                  overlay={false}
                  images={images}
                >
                  <div></div>
                </ImagesSlider>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-200 rounded-full z-[-1]"></div>
              </div>
            </div>
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                Our Vision and Mission
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Vision:</strong> To be the leading consultancy firm in
                Ethiopia, known for our expertise, integrity, and commitment to
                client success.
              </p>
              <p className="text-gray-600">
                <strong>Mission:</strong> "Our mission is to assist our clients
                in achieving their objectives, while operating in an
                increasingly complex environment, moving and sometimes adverse,
                allowing an adequate risk management, supporting them through a
                wide range of personalized services and tailor-made solutions"
              </p>
            </div>
          </div>
        </section>

        {/* OUR SERVICES */}

        <section
          id="services"
          className="w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 bg-purple-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900 mb-12 text-center">
              Our Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Training"
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lightbulb className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="text-xl font-bold text-purple-800">
                      Training
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We offer comprehensive training programs for both corporate
                    companies and individuals.
                  </p>
                  <h4 className="font-semibold text-purple-700 mb-2">
                    For Individuals:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Digital Marketing</li>
                    <li>Graphics Design</li>
                    <li>Video Editing</li>
                    <li>Communication and Sales Skill</li>
                  </ul>
                  <h4 className="font-semibold text-purple-700 mb-2">
                    For Corporate Companies:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Customer Service and Communication Skill</li>
                    <li>Advanced Sales Skill</li>
                    <li>Positive Attitude Change</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Training"
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Search className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="text-xl font-bold text-purple-800">
                      Research
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We conduct thorough research to provide you with valuable
                    insights for informed decision-making. Our research
                    capabilities cover various aspects of business and
                    economics.
                  </p>
                  <p className="text-gray-600">
                    Cultural awareness with a deep understanding of local
                    nuance, and political and economic context are just some of
                    the keys we use to ensure effective and safe operations.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Training"
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="text-xl font-bold text-purple-800">
                      Consultancy
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our team of experienced professionals have the know-how and
                    capability to effectively identify, evaluate and implement
                    business operations covering a wide range of industries and
                    their sectors.
                  </p>
                  <p className="text-gray-600">
                    We provide comprehensive consulting services, including
                    operations management and risk management services to our
                    clients in all environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}

        <section className="w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900 mb-12 text-center">
              Why Choose Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Practical training Methodology",
                  icon: "🎓",
                  image:
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                },
                {
                  title: "Well experienced and expert staff",
                  icon: "👥",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                },
                {
                  title: "Customized and tailored approach",
                  icon: "🎯",
                  image:
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                },
                {
                  title: "Physical and mental exercises",
                  icon: "💪",
                  image:
                    "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
                },
                {
                  title: "Post training coaching and mentorship",
                  icon: "🤝",
                  image:
                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                },
                {
                  title: "Certification",
                  icon: "🏆",
                  image:
                    "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        Our {item.title.toLowerCase()} ensures that you receive
                        the best possible service and results.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-purple-900 text-white p-10 rounded-lg hover:scale-110 hover:-rotate-1 shadow-2xl transition-all duration-200">
              <h3 className="text-2xl font-bold mb-4">Our Ethics</h3>
              <p className="mb-4">
                In a market that is increasingly competitive and globalized, the
                ethical dimension is a distinctive and corroborating element, a
                moral obligation for companies who aspire to leadership. Since
                its establishment, Wisdom Corner Consulting has developed a code
                of ethics to which employees are inspired every day:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Only with respect for the person and for his work can
                  excellence be reached.
                </li>
                <li>
                  Excellence and success do not depend on the contribution of
                  the individual, but you will get only through the joint
                  efforts of a group.
                </li>
                <li>
                  "Sharing knowledge" because only through the mutual exchange
                  of ideas is value created.
                </li>
                <li>
                  Rewarding diversity as international and multicultural
                  experiences enrich.
                </li>
                <li>
                  Be "customer oriented" means creating specific and customized
                  answers to customer needs for each company.
                </li>
                <li>
                  "Being there" to establish a long-term relationship with the
                  customer.
                </li>
                <li>
                  Innovate to compete, thanks to new technologies and continuous
                  professional updating.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* OUR TEAM */}

        <section
          id="team"
          className="w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-100 to-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900 mb-8 text-center">
              Our Team
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our team is selected for its complementary and broad range of
              response skills consisting of economists, management experts,
              operations management specialists, investment experts, and finance
              professionals.
            </p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Adem Ali",
                  title: "Founder and CEO ",
                  image: "/images/Adem Ali.jpg",
                },
                {
                  name: "Elham Nasir",
                  title: "Marketing Manager",
                  image: "/images/placeholder1.png",
                },
                {
                  name: "Yosef Tadesse",
                  title: "Social Media Manager",
                  image: "/images/placeholder1.png",
                },
                {
                  name: "Ayu Teferi",
                  title: "Finance Manager",
                  image: "/images/placeholder1.png",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 group"
                >
                  <div className="relative overflow-hidden rounded-full">
                    <Image
                      alt={member.title}
                      className="object-cover w-48 h-48 transition-transform duration-300 group-hover:scale-110"
                      height="192"
                      src={member.image}
                      style={{
                        aspectRatio: "192/192",
                        objectFit: "cover",
                      }}
                      width="192"
                    />
                  </div>
                  <h2 className="font-semibold text-xl text-purple-900">
                    {member.name}
                  </h2>
                  <h3 className="font-medium text-purple-800 text-lg">
                    {member.title}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-white p-6 rounded-lg  hover:scale-110 hover:-rotate-1 shadow-2xl transition-all duration-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                Our Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                We are structured to provide a comprehensive suite of consulting
                services, including operations management and risk management
                services to our clients in all environments.
              </p>
              <p className="text-gray-600">
                These capabilities and services are tailored to each client and
                each requirement as part of a turnkey solution. Wisdom Corner
                consulting team of experienced professionals have the know-how
                and capability to effectively identify, evaluate and implement
                business operations covering a wide range of industries and
                their sectors.
              </p>
            </div>
          </div>
        </section>

        {/* CLIENTS*/}

        <section
          id="clients"
          className="w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 bg-purple-900 text-white"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Our Clients
            </h2>
            <p className="text-center mb-12 max-w-2xl mx-auto">
              We are proud to have worked with a diverse range of clients across
              various industries. Our client base includes both corporate
              companies and individuals who have benefited from our training and
              consultancy services.
            </p>

            <InfiniteScroll />
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Our Satisfied Customers
              </h3>
              <p>We look forward to working with you!</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900 mb-8 text-center">
              Contact Us
            </h2>
            <div className="bg-purple-900 text-white p-6 rounded-lg shadow-xl max-w-2xl mx-auto shadow-black/60">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                  <a
                    href="mailto:adem.ali2016@gmail.com"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    adem.ali2016@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Facebook className="w-5 h-5 text-white" aria-hidden="true" />
                  <a
                    href="https://www.facebook.com/profile.php?id=100083167969264&mibextid=ZbWKwL"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    Follow us on Facebook
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-white" aria-hidden="true" />
                  <a
                    href="https://www.linkedin.com/in/adem-ali-970291110?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-purple-600"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <hr className="my-6" />
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <PinIcon className="w-5 h-5 text-white" />
                  <h4 className="text-lg font-semibold ">Office Location</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="leading-relaxed text-lg">
                    Adama City Administration, near Ethiopian Electric Utility
                    Adama branch, Adama AMG MALL, F-807
                  </p>

                  <Link
                    href="https://maps.app.goo.gl/3tNfG3wEopUZMUcLA"
                    className="flex items-center  gap-2 mb-2 bg-white text-purple-900 rounded-md p-2 max-w-fit hover:bg-purple-100 hover:text-purple-900"
                  >
                    <LocateFixedIcon />
                    Show on Map
                  </Link>
                </div>
              </div>
              <hr className="my-6" />
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Clock />
                  <h4 className="text-lg font-semibold">Business Hours</h4>
                </div>
                <p className="leading-relaxed text-lg">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-purple-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm flex">
              <Image
                alt="logo"
                src="/images/logo.jpg"
                height={24}
                width={24}
                className="mr-2"
              />
              © 2023 Wisdom Corner Consultancy PLC. All rights reserved.
            </p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <a
                href="mailto:adem.ali2016@gmail.com"
                className="text-sm hover:underline"
              >
                Email
              </a>
              <Link
                href="https://www.facebook.com/profile.php?id=100083167969264&mibextid=ZbWKwL"
                className="text-sm hover:underline"
              >
                Facebook
              </Link>
              <Link
                href="https://www.linkedin.com/in/adem-ali-970291110?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-sm hover:underline"
              >
                LinkedIn
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
