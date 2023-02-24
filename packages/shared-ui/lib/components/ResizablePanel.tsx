import React from 'react'
import useMeasure from 'react-use-measure'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'

// https://github.com/samselikoff/2022-06-09-resizable-panel/commit/fe04a842367657b4acb1058c454d3eca739c419d

export interface ResizablePanelProps {
  children: React.ReactNode
  duration?: number
}

export function ResizablePanel({
  children,
  duration = 0.25,
}: ResizablePanelProps) {
  const [ref, { height }] = useMeasure()

  return (
    <MotionConfig transition={{ duration }}>
      <motion.div
        animate={{ height: height || 'auto' }}
        className="relative overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={JSON.stringify(children, ignoreCircularReferences())}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: duration / 2, delay: duration / 2 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: duration / 2 },
            }}
          >
            <div
              ref={ref}
              className={`${height ? 'absolute w-full' : 'relative'}`}
            >
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  )
}

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet()
  return (key: string, value: unknown) => {
    if (key.startsWith('_')) return // Don't compare React's internal props.
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return
      seen.add(value)
    }
    return value
  }
}
