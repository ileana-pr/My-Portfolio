import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, ExternalLink, Code2, Globe, MessageSquare, GraduationCap, Award } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 animate-gradient" />
        <div className="absolute inset-0 dot-pattern" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">Available for opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Ileana Perez
          </h1>

          <p className="text-2xl md:text-3xl font-mono text-muted-foreground mb-4">Computer Science Student</p>

          <p className="text-xl md:text-2xl text-primary font-medium mb-8">Web3 Developer & AI Enthusiast</p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about decentralized systems, artificial intelligence, and building innovative solutions that
            bridge traditional software with cutting-edge web3 applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2 font-medium">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="gap-2 font-medium bg-transparent">
              <ExternalLink className="w-4 h-4" />
              View Links
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science student at the University of Mary Washington with a deep passion for emerging
                technologies, particularly in AI and blockchain. My journey spans from traditional software development
                to cutting-edge web3 applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience in community management, technical support, and development, I bring a unique
                perspective that bridges technical expertise with strong communication skills.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-lg">Programming</h3>
                </div>
                <p className="text-muted-foreground">Python, Java, ElizaOS, HTML, SQL</p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-lg">Blockchain</h3>
                </div>
                <p className="text-muted-foreground">DAOs, NFTs, DeFi, Metaverse</p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-lg">Community</h3>
                </div>
                <p className="text-muted-foreground">Moderation, Support, Education</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Recent Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group p-8 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="font-mono">
                  2025
                </Badge>
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">GreenThumb</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                AI cultivation and urban farming assistant. Top 10 in AI community track at ETH Denver 2025 hackathon.
              </p>
              <div className="flex gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">AI</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Agriculture</Badge>
              </div>
            </Card>

            <Card className="group p-8 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="font-mono">
                  2024
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">FCC Bot</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                AI agent assisting the US Federal Communications Commission to improve Emergency Alert System safety and
                reliability.
              </p>
              <div className="flex gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">AI</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Government</Badge>
              </div>
            </Card>

            <Card className="group p-8 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="font-mono">
                  2024
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                ElizaOS Contributions
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                News Plugin for fetching latest topics and WSL Installation Guide for Windows developers.
              </p>
              <div className="flex gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Open Source</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Documentation</Badge>
              </div>
            </Card>

            <Card className="group p-8 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="font-mono">
                  Ongoing
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                The Coding Playbook
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Personal collection of reference guides and cheat sheets for various development topics.
              </p>
              <div className="flex gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Education</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Reference</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-secondary/30">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-0.5 bg-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Education & Training</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Formal Education</h3>
              </div>

              <Card className="p-6 border-l-4 border-l-primary">
                <h4 className="text-xl font-bold mb-2">University of Mary Washington</h4>
                <p className="text-primary font-medium mb-2">B.S., Computer Science</p>
                <p className="text-muted-foreground mb-4">2023 - 2026</p>
                <div className="flex gap-2">
                  <Badge variant="outline">Chi Beta Phi</Badge>
                  <Badge variant="outline">Phi Eta Sigma</Badge>
                </div>
              </Card>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Bootcamps & Training</h3>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Vibe Coding 101", date: "Apr 2025" },
                  { name: "EVM Bootcamp", date: "Nov 2024" },
                  { name: "SheFi Scholar", date: "Aug 2024" },
                  { name: "AI Foundations Bootcamp", date: "Jun 2024" },
                  { name: "Camp BUIDL", date: "Mar 2024" },
                ].map((bootcamp, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-transparent hover:border-primary/20"
                  >
                    <span className="font-medium">{bootcamp.name}</span>
                    <Badge variant="outline" className="font-mono">
                      {bootcamp.date}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Let's Connect</h2>
          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            I'm always interested in new opportunities, collaborations, and conversations about web3, AI, and
            technology.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2 font-medium">
              <Mail className="w-4 h-4" />
              Email Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 font-medium bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ExternalLink className="w-4 h-4" />
              All Links
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ileana Perez. Built with passion for web3 and AI.
          </p>
        </div>
      </footer>
    </div>
  )
}
