import React, { useState } from 'react';
import { Service, Doctor, Testimonial, AppointmentRequest } from '../types';
import { Card } from './common/Card';
import { Button } from './common/Button';
import { StethoscopeIcon, HeartIcon, AmbulanceIcon, BrainIcon } from './icons/Icons';
import { BookingModal } from './BookingModal';
import { useToast } from '../hooks/useToast';

const services: Service[] = [
  {
    icon: <AmbulanceIcon className="h-12 w-12 text-primary" />,
    title: 'Emergency Care',
    description: '24/7 emergency services with state-of-the-art equipment and a dedicated team of specialists.',
  },
  {
    icon: <HeartIcon className="h-12 w-12 text-primary" />,
    title: 'Cardiology',
    description: 'Comprehensive heart care, from preventive screenings to advanced cardiac surgery.',
  },
  {
    icon: <StethoscopeIcon className="h-12 w-12 text-primary" />,
    title: 'Primary Care',
    description: 'Personalized primary care for all ages, focusing on long-term health and wellness.',
  },
  {
    icon: <BrainIcon className="h-12 w-12 text-primary" />,
    title: 'Neurology',
    description: 'Expert diagnosis and treatment for disorders of the nervous system.'
  }
];

const doctors: Doctor[] = [
  {
    imageUrl: 'https://picsum.photos/400/400?random=1',
    name: 'Dr. Evelyn Reed',
    specialty: 'Cardiologist',
    bio: 'With over 20 years of experience, Dr. Reed is a leading expert in cardiac care and research.'
  },
  {
    imageUrl: 'https://picsum.photos/400/400?random=2',
    name: 'Dr. Samuel Chen',
    specialty: 'Neurologist',
    bio: 'Dr. Chen specializes in complex neurological conditions and is renowned for his patient-centric approach.'
  },
  {
    imageUrl: 'https://picsum.photos/400/400?random=3',
    name: 'Dr. Maria Garcia',
    specialty: 'Pediatrician',
    bio: 'A friendly and compassionate pediatrician dedicated to the health and well-being of children.'
  }
];

const testimonials: Testimonial[] = [
    {
        quote: "The care I received at MediCare+ was exceptional. The staff were attentive, and the facilities are top-notch. I felt safe and well-cared for throughout my stay.",
        author: "John Doe",
        location: "Wellness City"
    },
    {
        quote: "Dr. Reed and her team saved my life. Their expertise and compassion are unmatched. I am forever grateful to everyone at this incredible hospital.",
        author: "Jane Smith",
        location: "Metropolis"
    }
];

const HeroSection = ({ onBookAppointment }: { onBookAppointment: () => void }) => (
    <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/600')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary-dark/70 to-transparent"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-2xl text-shadow-lg">
                Compassionate Care, Advanced Medicine.
            </h1>
            <p className="mt-4 text-xl max-w-xl text-blue-100">
                Welcome to MediCare+, where your health and well-being are our highest calling.
            </p>
            <div className="mt-8">
                <Button variant="secondary" className="px-8 py-4 text-lg !font-bold" onClick={onBookAppointment}>
                    Book an Appointment
                </Button>
            </div>
        </div>
    </div>
);

const ServicesSection = () => (
    <section id="services" className="py-20 bg-base-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-text-DEFAULT mb-4">Our Services</h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto mb-12">We offer a wide range of specialized medical services to meet your needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map(service => (
                    <Card key={service.title} className="text-center p-8">
                        <div className="flex justify-center mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-text-DEFAULT mb-2">{service.title}</h3>
                        <p className="text-text-light">{service.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

const DoctorsSection = () => (
    <section id="doctors" className="py-20 bg-base-200">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-text-DEFAULT mb-4">Meet Our Doctors</h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto mb-12">Our team of dedicated and experienced professionals is here to provide you with the best care.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {doctors.map(doctor => (
                    <Card key={doctor.name} className="flex flex-col">
                        <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-64 object-cover" />
                        <div className="p-6 flex-grow flex flex-col text-left">
                            <h3 className="text-2xl font-bold text-text-DEFAULT">{doctor.name}</h3>
                            <p className="text-secondary font-semibold mb-4">{doctor.specialty}</p>
                            <p className="text-text-light flex-grow">{doctor.bio}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);


const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 bg-base-100">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-text-DEFAULT text-center mb-12">What Our Patients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-8 bg-base-200">
                         <p className="text-lg text-text-light italic mb-6">"{testimonial.quote}"</p>
                         <div className="text-right">
                             <p className="font-bold text-text-DEFAULT">{testimonial.author}</p>
                             <p className="text-text-light">{testimonial.location}</p>
                         </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);


export const HomePage: React.FC = () => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const { addToast } = useToast();

    const handleBookAppointment = (details: AppointmentRequest) => {
        console.log("Appointment Details:", details);
        setIsBookingModalOpen(false);
        addToast(`Appointment for ${details.name} requested successfully!`, 'success');
    };

    return (
        <main>
            <HeroSection onBookAppointment={() => setIsBookingModalOpen(true)} />
            <ServicesSection />
            <DoctorsSection />
            <TestimonialsSection />
            <BookingModal 
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                onSubmit={handleBookAppointment}
                doctors={doctors}
            />
        </main>
    );
};