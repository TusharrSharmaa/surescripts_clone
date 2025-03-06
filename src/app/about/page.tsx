import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Award, Clock, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Learn more about our company, our mission, and the team behind our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Our Team"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
                <p className="text-muted-foreground md:text-lg">
                  Founded in 2015, MyWebsite began with a simple mission: to help businesses succeed in the digital
                  world. What started as a small team of passionate developers has grown into a full-service digital
                  agency.
                </p>
                <p className="text-muted-foreground md:text-lg">Over the years, we have worked with hundreds of clients across various industries, helping them build their online presence and achieve their business goals. Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                These core principles guide everything we do.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Client-Focused",
                description: "We put our clients' needs first and work closely with them to achieve their goals.",
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from design to development to support.",
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Timeliness",
                description: "We respect deadlines and deliver projects on time, every time.",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
                <div className="p-2">{value.icon}</div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-center text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                The talented individuals who make the magic happen.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Williams",
                role: "Lead Designer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Brown",
                role: "Senior Developer",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Davis",
                role: "Marketing Specialist",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Wilson",
                role: "Project Manager",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jessica Taylor",
                role: "Content Strategist",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <Image
                  src={member.image || "/placeholder.svg"}
                  width={200}
                  height={200}
                  alt={member.name}
                  className="rounded-full object-cover h-40 w-40"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join Our Team</h2>
              <p className="max-w-[900px] md:text-xl">
                Interested in working with us? We are always looking for talented individuals to join our team.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

