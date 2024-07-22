import React from "react";
import HeroSection from "./pageSections/HeroSection";
import FeatureSection from "./pageSections/FeatureSection";
import AboutSection from "./pageSections/AboutSection";
import ServiceSection from "./pageSections/ServiceSection";
import FAQSection from "./pageSections/FAQSection";
import PricingSection from "./pageSections/PricingSection";
import BlogSection from "./pageSections/BlogSection";
import ContactSection from "./pageSections/ContactSection";

const HomeSection = ()=> {
    return(
        <div>
            <HeroSection />
            <FeatureSection />
            {/*Add more components here */}
            <AboutSection />
            <ServiceSection />
            <PricingSection />
            <FAQSection />
            <BlogSection />
            <ContactSection />
            {/* <FooterSection />                                                                        */}
             {/* <TestimonialSection /> */}
            {/* <TeamSection /> */}
        </div>
    )
}

export default HomeSection;