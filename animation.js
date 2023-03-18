const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.5, staggerChildren: 0.25 }
  }
}

const item = {
  hidden: { y: '100%' },
  visible: { y: 0, transition: { duration: 0.5 } }
}

export { container, item }
