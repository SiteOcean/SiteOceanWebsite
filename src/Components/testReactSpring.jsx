import * as React from 'react'
import { useSpring, animated, config } from '@react-spring/web'

export default function ReactSpring() {
  const [{ background }] = useSpring(
    () => ({
      from: { background: 'var(--step0)' },
      to: [
        { background: 'var(--step0)' },
        { background: 'var(--step1)' },
        { background: 'var(--step2)' },
        { background: 'var(--step3)' },
        { background: 'var(--step4)' },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  )

  return (
    <div className={"container"}>
      <div className="squares">
        <div className="block" />
        <div className="block" />
        <animated.div className="block" style={{ background }} />
      </div>
      <animated.div className="background" style={{ background }} />
    </div>
  )
}
