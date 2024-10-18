import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Eyebrow, Sparkles, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 md:px-6 lg:px-8">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-primary">
            Brow Beauty Studio
          </div>
          <Button asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Best Brows For Best Moments
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Enhance your natural beauty with our expert eyebrow services. Book
              your appointment today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/book">Schedule Now</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eyebrow,
                title: 'Eyebrow Care',
                description: 'Expert shaping and grooming',
              },
              {
                icon: Sparkles,
                title: 'Eyebrow Art',
                description: 'Creative designs and tinting',
              },
              {
                icon: Clock,
                title: 'Add-Ons',
                description: 'Complementary services',
              },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  Enhance your experience with our {service.title.toLowerCase()}{' '}
                  services.
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Choose the Glamour</h2>
              <p className="text-muted-foreground mb-6">
                Our expert beauticians are here to help you achieve the perfect
                look. Whether you're going for a natural enhancement or a bold
                statement, we've got you covered.
              </p>
              <ul className="space-y-2">
                <li>• Customized shapes to complement your face</li>
                <li>• Long-lasting tinting options</li>
                <li>• Gentle and precise hair removal techniques</li>
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful eyebrows"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Eyebrow Shaping',
                services: [
                  { name: 'Classic Eyebrow Shaping', price: '$25' },
                  { name: 'Precision Waxing', price: '$30' },
                  { name: 'Threading', price: '$28' },
                  { name: 'Microblading Consultation', price: '$50' },
                ],
              },
              {
                title: 'Eyebrow Enhancements',
                services: [
                  { name: 'Eyebrow Tinting', price: '$20' },
                  { name: 'Henna Brows', price: '$40' },
                  { name: 'Brow Lamination', price: '$60' },
                  { name: 'Lash Lift & Tint', price: '$80' },
                ],
              },
            ].map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex justify-between">
                      <span>{service.name}</span>
                      <span>{service.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-secondary mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Brow Beauty Studio</h3>
              <p className="text-muted-foreground">
                Enhancing your natural beauty, one brow at a time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Services', 'About Us', 'Contact', 'Book Appointment'].map(
                  (link, index) => (
                    <li key={index}>
                      <Link href={`/${link.toLowerCase().replace(' ', '-')}`}>
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-muted-foreground">
                123 Beauty Lane
                <br />
                Glamour City, ST 12345
                <br />
                Phone: (555) 123-4567
                <br />
                Email: info@browbeautystudio.com
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-muted-foreground">
              &copy; 2023 Brow Beauty Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
