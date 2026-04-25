import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Button, OutlineButton, TextButton, IconButton, DownloadButton } from './components/atoms'
import { Card } from './components/molecules'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="polestar-container">
        <section id="center">
          <div className="hero">
            <img src={heroImg} alt="Hero" className="base" />
            <img src={viteLogo} alt="Vite" className="vite" />
            <img src={reactLogo} alt="React" className="framework" />
          </div>

          <h1>Emotion Design System</h1>

          {/* Filled Buttons */}
          <section>
            <h2 style={{ color: 'var(--theme-text-primary)', marginBottom: 'var(--spacing-lg)' }}>Filled Buttons</h2>
            <div className="polestar-stack">
              <Button 
                variant="primary" 
                size="medium"
                onClick={() => setCount((count) => count + 1)}
              >
                Count is {count}
              </Button>
              
              <Button 
                variant="secondary" 
                size="medium"
              >
                Get Started
              </Button>

              <Button 
                variant="accent" 
                size="large"
              >
                Explore Components
              </Button>
            </div>
          </section>

          {/* Outline Buttons */}
          <section style={{ marginTop: 'var(--spacing-xxl)' }}>
            <h2 style={{ color: 'var(--theme-text-primary)', marginBottom: 'var(--spacing-lg)' }}>Outline Buttons</h2>
            <div className="polestar-stack">
              <OutlineButton 
                variant="primary" 
                size="medium"
              >
                Cancel Action
              </OutlineButton>
              
              <OutlineButton 
                variant="secondary" 
                size="medium"
              >
                Secondary Action
              </OutlineButton>

              <OutlineButton 
                variant="danger" 
                size="large"
              >
                Dangerous Action
              </OutlineButton>
            </div>
          </section>

          {/* Text Buttons */}
          <section style={{ marginTop: 'var(--spacing-xxl)' }}>
            <h2 style={{ color: 'var(--theme-text-primary)', marginBottom: 'var(--spacing-lg)' }}>Text Buttons</h2>
            <div className="polestar-stack">
              <TextButton 
                variant="primary" 
                size="medium"
              >
                Learn More
              </TextButton>
              
              <TextButton 
                variant="secondary" 
                size="medium"
              >
                Read Documentation
              </TextButton>

              <TextButton 
                variant="muted" 
                size="small"
              >
                Skip for now
              </TextButton>
            </div>
          </section>

          {/* Icon Buttons */}
          <section style={{ marginTop: 'var(--spacing-xxl)' }}>
            <h2 style={{ color: 'var(--theme-text-primary)', marginBottom: 'var(--spacing-lg)' }}>Icon Buttons</h2>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
              <IconButton 
                icon="⚙️"
                ariaLabel="Settings"
                variant="primary"
                size="medium"
              />
              
              <IconButton 
                icon="🔔"
                ariaLabel="Notifications"
                variant="secondary"
                size="medium"
              />

              <IconButton 
                icon="✕"
                ariaLabel="Close"
                variant="ghost"
                size="small"
              />

              <IconButton 
                icon="✔️"
                ariaLabel="Confirm"
                variant="secondary"
                size="large"
              />
            </div>
          </section>

          {/* Download Button */}
          <section style={{ marginTop: 'var(--spacing-xxl)' }}>
            <h2 style={{ color: 'var(--theme-text-primary)', marginBottom: 'var(--spacing-lg)' }}>Download Button</h2>
            <DownloadButton 
              href="/file.pdf"
              fileName="design-system.pdf"
              variant="secondary"
              size="large"
            />
          </section>

          {/* Card Components */}
          <section style={{ marginTop: 'var(--spacing-xxl)' }}>
            <h2 style={{ color: 'var(--theme-text-primary)', marginBottom: 'var(--spacing-lg)' }}>Card Component</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
              {/* Default Card */}
              <Card variant="default">
                <Card.Header>
                  <Card.Title>Default Card</Card.Title>
                </Card.Header>
                <Card.Body>
                  A standard card with neutral styling. Perfect for displaying content in an organized, structured format.
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary" size="small">Action</Button>
                  <TextButton variant="secondary" size="small">Learn More</TextButton>
                </Card.Footer>
              </Card>

              {/* Highlighted Card */}
              <Card variant="highlighted" interactive>
                <Card.Header>
                  <Card.Title>Highlighted Card</Card.Title>
                </Card.Header>
                <Card.Body>
                  An interactive card with orange accent border. Great for featured content or call-to-action sections.
                </Card.Body>
                <Card.Footer>
                  <Button variant="secondary" size="small">Explore</Button>
                  <IconButton icon="→" ariaLabel="Next" variant="ghost" size="small" />
                </Card.Footer>
              </Card>

              {/* Elevated Card */}
              <Card variant="elevated">
                <Card.Header>
                  <Card.Title>Elevated Card</Card.Title>
                </Card.Header>
                <Card.Body>
                  A card with elevated background styling. Ideal for secondary content or grouped information sections.
                </Card.Body>
                <Card.Footer>
                  <OutlineButton variant="primary" size="small">View Details</OutlineButton>
                </Card.Footer>
              </Card>

              {/* Card with Image */}
              <Card variant="default">
                <Card.Image src={viteLogo} alt="Vite Logo" />
                <Card.Header>
                  <Card.Title>Card with Image</Card.Title>
                </Card.Header>
                <Card.Body>
                  Cards can include images for visual content representation. Perfect for product showcases or media galleries.
                </Card.Body>
              </Card>

              {/* Disabled Card */}
              <Card variant="default" disabled>
                <Card.Header>
                  <Card.Title>Disabled Card</Card.Title>
                </Card.Header>
                <Card.Body>
                  A disabled card appears faded and is not interactive. Use this state for unavailable content.
                </Card.Body>
              </Card>

              {/* Card with Only Body */}
              <Card variant="elevated" interactive>
                <Card.Body style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>✨</div>
                  <strong>Minimal Card</strong>
                  <p style={{ marginTop: 'var(--spacing-sm)', color: 'var(--theme-text-secondary)' }}>A simple card with only body content.</p>
                </Card.Body>
              </Card>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default App
