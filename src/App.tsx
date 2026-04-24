import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Button, OutlineButton, TextButton, IconButton, DownloadButton } from './components/atoms'
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
        </section>
      </main>
    </>
  )
}

export default App
