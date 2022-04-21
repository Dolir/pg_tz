import React from "react"
import { useTrail, a } from "@react-spring/web"
const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 1500, friction: 80 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 40,
    from: { opacity: 0, y: 40, height: 0 },
    
  })
  return (
    <div className="d-flex">
      {trail.map(({ height, color, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height, color }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}
export default Trail
