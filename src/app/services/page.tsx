import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Palette, LineChart } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We offer a wide range of digital services to help your business grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:gap-16">
            {/* Web Development */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Code className="h-16 w-16 text-primary" />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Web Development</h2>
                  <p className="text-muted-foreground md:text-lg">
                    We build responsive, high-performance websites and web applications that look great on any device.
                  </p>
                  <ul className="space-y-2 mt-4">
                    {[
                      "Custom website development",
                      "E-commerce solutions",
                      "Content management systems",
                      "Web application development",
                      "API development and integration",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center lg:order-last">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Palette className="h-16 w-16 text-primary" />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">UI/UX Design</h2>
                  <p className="text-muted-foreground md:text-lg">
                    We create beautiful, intuitive user interfaces and experiences that convert visitors into customers.
                  </p>
                  <ul className="space-y-2 mt-4">
                    {[
                      "User interface design",
                      "User experience design",
                      "Wireframing and prototyping",
                      "Brand identity design",
                      "Mobile app design",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <LineChart className="h-16 w-16 text-primary" />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Digital Marketing</h2>
                  <p className="text-muted-foreground md:text-lg">
                    We help you reach your target audience and grow your business with effective digital marketing
                    strategies.
                  </p>
                  <ul className="space-y-2 mt-4">
                    {[
                      "Search engine optimization (SEO)",
                      "Pay-per-click advertising (PPC)",
                      "Social media marketing",
                      "Content marketing",
                      "Email marketing",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Process</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We follow a proven process to ensure the success of your project.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We learn about your business, goals, and requirements.",
              },
              {
                step: "2",
                title: "Planning",
                description: "We create a detailed plan and timeline for your project.",
              },
              {
                step: "3",
                title: "Execution",
                description: "We build your project according to the agreed specifications.",
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "We launch your project and provide ongoing support.",
              },
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold">{process.title}</h3>
                <p className="text-center text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pricing Plans</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Choose the plan that best fits your needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "$999",
                description: "Perfect for small businesses just getting started.",
                features: [
                  "5-page responsive website",
                  "Basic SEO setup",
                  "Contact form",
                  "Mobile-friendly design",
                  "1 month of support",
                ],
              },
              {
                name: "Professional",
                price: "$1,999",
                description: "Ideal for growing businesses with specific needs.",
                features: [
                  "10-page responsive website",
                  "Advanced SEO setup",
                  "Contact form with CRM integration",
                  "Mobile-friendly design",
                  "E-commerce functionality (up to 50 products)",
                  "3 months of support",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "$4,999",
                description: "For established businesses with complex requirements.",
                features: [
                  "Unlimited pages",
                  "Comprehensive SEO strategy",
                  "Custom functionality",
                  "E-commerce with unlimited products",
                  "Custom integrations",
                  "12 months of support",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col rounded-lg border p-6 ${
                  plan.highlighted ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-background"
                }`}
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className={plan.highlighted ? "text-primary-foreground" : "text-muted-foreground"}>
                    {plan.description}
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <p className={plan.highlighted ? "text-primary-foreground" : "text-muted-foreground"}>
                    One-time payment
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6" variant={plan.highlighted ? "secondary" : "default"}>
                  <Link href="/contact">Get Started</Link>
                </Button>
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl">
                Contact us today to discuss your project and how we can help you achieve your goals.
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

