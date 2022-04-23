import React from "react"
import { useTrail, a } from "@react-spring/web"
const Trail = ({ open, children, className }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 2000, friction: 70 },

    opacity: open ? 1 : 0,
    y: open ? 0 : 40,
    from: { opacity: 0, y: 40 }
  })
  return (
    <div className={className || ""}>
      {trail.map(({ height, color, ...style }, index) => (
        <a.div
          key={index}
          style={style}
          className={items[index] === "divider" ? "trail__divider" : ""}
        >
          <a.div style={{ height, color }}>
            {items[index] === "divider" ? "" : items[index]}
          </a.div>
        </a.div>
      ))}
    </div>
  )
}
export default Trail
